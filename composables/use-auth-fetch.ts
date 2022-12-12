export default function useAuthFetch() {
    const user = useAuthUser();
    const loading = useState('auth-loading', () => false);
    const { data, refresh } = useApi('/auth', {
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
        async refresh() {
            await refresh();
            user.value = data.value?.user;
        },
        loading,
    };
}
