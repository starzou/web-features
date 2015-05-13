/**
 * @class menu
 * @description menu 组件模块
 * @time 2015-05-09 12:28
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var menuModule = angular.module('components.menu', []);

    /**
     * Menus 资源
     */
    menuModule.factory('Menus', ['$resource', function ($resource) {
        return $resource('menus/', null, {});
    }]);

    menuModule.directive('menu', ['Menus', function (Menus) {
        return {
            restrict   : 'E',
            scope      : true,
            templateUrl: 'common/components/menu/menu.tpl.html',
            link       : function ($scope, $element, $attrs) {

                // 查询 菜单数据
                Menus.get(function (result) {
                    $scope.menus = result.data;
                });

            }
        };
    }]);

    /**
     * 菜单节点 指令
     */
    menuModule.directive('menuNode', ['recursionHelper', function (recursionHelper) {
        return {
            restrict   : 'E',
            scope      : {
                menu: '='
            },
            templateUrl: 'common/components/menu/menu-node.tpl.html',
            compile    : function ($element, $attr) {
                function postLink($scope, $element, $attr) {

                };

                return recursionHelper.compile($element, postLink);
            }
        }
    }]);

})(window, document);