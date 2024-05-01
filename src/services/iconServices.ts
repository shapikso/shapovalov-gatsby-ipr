import {IMAGES_LINK} from "../constants/urls";
import marketplace from "./httpServices";
export const uploadImageFile = async(file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    return await marketplace.postForm(IMAGES_LINK, formData);
};