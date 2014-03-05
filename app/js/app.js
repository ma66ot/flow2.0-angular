'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'helpServices',
    'ngCookies',
    'ngStorage'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/', {
                    //templateUrl: 'partials/selection.html',
                    controller: 'ProductSelCtrl'
                }).
                when('/product_car', {
                    templateUrl: 'partials/product_car.html',
                    controller: 'ProductCtrl'
                }).
                when('/product_accident', {
                    templateUrl: 'partials/product_accident.html',
                    controller: 'ProductCtrl'
                }).
                when('/product_camp', {
                    templateUrl: 'partials/product_camp.html',
                    controller: 'ProductCtrl'
                }).
                when('/product_house', {
                    templateUrl: 'partials/product_house.html',
                    controller: 'ProductCtrl'
                }).
                when('/product_pet', {
                    templateUrl: 'partials/product_pet.html',
                    controller: 'ProductCtrl'
                }).
                when('/product_travel', {
                    templateUrl: 'partials/product_travel.html',
                    controller: 'ProductCtrl'
                }).
                when('/personal', {
                    templateUrl: 'partials/personal.html',
                    controller: 'PersonalCtrl'
                }).
                when('/receipt', {
                    templateUrl: 'partials/receipt.html',
                    controller: 'ReceiptCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
    }]);