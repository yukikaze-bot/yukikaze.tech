import { useEffect, useState, useCallback } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { apiFetch } from '../../utils/apiFetch';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { When } from 'react-if';
import Error from 'next/error';

interface Guild {
    name: string;
    id: `${bigint}`;
    icon: string | null;
    owner: `${bigint}`;
    memberCount: number;
}

const GuildPage: NextPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const authenticated = globalThis?.window?.localStorage.getItem('discord_pack') !== null;
    const { register, handleSubmit } = useForm({
        defaultValues: {
            prefix: '!y',
        },
    });
    const { query } = useRouter();
    const [guildId] = query.id ?? ['', ['']];
    const [guild, setGuild] = useState<Guild>();
    const getGuild = useCallback(async () => {
        const guild = await apiFetch<Guild>(`/guilds/${guildId as string}`).catch(() => null);

        setGuild(guild!);
    }, [guildId]);
    const submit = (data: Record<string, string>) => {
        toast.success('Settings were saved!', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });

        return apiFetch(`/guilds/${guildId as string}/prefix`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    };

    useEffect(() => void getGuild(), [getGuild]);

    return (
        <>
            <When condition={!authenticated}>
                <div>
                    <Error statusCode={404} />
                </div>
            </When>

            {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
            <When condition={guild === null}>
                <div>
                    <Error statusCode={403} title="Forbidden" />
                </div>
            </When>

            <When condition={guild && authenticated}>
                <Toaster position="bottom-right" />

                <section className="paper-container">
                    <div className="ribbon"></div>
                    <div className="paper">
                        <form onSubmit={handleSubmit(submit)}>
                            <label htmlFor="prefix">Prefix</label>
                            <input placeholder="!y" {...register('prefix', { minLength: 1, maxLength: 15 })} />

                            <button type="submit">Save</button>
                        </form>
                    </div>
                </section>
            </When>
        </>
    );
};

export default GuildPage;
