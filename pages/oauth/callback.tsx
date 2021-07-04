import { setAuthenticated } from '../../contexts/authentication';
import { mergeDiscordPack } from '../../contexts/discordPack';
import type { LoginData } from '@sapphire/plugin-api';
import React, { useCallback, useEffect } from 'react';
import { CodeMatchRegex } from '../../utils/regex';
import { apiFetch } from '../../utils/apiFetch';
import { saveState } from '../../utils/state';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

declare module 'querystring' {
    interface ParsedUrlQuery {
        code: string | null;
    }
}

const OAuthCallback: NextPage = () => {
    const mergePack = mergeDiscordPack();
    const writeAuthenticated = setAuthenticated();
    const { push, query, asPath } = useRouter();
    const finalizeAuthFlow = useCallback(async (code: string | null) => {
        try {
            const data = await apiFetch<LoginData>('/oauth/callback', {
                method: 'POST',
                body: JSON.stringify({
                    code,
                    clientId: '',
                    redirectUri: 'https://yukikaze.tech/oauth/callback',
                }),
            });

            saveState('discord_pack', data);
            writeAuthenticated(true);
            mergePack(data);

            return push('/');
        } catch {
            return push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(
        () =>
            void finalizeAuthFlow(
                query.code ??
                    new URL(window.location.href).searchParams.get('code') ??
                    CodeMatchRegex.exec(window.location.search || asPath)?.groups?.code ??
                    null,
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    return (
        <>
            <NextSeo title="OAuth Callback" nofollow noindex />
        </>
    );
};

export default OAuthCallback;
