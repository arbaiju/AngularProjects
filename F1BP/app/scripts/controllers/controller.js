/**
 * Created by arxxbx on 11/15/2014.
 */
var F1ControllerModule=angular.module("F1FeederApp.F1ControllerModule",[]);
F1ControllerModule.controller("driversController",function($scope, ergastAPIservice) {
    $scope.driversList=[ ];
    $scope.nameFilter = null;
    $scope.searchFilter = function (driver) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().success(function(response){
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    })
});
F1ControllerModule.controller("driverController",function($scope,$routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function(response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });
    ergastAPIservice.getDriverRaces($scope.id).success(function(response) {
        $scope.races = response.MRData.RaceTable.Races;
    })
});