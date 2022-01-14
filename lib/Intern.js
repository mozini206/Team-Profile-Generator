const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school){
        const id = this.id;
        const name = this.name;
        const email = this.email;

        super(id,name,email)
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern';
    }
}