export const loadState = <T>(key: 'discord_pack'): T | null => {
    const serializedState = localStorage.getItem(key);

    return serializedState ? (JSON.parse(serializedState) as T) : null;
};

export const saveState = <T>(key: 'discord_pack', state: T): T => {
    try {
        const serializedState = JSON.stringify(state);

        localStorage.setItem(key, serializedState);
    } catch {}

    return state;
};

export const clearState = (key: 'discord_pack') => localStorage.removeItem(key);
