import Link from 'next/link';
import useAuth from '../hooks/use-auth';

export default function Navbar() {
    const auth = useAuth();

    return (
        <div className="navbar bg-base-100 rounded-box shadow-xl">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl hover:bg-inherit px-3">
                    Tink!
                </Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex">
                        <div className="w-10 rounded-full bg-slate-400 text-white text-2xl font-light leading-10">
                            {(auth.user && auth.user.fullname[0]) || auth.user.username[0]}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Profile</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
