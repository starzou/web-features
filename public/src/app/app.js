/**
 * @class app
 * @description 高性能web研究
 * @time 2015-04-28 10:21
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var app = angular.module('App', ['ui.router', 'ngResource', 'ngAnimate', 'ngSanitize', 'Socket', 'chatForm']);

    app.controller('AppController', ['$scope', function ($scope) {
        $scope.title = '高性能web研究';
    }]);

})(window, document);