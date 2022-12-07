import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/use-auth';
import Guard from '../../components/guard';
import useAxios from '../../hooks/use-axios';

export default function UpdatePasswordPage() {
    const auth = useAuth();
    const axios = useAxios();
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const handleSubmit = e => {
        setError();
        e.preventDefault();

        if (password.length < 6) {
            return setError('Minimal password length is 6 characters');
        }
        if (password != password2) {
            return setError('The password confirmation does not match');
        }
        setLoading(true);

        axios
            .patch('/profile/password', { password, password_confirm: password2 })
            .then(res => {
                setMessage(res.data.message);
                auth.unload();
            })
            .catch(err => {
                setError(err.response?.message || 'Something went wrong');
            })
            .finally(() => setLoading(false));
    };

    return (
        <Guard custom={() => auth.user.limited}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-sm">
                    <div className="text-center lg:text-left w-full max-w-80">
                        <h1 className="text-5xl font-bold">Please Update Your Password</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input
                                    value={password}
                                    onInput={e => setPassword(e.target.value)}
                                    type="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Repeat Password</span>
                                </label>
                                <input
                                    value={password2}
                                    onInput={e => setPassword2(e.target.value)}
                                    type="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {error && (
                                <div className="alert alert-error shadow-lg mb-2">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{error}</span>
                                    </div>
                                </div>
                            )}
                            <div className="form-control">
                                {loading ? (
                                    <button className="btn btn-primary loading"></button>
                                ) : (
                                    <button className="btn btn-primary" type="submit">
                                        Update
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={'modal modal-bottom sm:modal-middle bg-base-300' + (message ? ' modal-open' : '')}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{message}</h3>
                    <div className="modal-action">
                        <Link href="/login" className="btn">
                            OK
                        </Link>
                    </div>
                </div>
            </div>
        </Guard>
    );
}
