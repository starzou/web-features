/**
 * @class chat-room
 * @description 聊天室组件
 * @time 2015-05-09 11:50
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var chatRoomModule = angular.module('components.chatRoom', []);

    chatRoomModule.directive('chatRoom', ['$mdToast', function ($mdToast) {
        return {
            restrict   : 'E',
            scope      : true,
            templateUrl: 'common/components/chat-room/chat-room.tpl.html',
            link       : function ($scope, $element, $attrs) {
                // socket 对象
                var socket = $scope.socket;

                // 发送消息
                $scope.sendMessage = function (message) {
                    socket.emit('message:send', message);
                    message.content = null;
                };

                // 更新消息
                socket.on('message:update', function (message) {
                    $scope.$apply(function () {
                        console.log('message : ', message);
                        $scope.messages.push(message);
                    });
                });

                // 同步消息
                socket.on('message:list', function (messages) {
                    $scope.$apply(function () {
                        console.log('messages : ', messages);
                        $scope.messages = messages;
                    });
                });

                socket.emit('message:list');

                // 赋值
                angular.forEach(['name'], function (value) {
                    if ($attrs[value]) {
                        $scope[value] = $attrs[value];
                    }
                });

                // 检查是否注册
                socket.emit('message:login');

                socket.on('message:login', function (result) {
                    $scope.$apply(function () {

                        var registered = $scope.registered = result.registered;
                        $scope.user = result.user;

                        // 没有注册
                        if (!registered) {
                            showMessage('请先注册, 再使用!');
                        } else {
                            $scope.show('chatForm');
                            showMessage('注册成功!');
                        }

                    });
                });

                var showMessage = $scope.showMessage = function (content) {
                    var toast = $mdToast.simple()
                        .content(content || '')
                        .position('top right')
                        .hideDelay(3000);

                    $mdToast.show(toast);
                };

                // 进行登录
                $scope.login = function (user) {
                    socket.emit('message:login', user);
                };

                $scope.show = function (place) {
                    $scope.place = place;
                };
            }
        };
    }]);

})(window, document);