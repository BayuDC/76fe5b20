import Link from 'next/link';

export default function ForgotPasswordPage() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Forgot Password?</h1>
                    <p className="py-6">
                        Please contact the site administrator manually to reset your password. The developer of this
                        website was too lazy to build this feature
                    </p>
                    <Link href="/" className="btn btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
