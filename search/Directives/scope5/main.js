/**
 * Created by arxxbx on 11/3/2014.
 */
var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.leaveVoicemail = function(number, message) {
        alert("Number: " + number + " said: " + message)
    }
});
// <phone number="555-1234" network="network" make-call="leaveVoicemail(number, message)"></phone>
//& function.
//=
//@

app.directive("phone", function() {
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: '<div class="panel">Number: {{number}} ' +
        '<p></p> Network:<select ng-model="network" ng-options="net for net in networks">' +
        '<input type="text" ng-model="value">' +
        '<div class="button" ng-click="makeCall({number: number, message: value})">Call home!</div></div>',

        link: function(scope) {
            scope.networks = ["Verizon", "AT&T", "Sprint"];
            scope.network = scope.networks[0]
        }
    }
});