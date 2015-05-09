/**
 * @class node
 * @description node 模块
 * @time 2015-05-09 15:05
 * @author StarZou
 **/

(function (window, document) {
    'use strict';

    var nodeModule = angular.module('features.node', []);

    nodeModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('features.node', {
                url  : '/node',
                views: {
                    '@': {
                        templateUrl: 'app/features/node/node.tpl.html'
                    }
                }
            });
    }]);

})(window, document);