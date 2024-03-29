import { useEffect, useState, useCallback } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { apiFetch } from '../../utils/apiFetch';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
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
            language: 'en-US',
        },
    });
    const { query } = useRouter();
    const [guildId] = query.id ?? ['', ['']];
    const [guild, setGuild] = useState<Guild>();
    const getGuild = useCallback(async () => {
        const guild = await apiFetch<Guild>(`/guilds/${guildId as string}`).catch(() => null);

        setGuild(guild!);
    }, [guildId]);
    const submit = async (data: Record<string, string>) => {
        toast.success('Settings were saved!', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });

        console.log(data);

        await apiFetch(`/guilds/${guildId as string}/settings`, {
            method: 'PUT',
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
                <NextSeo title={`${guild?.name ?? ''}`} />

                <section className="paper-container">
                    <div className="ribbon"></div>
                    <div className="paper">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="flex-grid">
                                <div className="col-xs-6">
                                    <label htmlFor="prefix">Prefix</label>
                                    <input
                                        className="full-width"
                                        type="text"
                                        {...register('prefix', { maxLength: 15, minLength: 1 })}
                                    />
                                </div>
                                <div className="col-xs-6">
                                    <label htmlFor="language">Language</label>
                                    <select className="full-width" {...register('language')}>
                                        <option value="en-US">English</option>
                                        <option value="fil-PH">Filipino</option>
                                        <option value="de-DE">German</option>
                                        <option value="fr-FR">French</option>
                                        <option value="id-ID">Indonesian</option>
                                        <option value="ja-JP">Japanese</option>
                                        <option value="ko-KR">Korean</option>
                                        <option value="zh-CN">Chinese Simplified</option>
                                    </select>
                                </div>
                            </div>

                            <input className="btn highlight" type="submit" value="Save" />
                        </form>
                    </div>
                </section>
            </When>
        </>
    );
};

export default GuildPage;
