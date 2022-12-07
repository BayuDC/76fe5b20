import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html data-theme="dracula">
            <Head />
            <body className="bg-base-300">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
