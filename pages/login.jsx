import Link from 'next/link';
import { useState } from 'react';
import useAxios from '../hooks/use-axios';

export default function LoginPage() {
    const axios = useAxios();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        axios
            .post('/auth/login', {
                username: e.target.username.value,
                password: e.target.password.value,
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
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
                            <div className="form-control">
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
                            <div className="form-control mt-6">
                                {loading ? (
                                    <button className="btn btn-primary loading"></button>
                                ) : (
                                    <button className="btn btn-primary" type="submit">
                                        {' '}
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
