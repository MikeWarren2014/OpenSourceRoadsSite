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

}