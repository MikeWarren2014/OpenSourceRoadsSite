import { PointOfContact } from "./point-of-contact";
import { Person } from "./person";

export const RECIPIENTS : PointOfContact[] = [
<<<<<<< HEAD
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
=======
    new PointOfContact('Mike Warren',
        'mike.warren@opensourceroads.com'),
    new PointOfContact('Chris Lang', 
        'chris.lang@opensourceroads.com')
>>>>>>> 294ca062721460d65b2f2a12a5b9ed4e9ca3e898
];