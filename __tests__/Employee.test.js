const Employee = require('../lib/Employee');
describe("Employee Tests", () => {
	describe("Creates employee object", () => {
		it("Should create an employee object", () => {
			const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
			expect(employee.name).toEqual(expect.any(String));
			expect(employee.id).toEqual(expect.any(Number));
			expect(employee.email).toEqual(expect.any(String));
		});
		it("should get employee name", () => {
			const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
			expect(employee.getName()).toEqual(expect.any(String));
		});
		it("should get employee ID", () => {
			const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
			expect(employee.getId()).toEqual(expect.any(Number));
		});
		it("should get employee email", () => {
			const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
			expect(employee.getEmail()).toEqual(expect.any(String));
		});
		it("should get the role from getRole()", () => {
			const employee = new Employee('Mohamed', 21, "momo206@uw.edu");
			expect(employee.getRole()).toEqual('Employee');
		});
	});
});