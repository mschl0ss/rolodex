import {createStore, get, set, update} from 'idb-keyval';
import {type UUID, uuidv7} from "uuidv7";
import type {Person} from "../types.ts";

const rolodexStore = createStore("rolodexStore", "rolodexStore");

export const RolodexRepository = {
    upsertPerson: async ({person}: {person: {id?: UUID} & Omit<Person, 'id'>}): Promise<void> => {
        if (person.id) {
            const optionalPerson = await get(person.id.toString(), rolodexStore);
            if (optionalPerson) {
                return await update(person.id.toString(), (): Person => person as Person)
            }
        }
        const id = uuidv7();
        return await set(id.toString(), {id, ...person}, rolodexStore)
    },
    findPersonById: async (id: string): Promise<Person | undefined> => await get(id, rolodexStore),
    // TODO use getMany setMany instead of manually grabbing each thing individually jeesus fing christ marc wtf
};
