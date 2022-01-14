const Employee = require('../lib/Employee')

describe("Employee", () => {

   
    const employee = new Employee('Mohamed', 21, "momo206@uw.edu");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.getId).toEqual(expect.any(Number));
    expect(employee.getEmail).toEqual(expect.any(String));





    describe("Intialization", () =>{
        
        // Testing of object properties after construction a new instance
        it ("should build with prop x when given y", () => {

        })

    })

    describe("getName", () => {


        const employee = new Employee('Mohamed', 17, "momo206@uw.edu");
        
        expect(employee.getName()).toEqual(expect.any(String));

    

    });


    describe("getId", () => {
        const employee = new Employee('Mohamed', 21, "momo206@uw.edu");

        expect(employee.getId()).toEqual(expect.any(Number));


    });

    describe("geEmail", () => {
        const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
        expect(employee.getEmail()).toEqual(expect.any(String));


    });

    describe("geRole", () => {
        const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
        expect(employee.getRole()).toEqual('Employee');




    });

});