const  {
    returnTwo, 
    greeting, 
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

test("The returnTwo() should equal 2",()=>{
    expect(returnTwo()).toEqual(2)
})

test("Testing the greeting function for James", ()=>{
    expect(greeting("James")).toEqual("Hello, James")
})

test("Testing the greeting function for Jill", ()=>{
    expect(greeting("Jill")).toEqual("Hello, Jill")
})


describe("Math functions",()=>{
    test("Testing add function with 1,2",()=>{
        expect(add(1,2)).toEqual(3)
    })
    
    test("Testing add function with 5,9",()=>{
        expect(add(5,9)).toEqual(14)
    })
    
    test("Testing multiply function with 4,6",()=>{
        expect(multiply(4,6)).toEqual(24)
    })
    
    test("Testing divide function with 22,2",()=>{
        expect(divide(22,2)).toEqual(11)
    })
    
    test("Testing subtract function with 19,7",()=>{
        expect(`${subtract(19,7)}`).toEqual(`12`)
    })
})
