import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="container max-w-6xl">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full max-w-sm">
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl font-bold">Tink!</h1>
                    </div>
                    <div className="card w-full flex-shrink-0 shadow-2xl bg-base-100 ">
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" className="input input-bordered" />
                                <label className="label">
                                    <Link href="/forgot-password" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
