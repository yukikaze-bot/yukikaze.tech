export const OAuthURL = new URL('https://discord.com/oauth2/authorize');

OAuthURL.search = new URLSearchParams([
    ['redirect_uri', 'https://yukikaze.tech/oauth/callback'],
    ['response_type', 'code'],
    ['scope', ['identify', 'guilds'].join(' ')],
    ['client_id', '855428383574589460'],
]).toString();
