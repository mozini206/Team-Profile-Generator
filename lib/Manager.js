const Employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber){
        const id = this.id;
        const name = this.name;
        const email = this.email;


        super(id,name,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

}