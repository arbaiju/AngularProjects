/**
 * Created by arxxbx on 10/31/2014.
 */
var myApp = angular.module('myApp',[]);
//define a service
myApp.factory('Data', function(){
    return{message:"I'm data from a service"}
})
//define a custom filter
myApp.filter('reverse',function(){
    return function(text) {
        return text.split("").reverse().join("");
    }
})

//define FirstCtrl
function FirstCtrl($scope, Data) {
    $scope.data = Data;
}

function SecondCtrl($scope, Data) {
    $scope.data = Data;

    //define a method inside a scope

   // $scope.reversedMessage = function (message) {
       // return message.split("").reverse().join("");
   // }
}