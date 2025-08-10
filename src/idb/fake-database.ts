import {createStore} from 'idb-keyval';

const rolodexStore = createStore("rolodexStore", "rolodexStore");

export const RolodexRepository = {
    // TODO use getMany setMany instead of manually grabbing each thing individually jeesus fing christ marc wtf
    // async save(caseToSave: Case): Promise<void> {
    //     return await set(caseToSave.id, caseToSave, caseStore)
    // },
    // async findById(id: string): Promise<Case | undefined> {
    //     return await get(id, caseStore);
    // },
    // async findAll(): Promise<Case[]> {
    //     const cases = (await keys(caseStore)).map(key =>
    //         get(key, caseStore)
    //     );
    //     return Promise.all(cases as Promise<Case>[])
    // }
};
