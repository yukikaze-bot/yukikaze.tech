import { inviteUrl } from '../utils/inviteUrl';
import { apiFetch } from '../utils/apiFetch';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Error from 'next/error';

interface Guild {
    name: string;
    id: `${bigint}`;
    icon: string | null;
    canManage: boolean;
    hasBot: boolean | null;
}

const GuildsPage: NextPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const authenticated = globalThis?.window?.localStorage.getItem('discord_pack') !== null;
    const [guilds, setGuilds] = useState<Guild[]>();
    const { push } = useRouter();
    const getGuilds = async () => {
        try {
            const guilds = await apiFetch<Guild[]>('/user/guilds');

            setGuilds(guilds);
        } catch {}
    };

    useEffect(() => void getGuilds(), []);

    return (
        <>
            {authenticated ? (
                <>
                    <NextSeo title="Your Guilds" />

                    <section className="paper-container">
                        <div className="ribbon"></div>
                        <div className="paper">
                            <div className="markdown-jekyll">
                                <h1 className="text-center text-3xl">Your Guilds</h1>
                                <hr />

                                <section className="flex-grid">
                                    {guilds
                                        ?.filter((guild: Guild) => guild.canManage)
                                        .map((guild) => (
                                            <div key={guild.id} className="col-xs-4">
                                                <img
                                                    src={guild.icon ?? ''}
                                                    width={256}
                                                    height={256}
                                                    alt={`${guild.name}'s Icon`}
                                                    className="center-display"
                                                />
                                                <br />
                                                <h5 className="center-display" style={{ fontWeight: 'bold' }}>
                                                    {guild.name} |{' '}
                                                    {guild.hasBot ? (
                                                        <a href="#" onClick={() => push(`/guild/${guild.id}`)}>
                                                            Manage
                                                        </a>
                                                    ) : (
                                                        <a href={inviteUrl(guild.id)}>Invite</a>
                                                    )}
                                                    <br />
                                                </h5>
                                                <hr />
                                            </div>
                                        ))}
                                </section>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <div>
                    <Error statusCode={401} title="Unauthorized" />
                </div>
            )}
        </>
    );
};

export default GuildsPage;
