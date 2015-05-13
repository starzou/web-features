/**
 * @class app
 * @description 高性能web研究
 * @time 2015-04-28 10:21
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var app = angular.module('App', ['ui.router', 'ngResource', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'Socket', 'components.chatForm', 'components.menu', 'directives.patcher', 'index', 'features']);

    /**
     * App 配置, 用来做一些服务的配置
     */
    app.config(['$urlRouterProvider', function ($urlRouterProvider) {
        // 默认打开 积分发放页面
        $urlRouterProvider.otherwise('/');
    }]);

    app.config(["$resourceProvider", function ($resourceProvider) {
        // 强制区分RESTFUL请求url的/分隔符
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

    // app 配置
    app.run(['$rootScope', '$mdSidenav', function ($rootScope, $mdSidenav) {
        $rootScope.componentId = 'left';

        /**
         * toggle侧边栏
         * @param componentId
         */
        $rootScope.toggleSideNav = function (componentId) {
            $mdSidenav(componentId || $rootScope.componentId).toggle();
        };

        /**
         * 打开侧边栏
         * @param componentId
         */
        $rootScope.openSideNav = function (componentId) {
            $mdSidenav(componentId || $rootScope.componentId).open();
        };

        /**
         * 关闭侧边栏
         * @param componentId
         */
        $rootScope.closeSideNav = function (componentId) {
            $mdSidenav(componentId || $rootScope.componentId).close();
        };

        /**
         * 路由成功, 关闭侧边栏
         */
        $rootScope.$on('$stateChangeStart', function (event, self) {
            $rootScope.closeSideNav();
        });

    }]);

    /**
     * AppController
     */
    app.controller('AppController', ['$scope', function ($scope) {
        $scope.title = '高性能web研究';
    }]);

})(window, document);