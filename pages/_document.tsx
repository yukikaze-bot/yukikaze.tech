import Document, { Html, Head, Main, NextScript } from 'next/document';
import { emit } from '@tauri-apps/api/event';

const onload = () => emit('loaded');

class MyDocument extends Document {
    public static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    public render() {
        return (
            <Html lang="en">
                <Head />
                <body className="dark-theme github" onLoad={onload}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
