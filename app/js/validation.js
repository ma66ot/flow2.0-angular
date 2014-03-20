'use strict';

/* Validators */

var validation = angular.module('validation', []);

/*
 * Validation rules controller
 * When defining new rules add name and parameters into $scope.validationRules
 * When a special function is required for the validation define it under {name.fun} and has to return 1 if validation successful
 * otherwise define fun : function(){return null;}
 * 
 * 
 */
validation.controller('validationRules', function($scope, $http) {
    $scope.step_valid = false;
    $scope.validationRules = {
        "required":{
            "regex" : null,
            "msg" : "You have to enter at least something",
            fun : function(param, $scope){
                if(param !== "" && param !== undefined){
                    return true;
                }
            }
        },
        "email":{
            "regex" : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "msg" : "You have to enter the whole email.",
        },
        "fullname":{
            "regex" : /^\s*\S+\s+\S+(\s*\S)*\s*$/,
            "msg" : "You have to enter the whole name.",
        }
    };
});

//connected on blur event directive
validation.directive('validate', function() {
    return {
            restrict: 'AC',
            require: 'ngModel',
            template: 'kaka',
            link: function(scope, element, attrs, ngModel, ngModeCtrl) {
                ngModel.$error = null;
                
                element.bind('blur', function () {
                    var error_msg = new Array();
                    var validation_a = attrs.validate.replace(" ","").split(",");
                    
                    for(var i = 0; i < validation_a.length; i++){
                        var rule = scope.validationRules[validation_a[i]];
                        if(rule !== undefined && rule.regex === null){
                            if(!rule.fun(ngModel.$viewValue)){
                                error_msg.push(rule.msg);
                            }
                        }
                        else if(rule !== undefined && rule.regex !== null){
                            if(!rule.regex.test(ngModel.$viewValue)){
                                error_msg.push(rule.msg);
                            }
                        }
                        else{
                            alert("You are trying to use a nonexistent validation rule!");
                        }
                    }
                    if(error_msg.length !== 0){
                        
                        scope.$apply(function(){
                             ngModel.$error = error_msg;
                        });
                    }
                    else{
                        scope.$apply(function(){
                             ngModel.$error = null;
                             scope.step_valid = true;
                        });
                    }
                });
            }
        };
});