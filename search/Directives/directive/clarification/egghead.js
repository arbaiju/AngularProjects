/**
 * Created by arxxbx on 11/1/2014.
 */
var egghead = angular.module('egghead',[]);
egghead.controller('EggCtrl', function() {
    var egg = this;
    egg.message = "Hello";
});
//how  'scope.app.message' translate to 'egg.message' from controller
//<body ng-app="egghead" ng-controller="EggCtrl as app">
//app is the alias for controller (this), available in scope
//scope.app.message is same as egg.message
//<div my-first-directive="" message="Mom!"></div>
//attrs.message is Mom from html directive
//

egghead.directive("myFirstDirective", function(){
    return function(scope,element,attrs) {
        element.text(scope.app.message + " " + attrs.message);
    }
});
