const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        const id = this.id;
        const name = this.name;
        const email = this.email;

        super(id,name,email);
        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
    
}