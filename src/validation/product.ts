import {number, string} from "yup";
import {MESSAGES, SYMBOLS_IN_FIELDS} from "../constants/errorMessages";
import {REGEX} from "../constants/regEx";


export default {
    title: string().required(MESSAGES.REQUIRED)
        .max(SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_TITLE, MESSAGES.MAX_SYMBOLS_TITLE),
    description: string().max(SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_DESCRIPTION, MESSAGES.MAX_SYMBOLS_DESCRIPTION).required(MESSAGES.REQUIRED),
    brand: string().required(MESSAGES.REQUIRED)
        .max(SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_TITLE, MESSAGES.MAX_SYMBOLS_TITLE),
    price: string().matches(REGEX.ONLY_NUMBERS, MESSAGES.ONLY_NUMBERS).required(MESSAGES.REQUIRED),
    screenSize: string().matches(REGEX.NOT_REAL_NUMBERS, MESSAGES.ONLY_NUMBERS).required(MESSAGES.REQUIRED),
    ram: string().matches(REGEX.ONLY_NUMBERS, MESSAGES.ONLY_NUMBERS).required(MESSAGES.REQUIRED),
    productImage: string().required(MESSAGES.REQUIRED),

};