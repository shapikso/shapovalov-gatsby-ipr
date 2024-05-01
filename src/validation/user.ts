import {string} from "yup";
import {MESSAGES, SYMBOLS_IN_FIELDS} from "../constants/errorMessages";
import {REGEX} from "../constants/regEx";

export default {
    email: string().email(MESSAGES.INVALID_EMAIL).required(MESSAGES.REQUIRED),
    password: string().min(SYMBOLS_IN_FIELDS.MIN_SYMBOLS_IN_PASSWORD, MESSAGES.MIN_SYMBOLS)
        .matches(REGEX.MINIMUM_ONE_NUMBER, MESSAGES.MIN_NUMBERS)
        .matches(REGEX.MINIMUM_ONE_LOWERCASE, MESSAGES.LOWER_CASE_LETTER)
        .matches(REGEX.MINIMUM_ONE_UPPERCASE, MESSAGES.ONE_UPPERCASE_LETTER)
        .test('empty-check', MESSAGES.MIN_SYMBOLS, password => password),
    firstLastName: string().matches(REGEX.ONLY_LATIN_LETTERS, MESSAGES.LATIN_LETTER).required(MESSAGES.REQUIRED),
    phone: string().matches(REGEX.PHONE, MESSAGES.INVALID_PHONE).required(MESSAGES.REQUIRED),
};