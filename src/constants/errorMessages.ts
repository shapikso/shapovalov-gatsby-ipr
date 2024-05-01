export const SYMBOLS_IN_FIELDS = {
    MIN_SYMBOLS_IN_PASSWORD: 8,
    MIN_NUMBERS_IN: 1,
    MIN_SYMBOLS_IN: 1,
    MAX_SYMBOLS_IN_TITLE: 50,
    MAX_SYMBOLS_IN_DESCRIPTION: 1000,
    MAX_SYMBOLS_IN_PRICE: 10,
    MAX_SYMBOLS_IN_EMAIL: 129,

};
export const MESSAGES = {
    DEFAULT: 'Something went wrong 🤷🏻 🤷🏻‍♂️',
    UPPERCASE_LETTER: 'Starts with uppercase letter',
    MIN_SYMBOLS: `Min ${SYMBOLS_IN_FIELDS.MIN_SYMBOLS_IN_PASSWORD} symbols`,
    MAX_SYMBOLS_TITLE: `Max ${SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_TITLE} symbols`,
    MAX_SYMBOLS_DESCRIPTION: `Max ${SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_DESCRIPTION} symbols`,
    MIN_NUMBERS: `Min ${SYMBOLS_IN_FIELDS.MIN_NUMBERS_IN} number`,
    LOWER_CASE_LETTER: 'Min one lowercase letter',
    LATIN_LETTER: 'Only latin letters',
    ONLY_NUMBERS: 'Only numbers',
    MIN_CHARACTERS: 'Min two characters',
    LATIN_LETTER_AND_NUMBERS: 'Only latin letters and numbers',
    START_WITH_LETTER: 'Starts with letter',
    ONE_UPPERCASE_LETTER: 'Min one uppercase letter',
    INVALID_EMAIL: 'Invalid email address',
    INVALID_PHONE: 'Invalid phone number',
    REQUIRED: 'Required',
    MAX_FILE_SIZE: 'Size must be less then 5Mb',
    WRONG_TYPE: 'Wrong file type',
};

export const UNAUTHORIZED_ERROR_CODE = 401;
