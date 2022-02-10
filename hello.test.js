const { TestWatcher } = require("jest");
const hello = require("./hello");
describe("My hello", () => {
    test("works", () => {
        expected(hello.hello()).toEqual("Hello World")
    });  
});