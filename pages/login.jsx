import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useAxios from '../hooks/use-axios';

export default function LoginPage() {
    const axios = useAxios();
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setError('');

        axios
            .post('/auth/login', {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            .then(res => {
                // TODO load data
                router.push('/');
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data.message || 'Something went wrong');
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="container max-w-6xl">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full max-w-sm">
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl font-bold">Tink!</h1>
                    </div>
                    <div className="card w-full flex-shrink-0 shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSubmit} className="card-body" id="myform">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" className="input input-bordered" name="username" required />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <Link href="/forgot-password" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
                                </label>
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
                                        Login
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
