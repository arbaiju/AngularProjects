/**
 * Created by arxxbx on 12/4/2014.
 */
describe("Hello world", function() {
    it("says hello", function() {
 //       expect(helloWorld()).toEqual("Hello world!");
        expect(helloWorld()).toEqual("Hello world!");
    });

    it("calls the sayHello() function", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "sayHello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });
});
