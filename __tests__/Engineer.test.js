const Engineer = require('../lib/Engineer')



describe("Creates Engineer object", () => {
    const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
    expect(engineer.github).toEqual(expect.any(String));



    describe("Gets Engineer Github username", () => {
        const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
        expect(engineer.getGithub().toEqual(expect.stringContaining(engineer.github.toString())));
        
    })

    describe("Gets role of the said employee ie Engineer", () => {
        const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
        expect(engineer.getRole().toEqual('Engineer'))

    })
    
    
})