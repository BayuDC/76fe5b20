import Navbar from './navbar';

export default function Layout({ children }) {
    return (
        <div className="container max-w-6xl p-5 min-h-screen">
            <Navbar />
            <div className="divider my-1"></div>
            <main>{children}</main>
        </div>
    );
}
