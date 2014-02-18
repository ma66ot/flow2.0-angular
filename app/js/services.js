'use strict';

/* Services */

var helpServices = angular.module('helpServices',[]);

helpServices.factory('link_next',function(){
    return 'kaka';
});

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