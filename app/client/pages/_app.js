import '../styles/styles.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-5QNSDWF2FV"/>
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5QNSDWF2FV', {
                page_path: window.location.pathname,
                });
                `,
            }}
        />
        <Component {...pageProps} />
        </>
    );
}

export default MyApp;