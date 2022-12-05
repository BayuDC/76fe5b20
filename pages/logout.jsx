import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../hooks/use-auth';
import useAxios from '../hooks/use-axios';

export default function Logout() {
    const auth = useAuth();
    const axios = useAxios();
    const router = useRouter();
    useEffect(() => {
        axios.post('/auth/logout').finally(() => {
            auth.unload();
            router.push('/login');
        });
    }, []);

    return <></>;
}
