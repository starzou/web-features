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
                        templateUrl: 'app/features/node/node.tpl.html',
                        controller : 'NodeController'
                    }
                }
            });
    }]);

    /**
     * Users 资源
     */
    nodeModule.factory('Users', ['$resource', function ($resource) {
        return $resource('users/', null, {});
    }]);

    nodeModule.controller('NodeController', ['$scope', 'Users', function ($scope, Users) {

        // 保存用户
        $scope.saveUser = function (user) {
            Users.save(user, function () {
                console.log(arguments);
            });
        };

    }]);

})(window, document);