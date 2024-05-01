import { useEffect } from 'react';
export default function useKeypress(key: number, action: Function) {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.keyCode === key) action();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    },[key,action]);
}