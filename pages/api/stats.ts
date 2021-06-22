import type { NextApiRequest, NextApiResponse } from 'next';
import got from 'got';

interface Response {
    data: {
        guilds: string;
        users: string;
        commands: string;
        channels: string;
    };
}

const req = async (_: NextApiRequest, res: NextApiResponse) => {
    const {
        body: {
            data: { guilds, users, channels, commands },
        },
    } = await got.post<Response>('https://graphql.yukikaze.tech/', {
        json: {
            query: `
                {
                    guilds
                    users
                    commands
                    channels
                }
            `,
        },
        responseType: 'json',
    });

    return res.status(200).json({ guilds, users, channels, commands });
};

export default req;
