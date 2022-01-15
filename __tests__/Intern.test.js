const Intern = require('../lib/Intern');

describe("Intern Tests", () => {
    describe("Creates an Intern Object", () => {
        
        it('should create an Intern object', () => {
            const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
            
            expect(intern.school) .toEqual(expect.any(String));
        });
        
        
        it('should get Intern school', () => {
            const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail', 'SFSU');
            
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
        
        it('should get role of employee', () => {
            const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'SFSU');
        
            expect(intern.getRole()).toEqual("Intern");
        }); 
    
    });
    

    });

