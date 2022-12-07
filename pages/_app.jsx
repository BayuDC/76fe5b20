import '../styles/globals.css';
import Head from 'next/head';
import { AuthProvider } from '../contexts/auth';

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Head>
                <title>{Component.title ? `Tink! - ${Component.title}` : 'Tink!'}</title>
            </Head>
            <Component {...pageProps} />
        </AuthProvider>
    );
}
