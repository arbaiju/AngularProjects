/**
 * Created by arxxbx on 11/3/2014.
 */
var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry"
});

app.directive("drink", function() {
    return {
        scope: {
            //TBU from view: <input type="text" ng-model="ctrlFlavor">
            //TBU from view: <div drink flavor="ctrlFlavor"></div>
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    }
})