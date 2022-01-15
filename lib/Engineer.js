const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        super(id,name,email);
        
        const id = this.id;
        const name = this.name;
        const email = this.email;

        
        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
    
}

module.exports = Engineer;