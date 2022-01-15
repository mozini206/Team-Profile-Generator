const Employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber){

        super(id,name,email);
        const id = this.id;
        const name = this.name;
        const email = this.email;


        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;