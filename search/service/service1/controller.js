/**
 * Created by arxxbx on 11/15/2014.
 */
var ControllerModule=angular.module('app.ControllerModule',[]);
ControllerModule.controller('CalculatorController',function($scope,CalculatorService) {
    $scope.doSquare=function() {
        $scope.answer=CalculatorService.square($scope.number)}
    $scope.doCube = function(){
        $scope.answer = CalculatorService.cube($scope.number)
    }
});
