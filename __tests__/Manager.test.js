const Manager = require('../lib/Manager')

describe("Creates Manager Object", ()=> {
    const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com", 5);

    expect(manager.officeNumber).toEqual(expect.any(number));



    describe("geRole", () => {
        const manager = new Manager('Mohamed', 21, "momo206@uw.edu");
        expect(manager.getRole()).toEqual('Manager');




    });


});