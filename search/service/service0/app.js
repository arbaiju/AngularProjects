/**
 * Created by arxxbx on 11/14/2014.
 */
var app = angular.module('app', []);
//service providing basic math services
app.service('MathService', function(){
    this.add = function(a,b) {
        return a+b;
    }
    this.substract=function(a,b) {
        return a-b;
    }
    this.multiply = function(a,b) {
        return a * b;
    }
    this.divide = function(a,b) {
        return a / b;
    }
});
//squre, cube service uses math service
app.service('CalculatorService',function(MathService) {
    this.square = function(a) {
        return MathService.multiply(a,a);
    }
    this.cube=function(a) {
        return MathService.multiply(a,MathService.multiply(a,a))
    }
});
app.controller('CalculatorController',function($scope,CalculatorService) {
//    <button ng-click="doSquare()">X<sup>2</sup></button>
//
    $scope.doSquare=function() {
        $scope.answer=CalculatorService.square($scope.number)}
 //    <button ng-click="doCube()">X<sup>3</sup></button>
    //CalculatorService is accessed directly from view
    //doCube function does not have number param
    $scope.doCube = function(){
        $scope.answer = CalculatorService.cube($scope.number)
    }
});