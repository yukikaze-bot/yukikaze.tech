/* eslint-disable react/no-children-prop */
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { When } from 'react-if';
import Error from 'next/error';
import gfm from 'remark-gfm';

const components = {
    code({ node, inline, className, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || '');

        return !inline && match ? (
            <Prism
                style={dark}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        );
    },
};

const MarkdownPage: NextPage = () => {
    const { query } = useRouter();

    return (
        <>
            <NextSeo title="Markdown Page" />

            <When condition={typeof query.md === 'string'}>
                <section className="paper-container">
                    <div className="ribbon"></div>
                    <div className="paper">
                        <div className="markdown-jekyll">
                            <ReactMarkdown
                                components={components}
                                children={decodeURIComponent(query.md as string)}
                                remarkPlugins={[gfm, remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                            />
                        </div>
                    </div>
                </section>
            </When>

            <When condition={typeof query.md !== 'string'}>
                <div>
                    <Error statusCode={400} title="Bad Request" />
                </div>
            </When>
        </>
    );
};

export default MarkdownPage;