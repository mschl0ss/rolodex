import type {UUID} from "uuidv7";

type Person = {
    id: UUID,
    firstName: string,
    lastName: string,
    families: Family['id'][],
    email?: string,
    phone?: string,
    isProtected: boolean;
    shirtSize: string;
    desiredThings: DesiredThing['id'][],
    accommodations: Accommodation['id'][],
}


type Family = {
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

