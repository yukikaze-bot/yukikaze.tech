import { hasWindow } from './hasWindow';

export const loadState = <T>(key: 'discord_pack'): T | null => {
    if (hasWindow()) {
        const serializedState = localStorage.getItem(key);

        return serializedState ? (JSON.parse(serializedState) as T) : null;
    }

    return null;
};

export const saveState = <T>(key: 'discord_pack', state: T): T => {
    try {
        if (hasWindow()) {
            const serializedState = JSON.stringify(state);

            localStorage.setItem(key, serializedState);
        }
    } catch {}

    return state;
};

export const clearState = (key: 'discord_pack') => {
    if (hasWindow()) localStorage.removeItem(key);
};
