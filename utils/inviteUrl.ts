export const inviteUrl = (id: `${bigint}`): string => {
    const url = new URL('https://discord.com/oauth2/authorize');

    url.search = new URLSearchParams([
        ['redirect_uri', 'https://yukikaze.tech/oauth/guild'],
        ['response_type', 'code'],
        ['scope', 'bot'],
        ['client_id', '855428383574589460'],
        ['permissions', '388160'],
        ['guild_id', id],
    ]).toString();

    return url.toString();
};
