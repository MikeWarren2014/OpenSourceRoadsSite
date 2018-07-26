export class Person { 

    constructor(public name : string,
        public email : string) { 

    }

    setName(firstName : string, lastName : string) { 
        this.name = firstName + ' ' + lastName;
    }

    public static EMPTY_FIELDS : Person = new Person('', '');
}
