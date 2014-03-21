'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', [
    'helpServices'
]);

//main form controller for whole scope
phonecatControllers.controller('MainCtrl',
        function($scope, $location, $localStorage, json_submit_builder) {

            var products = [
                {'url': 'product_accident', 'order': 1, 'title': 'Accident', 'img': 'img/icon1.png', 'data': null},
                {'url': 'product_camp', 'order': 2, 'title': 'Camp', 'img': 'img/icon2.png', 'data': null},
                {'url': 'product_car', 'order': 3, 'title': 'Car', 'img': 'img/icon3.png', 'data': null},
                {'url': 'product_house', 'order': 4, 'title': 'House', 'img': 'img/icon4.png', 'data': null},
                {'url': 'product_pet', 'order': 5, 'title': 'Pet', 'img': 'img/icon5.png', 'data': null},
                {'url': 'product_travel', 'order': 6, 'title': 'Travel', 'img': 'img/icon6.png', 'data': null}
            ];
            var selection = json_submit_builder.get_cookie();

            $scope.main_model = {'products': products, 'selection': selection};

            $scope.change_step = function(step) {
                var curr_form = $location.path().replace("/","");
                console.log();
                if(1 == 1){
                    if ($scope.main_model.curr_step != 0) {
                        $scope.main_model.selection[$scope.main_model.curr_step].data = json_submit_builder.build();
                        json_submit_builder.set_cookie($scope.main_model.selection);
                    }
                    if ($scope.main_model.selection[$scope.main_model.curr_step + step] != null) {
                        $location.path('/' + $scope.main_model.selection[$scope.main_model.curr_step + step].url);
                        $scope.main_model.curr_step = $scope.main_model.curr_step + step;
                    }
                    else if ($scope.main_model.selection.length > 1 && step == 1) {
                        if ($location.path() == '/personal') {
                            $location.path('/receipt');
                        }
                        else {
                            $scope.main_model.selection.push({'url': 'personal', 'order': 99, 'title': 'personal', 'img': '', 'data': null});
                            $location.path('/personal');
                            $scope.main_model.curr_step = $scope.main_model.curr_step + step;
                        }
                    }
                    else {
                        alert("You are at the end or you can't go more back...");
                    }
                }
                else{
                    setTimeout(function(){
                        $('input').focus().blur();
                    },1);
                }
            };

        });

//selection controller
phonecatControllers.controller('ProductSelCtrl',
        function($scope, order_sort, $location) {
            $scope.main_model.curr_step = 0;
            $scope.add_remove = function(product, action) {
                if (action == false) {
                    //if added new product to selection
                    if ($scope.main_model.selection[$scope.main_model.selection.length - 1].url == 'personal') {
                        $scope.main_model.selection.splice($scope.main_model.selection.length - 1, 0, product);
                    }
                    else {
                        $scope.main_model.selection.push(product);
                    }
                    if ($scope.main_model.curr_step == 0) {
                        order_sort.sort($scope.main_model.selection);
                    }
                    return true;
                }
                else if (action == true) {
                    //if removed product from selection
                    for (var i = 0; i < $scope.main_model.selection.length; i++) {
                        if ($scope.main_model.selection[i].url == product.url) {
                            $scope.main_model.selection.splice(i, 1);
                            if (i <= $scope.main_model.curr_step) {
                                $scope.main_model.curr_step--;
                            }
                            //kak zaj handlat ko se zbrise vn isti kaj si gor na njem in kak se pol dogaja
                            if ($location.path() == '/' + product.url) {
                                $location.path('/' + $scope.main_model.selection[i - 1].url);
                                //return true;
                            }
                        }
                    }
                }
            };
            $scope.check_state = function(product) {
                var flag = false;
                //console.debug($scope.main_model.selection);
                for (var i = 0; i < $scope.main_model.selection.length; i++) {
                    if (product.url == $scope.main_model.selection[i].url) {
                        flag = true;
                    }
                }
                return flag;
            }
        });

phonecatControllers.controller('ProductCtrl',
        function($scope, $location) {
            if ($scope.main_model.curr_step == 0) {
                $scope.main_model.curr_step++;
            }
            
            if ($scope.main_model.selection.length == 1) {
                var name = $location.path().replace("/", "");
                $scope.main_model.selection.push({'url': name, 'order': 0, 'title': 'special', 'img': 'img/icon4.png', 'data': null});
            }
            else if ($scope.main_model.selection.length > 1) {
                var name2 = $location.path().replace("/", "");
                for (var i = 0; i < $scope.main_model.selection.length; i++) {
                    if ($scope.main_model.selection[i].url == name2) {
                        $scope.main_model.curr_step = i;
                    }
                }
            }
        });

phonecatControllers.controller('PersonalCtrl',
        function($scope, $location) {
            if ($scope.main_model.selection.length == 1) {
                $location.path('/');
            }
        });

phonecatControllers.controller('ReceiptCtrl',
        function($scope, $location, json_submit_builder) {
            if ($scope.main_model.selection.length == 1) {
                $location.path('/');
            }
            json_submit_builder.delete_cookie();
            $scope.main_model.curr_step = 0;
            $scope.main_model.selection.splice(1);
        });