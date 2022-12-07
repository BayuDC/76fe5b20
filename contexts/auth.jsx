import { useRouter } from 'next/router';
import { createContext, useState, useEffect } from 'react';
import useAxios from '../hooks/use-axios';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const axios = useAxios();
    const router = useRouter();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const load = () => {
        setLoading(true);
        axios
            .get('/auth')
            .then(res => setUser(res.data))
            .catch(err => {
                if (err.response?.status == 425) {
                    setUser({ limited: true });
                    router.push('/password/update');
                }
            })
            .finally(() => setLoading(false));
    };
    const unload = () => {
        setUser(undefined);
    };

    useEffect(() => {
        load();
    }, []);

    if (loading) return <></>;

    return <AuthContext.Provider value={{ user, load, unload }}>{children}</AuthContext.Provider>;
}
