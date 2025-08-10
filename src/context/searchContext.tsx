import type {Person} from "../types.ts";
import {createContext, type ReactNode, useContext, useEffect, useMemo, useState} from "react";

type SearchStore = {
    searchText: string,
    setSearchText: (text: string) => void,
    results: {
        persons: Person[]
    }
}

const SearchStoreContext = createContext<SearchStore | null>(null);

export const SearchProvider = ({children} : {children: ReactNode}): ReactNode => {
    const [searchText, _setSearchText] = useState<string>('');
    const [results, setResults] = useState<SearchStore['results']>({ persons: []});

    const setSearchText = (newText: string) => _setSearchText(prevState => prevState !== newText ? newText : prevState);

    useEffect(() => {
        // on search text change
        // fetch from DB
        // filter
        // set results
    }, [])

    const value = useMemo(() => ({
        searchText,
        setSearchText,
        results
    }),[results, searchText])


    return (
        <SearchStoreContext.Provider value={value}>{children}</SearchStoreContext.Provider>
    )
}

export const useSearchStoreContext = () => {
    const context = useContext(SearchStoreContext);
    if (!context) {
        throw new Error('useSearchStoreContext must be used within a SearchProvider');
    }
    return context;
}
