let animals = [];



describe("animals array", ()=> {
    
beforeEach(()=>{
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator")
    }) 

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey")
    })

    it("should have iniital length of 4", () => {
        expect(animals.length).toBe(4)
    })
})


describe("skipping other test to test a unit", () => {
    it.only("test on this block", () => {
        expect("").toBeFalsy()
    })
})




