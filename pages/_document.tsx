import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    public static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    public render() {
        return (
            <Html lang="en">
                <Head />
                <body className="dark-theme github dark">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
