/**
 * @class 1
 * @description
 * @time 2015-04-27 18:17
 * @author StarZou
 **/


var app = angular.module('App', ['ngMaterial']);

app.controller('AppController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);