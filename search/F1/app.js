/**
 * Created by arxxbx on 11/14/2014.
 */
var F1FeederApp=angular.module("F1FeederApp",[
        "F1FeederApp.F1ControllerModule",
        "F1FeederApp.F1ServiceModule",
        "ngRoute"]);


F1FeederApp.config(["$routeProvider",function($routeProvider) {
    $routeProvider.
        when("/drivers", {templateUrl:"drivers.html", controller:"driversController"}).
        when("/drivers/:id", {templateUrl:"driver.html", controller:"driverController"}).
        otherwise({redirectTo:"/drivers"});
}]);