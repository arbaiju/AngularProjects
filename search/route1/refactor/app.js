/**
 * Created by arxxbx on 11/14/2014.
 * refactor to Yoman Boiler plate
 */
var sampleApp=angular.module("sampleApp",[]);
//route definition
//revise the $routeProvider injection
sampleApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/AddNewOrder", {
            templateUrl:"templates/add_order.html",
            controller:"AddOrderController"
        }).
        when("/ShowOrders",{
            templateUrl:"templates/show_orders.html",
            controller:"ShowOrdersController"
        }).
        otherwise({
            redirectTo:"AddNewOrder"
        });
}]);
//move it to a controller module
sampleApp.controller("AddOrderController",function($scope) {
    $scope.messagev1="This is Add new order screen";
});
sampleApp.controller("ShowOrdersController",function($scope) {
    $scope.messagev2 = "This is show orders screen";
});
//.
//create a service module to provide order information
//and add new order information
//service module to have a json/object array
//refer F1B
//.