'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'helpServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        //templateUrl: 'partials/ena.html',
        controller: 'PhoneSelCtrl'
      }).
      when('/ena', {
        templateUrl: 'partials/ena.html',
        controller: 'PhoneEnaCtrl'
      }).
      when('/dva', {
        templateUrl: 'partials/dva.html',
        controller: 'PhoneDvaCtrl'
      }).
      when('/tri', {
        templateUrl: 'partials/tri.html',
        controller: 'PhoneTriCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
 }]);