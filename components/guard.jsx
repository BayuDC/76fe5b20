import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/use-auth';

export default function Guard({ children, guest, custom }) {
    const auth = useAuth();
    const router = useRouter();
    const [pending, setPending] = useState(true);

    useEffect(() => {
        if (!auth.user && !guest) {
            router.push('/login');
            return;
        }
        if (auth.user && guest) {
            router.push('/');
            return;
        }
        if (custom && !custom()) {
            // TODO 404 or 403
            router.push('/');
            return;
        }
        setPending(false);
    }, []);
    if (pending) return <></>;
    return <>{children}</>;
}
