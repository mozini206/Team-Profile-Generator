const Intern = require('../lib/Intern')

const Employee = require('../lib/Employee')

describe("Intern", () => {

   
    const intern = new Intern('Zak', 20, "zak206@uw.edu");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));





    describe("Intialization", () =>{
        
        // Testing of object properties after construction a new instance
        it ("should build with prop x when given y", () => {

        });

    });

    describe("getName", () => {


        const intern = new Intern('Zak', 20, "zak206@uw.edu");
        
        expect(intern.getName()).toEqual(expect.any(String));

    

    });


    describe("getId", () => {
        const intern = new Intern('Zak', 20, "zak206@uw.edu");

        expect(intern.getId()).toEqual(expect.any(Number));


    });

    describe("geEmail", () => {
        const intern = new Intern('Zak', 20, "zak206@uw.edu");
        expect(intern.getEmail()).toEqual(expect.any(String));


    });

    describe("geRole", () => {
        const intern = new Intern('Zak', 20, "zak206@uw.edu");
        expect(intern.getRole()).toEqual('Employee');




    });

});