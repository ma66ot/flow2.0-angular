'use strict';

/* Services */

var helpServices = angular.module('helpServices',[]);

helpServices.factory('order_sort',function(){
    return {
        sort: function(to_sort){
            to_sort.sort(function(obj1, obj2){
                return obj1.order - obj2.order;
            });
            return to_sort;
        }
    }
});

helpServices.factory('selection_check',function(){
    return {
        check: function(){
            return true;
        }
    }
});

helpServices.factory('json_submit_builder',function(){
    return {
        build: function(){
            return true;
        },
        delete: function(){
            return true;
        }
    }
});