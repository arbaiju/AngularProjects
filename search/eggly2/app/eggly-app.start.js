/**
 * Created by arxxbx on 11/5/2014.
 */
var app = angular.module("Eggly", []);
app.controller("MainCtrl",function($scope) {
    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];
    $scope.bookmarks = [
        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id": 1, "title": "Egghead.io", "url": "https://egghead.io", "category": "Development" },
        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];
   $scope.currentCategory=null;
    $scope.isCreateActive=false;
    $scope.isEditActive=false;
//    $scope.edBookmark={};
    function setCurrentCategory(category) {
        $scope.currentCategory=category;
        cancelButton();
    }
    function isCurrentCategory(category) {
        return ($scope.currentCategory!==null) && ($scope.currentCategory===category);
    }
    function shouldShowCreate() {
        return ($scope.currentCategory!==null) && (!$scope.isEditActive);
    }
    function shouldShowEdit() {
        return ($scope.currentCategory!==null) && !($scope.isCreateActive);

    }

    function startEditing() {
        $scope.isEditActive=true;
        $scope.isCreateActive=false;

    }
    function startCreating(){
        $scope.isCreateActive=true;
        $scope.isEditActive=false;
        resetCreateForm();
    }
    function cancelButton() {
        $scope.isCreateActive=false;
        $scope.isEditActive=false;
    }
    function resetCreateForm() {
        $scope.newBookmark={
            title:'',
            url:'',
            category:$scope.currentCategory,
            id:''
        }
    }
    function createBookmark(bookmark) {
        bookmark.id=$scope.bookmarks.length;
        bookmark.category=$scope.currentCategory;
        $scope.bookmarks.push(bookmark);
        resetCreateForm();
    }
    $scope.editedBookmark=null;

    function setEditedBookmark(bookmark) {
        $scope.editedBookmark=angular.copy(bookmark);
    }
    function updateBookmark(bookmark) {
       var index=  _.findIndex($scope.bookmarks,function(b) {
            return b.id==bookmark.id;
        });
        $scope.bookmarks[index]=bookmark;
        $scope.editedBookmark=null;
        $scope.isEditActive = false;
    }
    function isSelectedBookmark(bookmarkid) {
        return ($scope.editedBookmark !== null) && ($scope.editedBookmark.id === bookmarkid);
    }
    function deleteBookmark(bookmark) {
        _.remove($scope.bookmarks,function(b) {
           return  b.id==bookmark.id;
        });

    }

    $scope.setCurrentCategory=setCurrentCategory;
    $scope.isCurrentCategory=isCurrentCategory;

    $scope.shouldShowCreate=shouldShowCreate;
    $scope.shouldShowEdit=shouldShowEdit;


    $scope.startEditing=startEditing;
    $scope.startCreating=startCreating;
    $scope.cancelButton=cancelButton;
    $scope.createBookmark=createBookmark;
    $scope.updateBookmark=updateBookmark;
    $scope.setEditedBookmark=setEditedBookmark;
    $scope.isSelectedBookmark=isSelectedBookmark;
    $scope.deleteBookmark=deleteBookmark;
});
