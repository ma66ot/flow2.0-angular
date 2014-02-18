'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', [
    'helpServices'
]);

phonecatControllers.controller('PhoneSelCtrl',
  function($scope, order_sort) {
      var selection = [
       {'url':'#/ena','order':2,'title':'prva'},
       {'url':'#/dva','order':1,'title':'druga'},
       {'url':'#/tri','order':3,'title':'tretja'}
   ];
    var curr_step = 0;
    
    var link = order_sort.sort(selection);
    
    var main_model = {'step':curr_step, 'link':link};
    $scope.main_model = main_model;
    
    $scope.back = function(){
        $scope.main_model.step--;
        window.history.back();
    }
    $scope.next = function(){
        
        var i = $scope.main_model.step;
        window.location.assign(link[i].url);
        $scope.main_model.step++;
    }
  });

phonecatControllers.controller('PhoneEnaCtrl',
  function($scope) {
    
    
  });

phonecatControllers.controller('PhoneDvaCtrl',
  function($scope) {
      
    
  });
  
phonecatControllers.controller('PhoneTriCtrl',
  function($scope) {
      
    
  });