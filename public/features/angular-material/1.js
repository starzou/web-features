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

    $scope.hobbies = [
        {label: '唱歌'},
        {label: 'Code', checked: true},
        {label: '游泳'},
        {label: '打篮球'},
        {label: '踢足球'}
    ];

}]);