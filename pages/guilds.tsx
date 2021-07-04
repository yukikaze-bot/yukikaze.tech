import { apiFetch } from '../utils/apiFetch';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Error from 'next/error';

interface Guild {
    name: string;
    id: `${bigint}`;
    icon: string | null;
    canManage: boolean;
}

const GuildsPage: NextPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const authenticated = globalThis?.window?.localStorage.getItem('discord_pack') !== null;
    const [guilds, setGuilds] = useState<Guild[]>();
    const getGuilds = async () => {
        try {
            const guilds = await apiFetch<Guild[]>('/bot/shared-guilds');

            setGuilds(guilds);
        } catch {}
    };

    useEffect(() => void getGuilds(), []);

    return (
        <>
            {authenticated ? (
                <section className="paper-container">
                    <div className="ribbon"></div>
                    <div className="paper">
                        <div className="markdown-jekyll">
                            <h1 className="text-center">Your Guilds</h1>
                            <hr />

                            <table className="center-flex">
                                <tr>
                                    {guilds?.map((guild) => (
                                        <td key={guild.id}>
                                            <img
                                                src={guild.icon ?? ''}
                                                width={256}
                                                height={256}
                                                alt={`${guild.name}'s Icon`}
                                            />
                                            <br />
                                            <sub>
                                                <b>{guild.name}</b>
                                            </sub>
                                        </td>
                                    ))}
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="center-object">
                    <Error statusCode={401} title="Unauthorized" />
                </div>
            )}
        </>
    );
};

export default GuildsPage;
