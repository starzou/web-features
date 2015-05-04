/**
 * @class socket
 * @description socket 客户端
 * @time 2015-05-04 18:35
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var socketModule = angular.module('Socket', []);

    socketModule.provider('socket', function () {
        this.$get = function () {
            return io();
        }
    });

    socketModule.run(['$rootScope', 'socket', function ($rootScope, socket) {
        $rootScope.socket = socket;
    }]);

})(window, document);