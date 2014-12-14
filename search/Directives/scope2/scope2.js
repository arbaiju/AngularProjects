/**
 * Created by arxxbx on 11/3/2014.
 */
var app = angular.module('phoneApp', []);
app.controller('AppCtrl',function($scope) {
    //callHome is available from view, message
$scope.callHome=function(message) {
    alert(message);
}

});
app.directive("phone", function(){
    return {
        scope: {
            //TBU from view: <div phone dial="callHome(message)"></div>
            dial:"&"
        },
        template:'<input type="text" ng-model="value">' +
            //syntax {message:value}
        '<div class="button" ng-click="dial({message:value})">Call Home!</div>'
        //TBU from view: <div phone dial="callHome(message)"></div>
    }
});