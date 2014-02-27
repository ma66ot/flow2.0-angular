'use strict';

/* Services */

var helpServices = angular.module('helpServices', []);

helpServices.factory('order_sort', function() {
    return {
        sort: function(to_sort) {
            to_sort.sort(function(obj1, obj2) {
                return obj1.order - obj2.order;
            });
            return to_sort;
        }
    }
});

helpServices.factory('selection_check', function() {
    return {
        check: function() {
            return true;
        }
    }
});

helpServices.factory('json_submit_builder', function($location, $cookies, $localStorage) {
    return {
        build: function() {
            //console.log($location.path());
            var form = document.forms[$location.path()].elements;
            var array = $(form).serializeArray();
            return array;
        },
        delete: function() {
            return true;
        },
        set_cookie: function(data) {
            var time = new Date().getTime();
            time = time / 1000;
            $localStorage.iforsikring_dk_flow20 = {'timestamp': time, 'data': data};
            //console.log(data);
            return true;
        },
        get_cookie: function() {
            var time = new Date().getTime();
            time = time / 1000;
            var data = [{'url': '/', 'order': 0, 'title': 'Selection', 'img': 'img/icon1.png', 'data': null}];
            if (typeof $localStorage.iforsikring_dk_flow20 != 'undefined') {
                if ( time - 10 < $localStorage.iforsikring_dk_flow20.timestamp)
                    data = $localStorage.iforsikring_dk_flow20.data;
            }
            return data;
        }
    }
});