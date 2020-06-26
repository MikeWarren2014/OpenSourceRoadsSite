import { PointOfContact } from "../../../models/point-of-contact";
import { Person } from "../../../models/person";

export class EmailMessage {

    constructor(public subject : string = '',
        public sender: Person = new Person(),
        public message : string = '',
        public recipient : PointOfContact = null) {

    }

    /**
     * @todo either refactor this or get rid of this
     * @param email the email to validate
     * @returns that email is of valid format
     */
    public static isValidEmail(email : string) : boolean {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    }

}
