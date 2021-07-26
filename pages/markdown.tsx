/* eslint-disable react/no-children-prop */

import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useQueryParam, StringParam } from 'use-query-params';
import { Prism } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
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
    const [md] = useQueryParam('md', StringParam);

    return (
        <>
            <NextSeo title="Markdown Page" />

            <When condition={typeof md === 'string'}>
                <section className="paper-container">
                    <div className="ribbonyo"></div>
                    <div className="paper">
                        <div className="markdown-jekyll">
                            <ReactMarkdown
                                components={components}
                                children={md!}
                                remarkPlugins={[gfm, remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                            />
                        </div>
                    </div>
                </section>
            </When>

            <When condition={typeof md !== 'string'}>
                <div>
                    <Error statusCode={400} title="Bad Request" />
                </div>
            </When>
        </>
    );
};

export default MarkdownPage;
