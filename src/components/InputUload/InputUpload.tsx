import React, {useEffect, useRef, useState} from 'react';
import * as styles from "../Products/Products.module.scss";
import Attach from '../icons/attach.inline.svg';
import {useField} from "formik";
import PropTypes from "prop-types";
import Upload from "../common/Upload/Upload";

export interface InputUploadProps {
    onLoadFile: (file: string) => void;
    onDisableWhileReq:<T>(promise: Promise<T>) => Promise<T>
}

const InputUpload = ({onLoadFile,onDisableWhileReq}: InputUploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [, , helpers] = useField('productImage');
    const [state, setState] = useState('');
    const { setValue} = helpers;
    const handleUploadClick = () => {
        inputRef.current?.click();
    };
    useEffect(() => {
        setValue(state);
    },[state]);

    return (
        <div className={styles.iconWrapper}>
            <Attach onClick={handleUploadClick}/>
            <Upload
                inputRef={inputRef}
                onChangeFile={setState}
                onDisableWhileReq={onDisableWhileReq}
                onLoadFile={onLoadFile}
            />
        </div>
    );
};

InputUpload.propTypes = {
    onLoadFile: PropTypes.func,
    file: PropTypes.object,
    onDisableWhileReq: PropTypes.func
};
export default InputUpload;