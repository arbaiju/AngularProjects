'use strict';

/**
 * @ngdoc function
 * @name eggly3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eggly3App
 */
angular.module('eggly3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
