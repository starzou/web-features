/**
 * @class menu
 * @description menu 组件模块
 * @time 2015-05-09 12:28
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var menuModule = angular.module('menu', []);

    menuModule.directive('menu', [function () {
        return {
            restrict   : 'E',
            scope      : true,
            templateUrl: 'common/components/menu/menu.tpl.html',
            link       : function ($scope, $element, $attrs) {
                // 菜单数据
                $scope.menus = [
                    {title: '首页', state: 'index'}
                ];
            }
        };
    }]);

})(window, document);