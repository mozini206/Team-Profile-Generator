const Manager = require('../lib/Manager')

describe("Manager", ()=> {
    const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com");

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));


    describe("Intialization", () =>{
        
        // Testing of object properties after construction a new instance
        it ("should build with prop x when given y", () => {

        });

    });


    describe("getName", () => {
        const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com");

        expect(manager.getName()).toEqual(expect.any(String));
    });

    describe("getId", () => {
        const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com");

        expect(manager.getId()).toEqual(expect.any(Number));
    });


    describe("getEmail", () => {
        const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com");

        expect(manager.getEmail()).toEqual(expect.any(String));
    });


    describe("geRole", () => {
        const manager = new Manager('Mohamed', 21, "momo206@uw.edu");
        expect(employee.getRole()).toEqual('Manager');




    });


})