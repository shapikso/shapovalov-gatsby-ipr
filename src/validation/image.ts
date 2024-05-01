import {FILE_TYPES, MAX_FILE_SIZE} from "../constants/file";
import {MESSAGES} from "../constants/errorMessages";

export const validateImage = (event: React.ChangeEvent) => {

    if (!(event?.target as HTMLInputElement).files) {
        return MESSAGES.DEFAULT;
    }

    const file = ((event.target as HTMLInputElement)?.files as FileList)[0];
    if (!FILE_TYPES.includes(file.type)) {
        return MESSAGES.WRONG_TYPE;
    }
    if (file.size > MAX_FILE_SIZE) {
        return MESSAGES.MAX_FILE_SIZE;
    }
    return '';
};