/**
 * Created by arxxbx on 11/8/2014.
 */
angular.module("demo", [])
//factory to create a person object

.factory("person", function () {
        return {
            firstName: "John",
            lastName: "Lindquist"
        }
    })

    .controller("MyCtrl", function ($scope, person) {
        var my = this;
        //2-way binding
        my.person = person;
// destroy gives a last opportunity to save any information before
// the elements are removed from DOM. This is redundant due
        // to 2-way binding, just to demonstrate
        //alternately we can remove teh factory and make this a console.log
$scope.$on("$destroy",function() {
    my.person=person;
})

    })

.directive("myDirective", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div style='border: 1px solid black'>My Directive</div>",
            link: function (scope) {
                scope.$on("$destroy", function () {
                    console.log("directive destroy");
                })
            }
        }
    })