import '../styles/style.css';
import '../styles/modesta.css';
import '../styles/normalize.css';
import 'react-typist/dist/Typist.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Yukikaze</title>
            <meta
                name="description"
                content="The official website of the discord bot - Yukikaze. https://github.com/1chiSensei"
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
            <meta charSet="UTF-8" />

            <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />

            <meta name="apple-mobile-web-app-capable" content="yes" />

            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2048-2732.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2732-2048.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1668-2388.jpg"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2388-1668.jpg"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1536-2048.jpg"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2048-1536.jpg"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1668-2224.jpg"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2224-1668.jpg"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1620-2160.jpg"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2160-1620.jpg"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1284-2778.jpg"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation:
portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2778-1284.jpg"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation:
landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1170-2532.jpg"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation:
portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2532-1170.jpg"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation:
landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1125-2436.jpg"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:
portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2436-1125.jpg"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation:
landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1242-2688.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation:
portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2688-1242.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation:
landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-828-1792.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1792-828.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1242-2208.jpg"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation:
portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2208-1242.jpg"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation:
landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-750-1334.jpg"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1334-750.jpg"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-640-1136.jpg"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1136-640.jpg"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#4a4a4a" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Yoshida Tomio" />
            <meta name="language" content="English" />
            <meta content="https://yukikaze.tech/profile.png" property="og:image" />
            <meta content="Yoshida Tomio" property="og:title" />

            <meta content="Yukikaze's official website." property="og:description" />
            <meta content="Yukikaze's official website." name="description" />

            <meta name="revisit-after" content="2 days" />
            <meta name="keywords" content="Yukikaze, Discord, Bot, Github" />

            <meta property="og:locale" content="en_US" />
            <link rel="canonical" href="https://yukikaze.tech/" />
            <meta property="og:url" content="https://yukikaze.tech/" />
            <meta property="og:site_name" content="Yukikaze" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://yukikaze.tech/" />
            <meta property="twitter:title" content="Yukikaze" />
            <meta property="twitter:description" content="Yukikaze's official website." />
            <meta property="twitter:image" content="https://yukikaze.tech/profile.jpg" />
        </Head>

        <Component {...pageProps} />
    </>
);

export default App;
