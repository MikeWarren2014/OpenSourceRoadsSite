import { PointOfContact } from "../../../models/point-of-contact/point-of-contact";
import { Person } from "../../../models/person/person";

export const RECIPIENTS : PointOfContact[] = [
    {
        name: 'Mike Warren',
        email: 'mike.warren@opensourceroads.com',
        roles: [
            'Software developer',
            'Bookkeeper'
        ]
    },
    {
        name: 'Chris Lang',
        email: 'chris.lang@opensourceroads.com',
        roles: [
            'Outreach',
            'Public relations'
        ]
    }
];
