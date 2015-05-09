/**
 * @class chat-form
 * @description 聊天室组件
 * @time 2015-05-09 11:50
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var chatFormModule = angular.module('chatForm', []);

    chatFormModule.directive('chatForm', [function () {
        return {
            restrict   : 'E',
            scope      : true,
            templateUrl: 'src/common/components/chat-form/chat-form.tpl.html',
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

                // 赋值
                angular.forEach(['chatName'], function (value) {
                    if ($attrs[value]) {
                        $scope[value] = $attrs[value];
                    }
                });
            }
        };
    }]);

})(window, document);