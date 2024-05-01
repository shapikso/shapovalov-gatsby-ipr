import React from 'react';
import {APPLY_FORMATS} from "../../../constants/file";
import * as styles from './Upload.module.scss';
import {validateImage} from "../../../validation/image";
import {uploadImageFile} from "../../../services/iconServices";
import {toast} from "react-toastify";
import {InputUploadProps} from "../../InputUload/InputUpload";

interface UploadProps extends InputUploadProps {
    inputRef: React.RefObject<HTMLInputElement>,
    onChangeFile: (link: string) => void,

}

const Upload = ({inputRef, onChangeFile, onDisableWhileReq, onLoadFile}:UploadProps) => {
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const error = validateImage(e);
        if (error && !e.target.files) {
            toast.error(error);
            return;
        }
        if (onChangeFile) { onChangeFile((e.target.files as FileList)[0].name); }
        const link = await onDisableWhileReq(uploadImageFile((e.target.files as FileList)[0]));
        onLoadFile(link);

    };
    return (
        <input
            id="productImage"
            name="productImage"
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            className={styles.upload}
            accept={APPLY_FORMATS}
        />
    );
};

export default Upload;