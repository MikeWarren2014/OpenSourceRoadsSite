import { Person } from "../person/person";

export class PointOfContact extends Person {
    phoneNumber? : number;
    image? : any;
    roles: string[];
}
