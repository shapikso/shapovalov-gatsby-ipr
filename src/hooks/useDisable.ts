import {useState} from "react";

const useDisable = () => {
    const [isDisable, setIsDisable] = useState(false);
    const disableWhileReq = <T>(promise: Promise<T>) => {
        setIsDisable(true);
        return promise.finally(() => setIsDisable(false));
    };
    return {isDisable, disableWhileReq};
};

export default useDisable;