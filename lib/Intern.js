const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school){
        super(id,name,email)
        
        const id = this.id;
        const name = this.name;
        const email = this.email;

        
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;