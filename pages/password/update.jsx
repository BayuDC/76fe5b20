import { useState } from 'react';
import Guard from '../../components/guard';
import useAxios from '../../hooks/use-axios';

export default function UpdatePasswordPage() {
    const axios = useAxios();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();

        axios
            .patch('/profile/password', { password, password_confirm: password2 })
            .then(res => {
                console.log(res.data.message);
            })
            .finally(() => setLoading(false));
    };

    return (
        <Guard>
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
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Repeat Password</span>
                                </label>
                                <input
                                    value={password2}
                                    onInput={e => setPassword2(e.target.value)}
                                    type="password"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
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
        </Guard>
    );
}
