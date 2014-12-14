/**
 * Created by arxxbx on 11/1/2014.
 *
 * Need refactoring
 * Introduce service and map it to a Yoman boiler plate
 * controller makes the Avengers available in scope.
 */
var myApp = angular.module('myApp', []);
//when factory method invoked?
myApp.factory('Avengers',function(){
    var Avengers = {};
    Avengers.cast= [
        {
            name: "Robert Downey Jr.",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Banner / The Hulk"
        },
        {
            name: "Chris Hemsworth",
            character: "Thor"
        },
        {
            name: "Scarlett Johansson",
            character: "Natasha Romanoff / Black Widow"
        },
        {
            name: "Jeremy Renner",
            character: "Clint Barton / Hawkeye"
        },
        {
            name: "Tom Hiddleston",
            character: "Loki"
        },
        {
            name: "Clark Gregg",
            character: "Agent Phil Coulson"
        },
        {
            name: "Cobie Smulders",
            character: "Agent Maria Hill"
        }

    ];
    return Avengers;
});
//How is the function's scope is defined?
//How's function invoked?
//declared as controller in html using ng-controller
function AvengersCtrl($scope, Avengers) {
    $scope.avengers=Avengers;
}