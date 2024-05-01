import React, {useState} from 'react';
import * as styles from "./Search.module.scss";
import Input, {inputSize} from "../common/Input/Input";
import SearchIcon from '../icons/search.inline.svg';
import PropTypes from "prop-types";

interface SearchProps {
    onSetSearchText: (obj: SearchTypes) => void,
}

const Search = ({onSetSearchText}: SearchProps) => {
    const [inputText, setInputText] = useState('');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setInputText(e.target.value);
        onSetSearchText({searchText: e.target.value, offset: 0});
    };    

    return (
        <div className={styles.inputWrapper}>
            <Input
                size={inputSize.medium}
                placeholder="Search..."
                iconLeft
                icon={<div className={styles.iconWrapper}>{<SearchIcon/>}</div>}
                onChange={handleChange}
                value={inputText}
            />
        </div>
    );
};

Search.propTypes = {
    onSetSearchText: PropTypes.func
};
export default Search;