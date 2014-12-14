/**
 * Created by arxxbx on 11/15/2014.
 */
var F1ServiceModule = angular.module('F1FeederApp.F1ServiceModule',[]);
F1ServiceModule.factory('ergastAPIservice',function($http) {
        var ergastAPI = {};
        ergastAPI.getDrivers = function() {
            return $http({
                method: 'JSONP',
                url:'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
            });
        };
        ergastAPI.getDriverDetails = function(id) {
            return $http({
                method:'JSONP',
                url:'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
            });
        }
        ergastAPI.getDriverRaces = function(id) {
            return $http({
                method:'JSONP',
                url:'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
            })
        }
        return ergastAPI;
    });