/**
 * @class chat-room
 * @description 聊天室模块
 * @time 2015-05-14 10:27
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var chatRoomModule = angular.module('demos.chatRoom', []);

    chatRoomModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('demos.chatRoom', {
                url  : '/chatRoom',
                views: {
                    '@': {
                        templateUrl: 'app/demos/chat-room/chat-room.tpl.html'
                    }
                }
            });
    }]);

})(window, document);