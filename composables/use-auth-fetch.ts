export default function useAuthFetch() {
    const user = useAuthUser();
    const loading = useState('auth-loading', () => false);
    const { data, refresh, error } = useApi('/auth', {
        immediate: false,
        pick: ['user'],
        onRequest() {
            loading.value = true;
        },
        onResponse() {
            loading.value = false;
        },
        onResponseError() {},
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
        loading,
    };
}
