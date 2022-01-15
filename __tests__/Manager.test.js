const Manager = require('../lib/Manager');


describe("Manager Tests", () => {
    describe("Creates manager Object", () => {

            it("should create an manager object", () => {
            const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com", 5);
            expect(manager.officeNumber).toEqual(expect.any(Number));

            
        });

        it("should get role of the said employee ie manager", () => {
            const manager = new Manager('Tuchel', 50, "tuchel@chelseafc.com", 5);
            expect(manager.getRole()).toEqual('Manager');
    
        });

    })
})





