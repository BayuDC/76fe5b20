import Link from 'next/link';
import useAuth from '../hooks/use-auth';

export default function Navbar() {
    const auth = useAuth();

    return (
        <div className="navbar rounded-box p-0">
            <div className="flex-1">
                <Link href="/" className="link no-underline text-white text-4xl font-bold p-0">
                    Tink!
                </Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex">
                        <div className="w-10 rounded-full bg-primary text-white text-2xl font-bold leading-10">
                            {auth.user?.username && (auth.user.fullname[0] || auth.user.username[0])}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <Link href="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
