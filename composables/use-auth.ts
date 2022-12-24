export interface AuthUser {
    username: string;
    fullname: string;
    limited: boolean;
    secure: boolean;
    role: string;
}

export default function useAuth() {
    const config = useAppConfig();
    const user = useState<AuthUser | undefined>('user', () => undefined);

    const { data, refresh, error } = useFetch<{ user: AuthUser }>('/api/auth', {
        baseURL: config.baseUrl,
        pick: ['user' as never],
        immediate: false,
    });

    const fetch = async () => {
        await refresh();

        user.value = data.value?.user;

        if (error.value?.status == 425) {
            user.value = { limited: true };
            navigateTo('/password/update');
            return false;
        }

        return true;
    };

    return { fetch, user };
}
