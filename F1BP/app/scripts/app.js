'use strict';

/**
 * @ngdoc overview
 * @name f1BpApp
 * @description
 * # f1BpApp
 *
 * Main module of the application.
 */
/*angular
  .module('f1BpApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/
/**
 * Created by arxxbx on 11/14/2014.
 */
var F1FeederApp=angular.module("F1FeederApp",[
  "F1FeederApp.F1ControllerModule",
  "F1FeederApp.F1ServiceModule",
  "ngRoute"]);


F1FeederApp.config(["$routeProvider",function($routeProvider) {
  $routeProvider.
    when("/drivers", {templateUrl:"views/drivers.html", controller:"driversController"}).
    when("/drivers/:id", {templateUrl:"views/driver.html", controller:"driverController"}).
    otherwise({redirectTo:"/drivers"});
}]);
