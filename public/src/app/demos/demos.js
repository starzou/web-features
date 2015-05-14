/**
 * @class demos
 * @description demos 模块
 * @time 2015-05-13 22:45
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var demosModule = angular.module('demos', ['demos.chatRoom']);

    demosModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('demos', {
                url        : '/demos',
                templateUrl: 'app/demos/demos.tpl.html'
            });
    }]);

})(window, document);