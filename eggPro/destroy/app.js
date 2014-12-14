/**
 * Created by arxxbx on 11/8/2014.
 */
var demoApp = angular.module("demo", []);
demoApp.factory("person", function () {
        return {
            firstName: "John",
            lastName: "Lindquist"
        }
    });

demoApp.controller("MyCtrl", function ($scope, person) {
        var ctrl = this;
        ctrl.person = person;

        ctrl.click = function () {
            $scope.$destroy();
        }

    });

demoApp.directive("myDirective", function () {
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
    });