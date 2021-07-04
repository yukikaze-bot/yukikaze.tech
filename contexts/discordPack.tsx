import type { LoginData } from '@sapphire/plugin-api';
import { mergeDefault } from '@sapphire/utilities';
import { useCallback, useState } from 'react';
import { loadState } from '../utils/state';
import constate from 'constate';

const discordPack = loadState<LoginData>('discord_pack');
const useDiscordPackState = () => {
    const [pack, setPack] = useState<LoginData>(discordPack ?? { user: null });
    const mergePack = useCallback((newPack: Partial<LoginData>) => setPack(mergeDefault(pack, newPack)), [pack]);

    return { pack, mergePack };
};

export const [DiscordPackProvider, useDiscordPack, mergeDiscordPack] = constate(
    useDiscordPackState,
    (value) => value.pack,
    (value) => value.mergePack,
);

export default DiscordPackProvider;
