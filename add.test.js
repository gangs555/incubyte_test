const add = require("./add");
describe('Addition of string Numbers',()=>{

    test("If we pass empty string, should return 0 ", () => {
        expect(add("")).toBe(0);
    });

    test("If we pass `1,2` should return 3 ", () => {
        expect(add("1,2")).toBe(3);
    });

    test("If we pass `1` should return 1 ", () => {
        expect(add("1")).toBe(1);
        });

    test("If we pass \n instead of ,` should work ", () => {
        expect(add("1,2\n3")).toBe(6);
    });

    test("If we pass negative numbers should throw exception ", () => {
        expect(()=>add("1,2,-3")).toThrow("negatives not allowed , -3");
    
    });

    test("If we are changing the delimter and passing //;\n1;2 should return 3 ", () => {
        expect(add("//;\n1;2")).toBe(3);
    
    });

 

})