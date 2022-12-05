import Link from 'next/link';
import Guard from '../../components/guard';

export default function UpdatePasswordPage() {
    return (
        <Guard>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-sm">
                    <div className="text-center lg:text-left w-full max-w-80">
                        <h1 className="text-5xl font-bold">Please Update Your Password</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Password</span>
                                </label>
                                <input type="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Repeat Password</span>
                                </label>
                                <input type="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guard>
    );
}
