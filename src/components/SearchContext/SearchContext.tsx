import React from 'react';

interface SearchContextProps {
    context: [searchText:  SearchTypes, setSearchText: (search:  SearchTypes) => void];
    children: React.ReactNode;
}

const Context = React.createContext([]);

const SearchContext = ({ context, children }: SearchContextProps) => {
    return (
        <Context.Provider value={context}>
            
        </Context.Provider>
    );
};

export default SearchContext;