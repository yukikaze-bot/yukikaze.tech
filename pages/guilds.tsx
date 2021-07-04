import { useAuthenticated } from '../contexts/authentication';
import { useDiscordPack } from '../contexts/discordPack';
import { iconUrl } from '../utils/iconUrl';
import type { Guild } from 'discord.js';
import type { NextPage } from 'next';
import { When } from 'react-if';
import Error from 'next/error';

const GuildsPage: NextPage = () => {
    const authenticated = useAuthenticated();
    const pack = useDiscordPack();

    return (
        <>
            <When condition={!authenticated}>
                <Error statusCode={401} />
            </When>

            <When condition={authenticated}>
                <div className="markdown-jekyll">
                    <h1>{pack.user.username}&#39;s Guilds</h1>
                    <hr />

                    <table>
                        <tr>
                            {pack.guilds.forEach((guild: Guild) => (
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
            </When>
        </>
    );
};

export default GuildsPage;
