/**
 * @class app
 * @description angular研究
 * @time 2015-04-28 10:21
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var app = angular.module('App', ['ngSanitize']);

    app.controller('AppController', ['$scope', function ($scope) {
        $scope.title = 'know more web-features';
    }]);

    /**
     * 测试ng 指令执行过程
     */
    app.directive('ngFlow', ['$animate', function ($animate) {
        return {
            restrict   : 'EA',
            transclude : true,
            scope      : true,
            templateUrl: 'js/ng-flow.tpl.html',
            controller : ['$scope', '$attrs', function ($scope, $attrs) {
                console.log('%s controller ...', $attrs.name);
            }],
            compile    : function ($element, $attrs) {
                console.log('%s compile ...', $attrs.name);

                return {
                    pre: function ngFlowPreLink($scope, $element, $attrs, ctrls) {
                        console.log('%s pre ...', $attrs.name);
                    },

                    post: function ngFlowPreLink($scope, $element, $attrs, ctrls) {
                        console.log('%s post ...', $attrs.name);

                        angular.forEach(['name'], function (key) {
                            if (angular.isDefined($attrs[key])) {
                                $scope[key] = $attrs[key];
                            }
                        });
                    }
                };
            }
        }
    }]);

})(window, document);