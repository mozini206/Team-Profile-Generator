const Engineer = require('../lib/Engineer')



describe("Engineer", () => {
    const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.getId).toEqual(expect.any(Number));
    expect(engineer.getEmail).toEqual(expect.any(String));
    expect(engineer.getGitHub).toEqual(expect.any(String));


    describe("Intialization", () => {   
        // Testing of object properties after construction a new instance
        it ("should build with prop x when given y", () => {

        })

    })

    describe("getName", () => {
        const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
        expect(engineer.getName()).toEqual(expect.any(String));
        
    });


    describe("getId", () => {
        const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
        expect(engineer.getId()).toEqual(expect.any(Number));

    });

    describe("getEmail", () => {
        const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
        expect(engineer.getEmail()).toEqual(expect.any(String));

    });

    describe("getRole", () => {
        const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
        expect(engineer.getRole().toEqual('Engineer'))

    })
    
    
})