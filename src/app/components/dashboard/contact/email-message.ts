import { PointOfContact } from "./point-of-contact";
import { RECIPIENTS } from "./recipients";
import { Person } from "./person";

export class EmailMessage { 

    constructor(public subject : string, 
        public sender: Person, 
        public message : string,
        public recipient : PointOfContact) { 

    }

    public static EMPTY_FIELDS = new EmailMessage('',
        Person.EMPTY_FIELDS,
        '',
        RECIPIENTS[0]);

    /**
     * 
     * @param email the email to validate
     * @returns that email is of valid format
     */
    public static isValidEmail(email : string) : boolean { 
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    }

}