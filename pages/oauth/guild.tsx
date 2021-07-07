import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const OAuthGuild: NextPage = () => {
    const [guildId, setGuildId] = useState<string>('');
    const { query, push } = useRouter();

    useEffect(() => {
        setGuildId(query.guild_id as string);
        void push(`/guild/${guildId}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NextSeo title="OAuth Guild Callback" nofollow noindex />
        </>
    );
};

export default OAuthGuild;
