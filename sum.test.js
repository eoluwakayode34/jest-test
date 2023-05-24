const sum = require('./sum')

describe("checking the sum of two number", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1,2);
        expect(result).toBe(3) 
    })


    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1,1);
        expect(result).toBeGreaterThanOrEqual(2) 
    })

   
})


describe("truthy or falsey", () => {
    it("null", ()=> {
        const n = null;
        expect(n). toBeFalsy()
    })

    it("to be null", ()=> {
        const n = null;
        expect(n). toBeNull()
    })


    it("to be undefined", ()=> {
        const n = undefined;
        expect(n).toBeUndefined()
    })

    it("object assignment", ()=> {
        const obj = {};
        // to equal is use for array and object
        // NB: {} === {} is not true  and [] === [] is not true
        expect(obj).toEqual({})
    })


})