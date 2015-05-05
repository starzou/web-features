/**
 * @class app
 * @description angular研究
 * @time 2015-04-28 10:21
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var app = angular.module('App', ['ngAnimate', 'ngSanitize', 'Socket']);

    app.controller('AppController', ['$scope', function ($scope) {
        $scope.title = 'know more web-features';
    }]);

    app.directive('chatForm', [function () {
        return {
            restrict   : 'E',
            scope      : true,
            templateUrl: 'js/chat-form.tpl.html',
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
            }
        };
    }]);

})(window, document);