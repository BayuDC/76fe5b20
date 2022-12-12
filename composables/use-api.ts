import { UseFetchOptions } from 'nuxt/dist/app/composables';
import { AsyncData } from 'nuxt/dist/app/composables/asyncData';
import type { FetchError } from 'ofetch';

export default function useApi(
    path: string,
    opts?: UseFetchOptions<any> | undefined
): AsyncData<any, FetchError<any> | null> {
    const loading = useLoading();
    const message = useMessage();

    return useFetch('/api' + path, {
        onRequest() {
            loading.value = true;
            message.value = undefined;
        },
        onResponse() {
            loading.value = false;
        },
        onResponseError({ response }) {
            message.value = response._data?.message || 'Something went wrong';
        },
        ...opts,
    });
}
