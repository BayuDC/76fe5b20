import { AuthUser } from './use-auth-user';

export default function useAuthFetch() {
    const user = useAuthUser();
    const { data, refresh, error } = useFetch<{ user: AuthUser }>('/api/auth', {
        pick: ['user' as never],
        immediate: false,
    });

    return {
        async refresh(): Promise<boolean> {
            await refresh();
            user.value = data.value?.user;

            if (error.value?.status == 425) {
                user.value = { limited: true };
                navigateTo('/password/update');
                return false;
            }

            return true;
        },
    };
}
