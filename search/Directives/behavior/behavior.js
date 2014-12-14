/**
 * Created by arxxbx on 11/2/2014.
 */
var app = angular.module('behaviorApp',[]);


app.directive("enter", function(){
    return function(scope,element,attrs) {
        element.bind("mouseenter", function() {
          //  console.log("Mouse is inside the element")
            element.addClass(attrs.enter);
        })
    }
});
app.directive("leave", function() {
    return {
        restrict:"A",
        link:function(scope,element,attrs) {
            element.bind("mouseleave",function(){
                element.removeClass(attrs.enter)
            })
        }
    }
});

/*
 app.directive("leave", function(){
 return function(scope,element,attrs) {
 element.bind("mouseleave", function() {
 //   console.log("Mouse is outside the element")
 element.removeClass(attrs.enter);
 })
 }
 })

 */
