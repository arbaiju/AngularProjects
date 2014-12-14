/**
 * Created by arxxbx on 11/3/2014.
 */
var app = angular.module("drinkApp",[]);
app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor="Blackberry"
});
app.directive("drink", function() {
    return {
        scope:{
            //TBU from view: <div drink flavor="{{ctrlFlavor}}"></div>
            flavor: "@"
        },

        template: '<div> {{flavor}}</div>'
    }

});
