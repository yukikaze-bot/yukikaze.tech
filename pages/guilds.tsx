import { useAuthenticated } from '../contexts/authentication';
import { useDiscordPack } from '../contexts/discordPack';
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
    const authenticated = useAuthenticated();
    const pack = useDiscordPack();
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
                <div className="markdown-jekyll">
                    <h1 className="center-text">{pack.user?.username}&#39;s Guilds</h1>
                    <hr />

                    <table className="center-flex">
                        <tr>
                            {guilds!.map((guild) => (
                                <td key={guild.id}>
                                    <img src={guild.icon ?? ''} width={512} height={512} alt={`${guild.name}'s Icon`} />
                                    <br />
                                    <sub>
                                        <b>{guild.name}</b>
                                    </sub>
                                </td>
                            ))}
                        </tr>
                    </table>
                </div>
            ) : (
                <Error statusCode={401} />
            )}
        </>
    );
};

export default GuildsPage;
