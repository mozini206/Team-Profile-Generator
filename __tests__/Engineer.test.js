const Engineer = require('../lib/Engineer');
describe("Engineer Tests", () => {
	describe("Creates Engineer Object", () => {
		it("should create an Engineer object", () => {
			const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
			expect(engineer.github).toEqual(expect.any(String));
		});
		it("should get role of the said employee ie Engineer", () => {
			const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
			expect(engineer.getRole()).toEqual('Engineer');
		});
	});
	it("should get Engineer Github username", () => {
		const engineer = new Engineer("Joe Kay", 25, "joekay@soulection.com", "joekay@github.com");
		expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
	});
});