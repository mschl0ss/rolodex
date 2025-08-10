import type {UUID} from "uuidv7";

export type Person = {
    id: UUID,
    firstName: string,
    lastName: string,
    dob: string,
    families: Family['id'][],
    email?: string,
    phone?: string,
    isProtected: boolean;
    shirtSize: string;
    desiredThings: DesiredThing['id'][],
    accommodations: Accommodation['id'][],
}


export type Family = {
    id: UUID,
    familyName: string,
    familyMembers: {
        person: Person[],
        relationship: string,
    }[]
}

type DesiredThing = {
    id: UUID
    label: string,
    description?: string,
    url: string[],
}

type Accommodation = {
    id: UUID
    label: string,
    description: string,
    url: string[],
}

type Event = {
    id: UUID,
    organizers: Person['id'][],
}
