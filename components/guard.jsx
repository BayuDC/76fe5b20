import { useRouter } from 'next/router';
import useAuth from '../hooks/use-auth';

export default function Guard({ children }) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
        router.push('/login');
        return;
    }
    return <>{children}</>;
}
