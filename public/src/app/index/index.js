/**
 * @class index
 * @description 首页模块
 * @time 2015-05-09 12:18
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var indexModule = angular.module('index', []);

    indexModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('index', {
                url        : '/',
                templateUrl: 'app/index/index.tpl.html'
            });
    }]);

})(window, document);