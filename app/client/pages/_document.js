import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta property="og:title" content="Game Genie AI" key="title" />
                <meta property="og:description" content="Game Genie AI" key="description" />
                <meta name="twitter:card" content="Game Genie AI" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}