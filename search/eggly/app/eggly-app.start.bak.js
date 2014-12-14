/**
 * Created by arxxbx on 11/4/2014.
 */
var app = angular.module("Eggly",[

])
   app.controller('MainCtrl', function($scope) {
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
       //----------------------------
       //   Filter the bookmark listing
       //-----------------------------------
       $scope.currentCategory=null;
       function setCurrentCategory(category) {
           $scope.currentCategory=category;
//           alert(category.name);
       }

       $scope.setCurrentCategory=setCurrentCategory;
       //----------------------------
       //   highlight selected  category
       //-----------------------------------
       function isCurrentCategory(category) {
           var isCurrent= $scope.currentCategory !== null && category.name===$scope.currentCategory.name;
//           showDetails();
           return isCurrent;
       }
       $scope.isCurrentCategory=isCurrentCategory;
        //----------------------------
       //   creating and editing states
       //-----------------------------------
       $scope.isCreating=false;
       $scope.isEditing=false;

       function startCreating(){
           $scope.isCreating=true;
           $scope.isEditing=false;
       }
       function startEditing(){
           $scope.isCreating=false;
           $scope.isEditing=true;
           alert(isEditing);
       }
       function cancelCreating(){
           $scope.isCreating=false;
//           $scope.isEditing=false;
       }
       function cancelEditing(){
//           $scope.isCreating=false;
           $scope.isEditing=false;
       }
       function shouldShowCreating(){
           var showCreate=$scope.currentCategory && !$scope.isEditing;
     //      alert(showCreate);
//           showCreate=true;
//           showDetails();
           return showCreate;
       }
       function shouldShowEditing(){
           var showEdit=$scope.isEditing && !$scope.isCreating;
//           showDetails();
           return showEdit;

       }
 /*      function showDetails() {
           alert("shouldShowEditing" + shouldShowCreating() + " next " +
           "shouldShowCreating" + shouldShowCreating() + " next " +
           "isEditing" + isEditing() + " next " +
           "isCreating" + isCreating() + " next " +
           "currentCategory" + $scope.currentCategory + " next ")
       }

       */
       $scope.isCreating=startCreating;
       $scope.isEditing=startEditing;
       $scope.cancelCreating=cancelCreating;
       $scope.cancelEditing=cancelEditing;
       $scope.shouldShowCreating=shouldShowCreating;
       $scope.shouldShowEditing=shouldShowEditing;
//       $scope.showDetails=showDetails;
   })