import { useAuthenticated } from '../contexts/authentication';
import { useDiscordPack } from '../contexts/discordPack';
import { apiFetch } from '../utils/apiFetch';
import { iconUrl } from '../utils/iconUrl';
import type { Guild } from 'discord.js';
import type { NextPage } from 'next';
import Error from 'next/error';

const GuildsPage: NextPage = () => {
    const authenticated = useAuthenticated();
    const pack = useDiscordPack();

    apiFetch('/bot/shared-guilds')
        .then(console.log)
        .catch(() => null);

    return (
        <>
            {authenticated ? (
                <div className="markdown-jekyll">
                    <h1>{pack.user?.username}&#39;s Guilds</h1>
                    <hr />

                    <table>
                        <tr>
                            {pack.guilds?.forEach((guild: Guild) => (
                                <td>
                                    <img
                                        src={iconUrl(guild) ?? ''}
                                        width={512}
                                        height={512}
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
            ) : (
                <Error statusCode={401} />
            )}
        </>
    );
};

export default GuildsPage;
