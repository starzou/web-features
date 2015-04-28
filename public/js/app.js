/**
 * @class app
 * @description angular研究
 * @time 2015-04-28 10:21
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var app = angular.module('App', []);

    app.controller('AppController', ['$scope', function ($scope) {
        $scope.title = 'know more web-features';
    }]);

})(window, document);