/**
 * @class media
 * @description media 模块
 * @time 2015-05-14 15:45
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var mediaModule = angular.module('demos.media', []);

    mediaModule.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('demos.media', {
                url  : '/media',
                views: {
                    '@': {
                        templateUrl: 'app/demos/media/media.tpl.html',
                        controller : 'MediaController'
                    }
                }
            });
    }]);

    mediaModule.controller('MediaController', ['$scope', function ($scope) {

    }]);

})(window, document);