/**
 * @class features
 * @description features 模块
 * @time 2015-05-09 14:52
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var featuresModule = angular.module('features', []);

    featuresModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('features', {
                url        : '/features',
                templateUrl: 'app/features/features.tpl.html'
            });
    }]);

})(window, document);