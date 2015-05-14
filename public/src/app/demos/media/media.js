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

        $scope.getUserMedia = function () {
            var video = document.querySelector('.user-video');

            navigator.getUserMedia(constraints, function (stream) {

                video.src = window.URL.createObjectURL(stream);

                video.onloadedmetadata = function (e) {
                    video.play();
                };

            }, function (error) {
                console.error(error);
            });
        };

    }]);

    var constraints = {audio: true, video: true};
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

})(window, document);