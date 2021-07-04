import type { LoginData } from '@sapphire/plugin-api';
import { loadState } from '../utils/state';
import { useState } from 'react';
import constate from 'constate';

const discordPack = loadState<LoginData>('discord_pack');
const useAuthenticatedState = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(Boolean(discordPack) && Boolean(discordPack?.user));

    return { authenticated, setAuthenticated };
};

export const [AuthenticatedProvider, useAuthenticated, setAuthenticated] = constate(
    useAuthenticatedState,
    (value) => value.authenticated,
    (value) => value.setAuthenticated,
);

export default AuthenticatedProvider;
