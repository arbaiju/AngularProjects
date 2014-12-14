/**
 * Created by arxxbx on 12/4/2014.
 */
function helloWorld() {
    return "Hello world!";
}
var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
    return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello1 = function() {
    return "Hello";
};
