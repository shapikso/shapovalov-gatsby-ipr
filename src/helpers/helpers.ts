
export const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0;
export const toJson = (obj: object) => JSON.stringify(obj);
export const fromJson = <T>(json: string | null): T | undefined => {
    if (!json) return undefined;
    return JSON.parse(json);
};

