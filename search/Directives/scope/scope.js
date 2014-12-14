/**
 * Created by arxxbx on 11/2/2014.
 */
var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function($scope) {
    //logChore is available from view
    //chore is available from view - created dynamically by "kid" directive
    $scope.logChore = function (chore) {
        alert(chore + " is done");
    }
});
//
app.directive("kid", function(){
    return {
        restrict: "E",
        scope:{
            //TBU : done holds a function assigned in the view when kid is used
            //<kid done="logChore(chore)"></kid>
            done:"&"
        },
        // how to separate out the html
        //ng-click="done({chore:choreName})
        template: '<input type="text" ng-model="choreName">' +
            //done() is replaced with logChore()
        '<p>{{chore}}</p>' + '<div class="button" ng-click="done({chore:choreName})">I\'m done</div>'
        //chore is defined dynamically by kid in "done({chore:choreName})"
    }
});
/*
 <div ng-app="choreApp">
 <div ng-controller="ChoreCtrl">
 <kid done="logChore(chore)"></kid>
 <kid done="logChore(chore)"></kid>
 </div>

 </div>

 */