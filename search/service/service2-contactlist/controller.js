/**
 * Created by arxxbx on 11/15/2014.
 */
    //'app.ControllerModule'

var ControllerModule = angular.module('app.ControllerModule',[]);
//ContactService injected
ControllerModule.controller("ContactController",function($scope, ContactService) {
    $scope.contacts = ContactService.list();

    $scope.saveContact = function() {
        ContactService.save($scope.newContact);
        $scope.newContact={};
    };
    $scope.deleteContact = function(id) {
        ContactService.deleteContact(id);
        $scope.newContact={};
    };
    $scope.edit = function(id) {
    $scope.newContact=angular.copy(ContactService.get(id));
}
    $scope.cancelEdit = function(id) {
        $scope.newContact={};
    }
});