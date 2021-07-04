import type { Guild } from 'discord.js';

export const iconUrl = (guild: Guild, size = 512) => {
    if (guild.icon === null) return undefined;

    const format = guild.icon.startsWith('a_') ? 'gif' : 'png';

    return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.${format}${`?size=${size}`}`;
};
