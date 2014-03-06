'use strict';

/* Validators */

var validation = angular.module('validation',[]);

validation.controller('validationMassages', function(){
    
});

validation.directive('integer', function(){
    return{
        restrict: 'AC',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel){
            
            function validate(){
                var check = false;
                
                //validity switch
                (check == true)? ngModel.$setValidity(attrs.name, true): ngModel.$setValidity(attrs.name, false);
            }
            
            scope.$watch( function() {
              return ngModel.$viewValue;
            }, validate);
        }
    };
});