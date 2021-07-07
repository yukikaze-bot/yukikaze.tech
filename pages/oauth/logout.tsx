import { clearState } from '../../utils/state';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

const OAuthLogout: NextPage = () => {
    const { push } = useRouter();

    useEffect(() => {
        clearState('discord_pack');
        void push('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NextSeo title="Log Out" noindex nofollow />
        </>
    );
};

export default OAuthLogout;
