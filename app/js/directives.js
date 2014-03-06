'use strict';

/* Directives */

var validation = angular.module('validation',[]);

validation.directive('integer', function(){
    return{
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel){
            console.log("Testing directive");
        }
    };
});