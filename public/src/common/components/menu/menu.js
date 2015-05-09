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
                    {title: '首页', state: 'index'},
                    {
                        title   : 'web-features',
                        children: [
                            {title: 'Node.js 研究', state: 'features.node'},
                            {title: 'Node MySQL 研究', state: 'features.mysql'}
                        ]
                    }
                ];
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