import '../styles/globals.css';
import Head from 'next/head';
import { AuthProvider } from '../contexts/auth';

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            {Component.title && (
                <Head>
                    <title>Tink! - {Component.title}</title>
                </Head>
            )}
            <Component {...pageProps} />
        </AuthProvider>
    );
}
