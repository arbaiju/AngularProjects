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

    it("greets the world", function() {
        var fakePerson = new Person();
        spyOn(fakePerson, "helloSomeone");
        fakePerson.helloSomeone("world");
        expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
    });

    /*
    *
    * describe("Calculator", function() {
     it("should factor two huge numbers asynchronously", function() {
     var calc = new Calculator();
     var answer = calc.factor(18973547201226, 28460320801839);
     expect(answer).toEqual(9486773600613);
     // DANGER ZONE: This doesn't work if factor() is asynchronous!!
     // THIS DOESN'T WORK, STUPID
     });
     });
    *
    *
    * describe("Calculator", function() {

     it("should factor two huge numbers asynchronously", function() {

     var calc = new Calculator();
     var answer = calc.factor(18973547201226, 28460320801839);

     waitsFor(function() {
     return calc.answerHasBeenCalculated();
     }, "It took too long to find those factors.", 10000);

     runs(function() {
     expect(answer).toEqual(9486773600613);
     });

     });

     });
     *
     *
     */
});
