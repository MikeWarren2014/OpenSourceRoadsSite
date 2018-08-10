export class Person { 

    constructor(public name : string,
        public email : string) { 

    }


    public static EMPTY_FIELDS : Person = new Person('', '');
}
