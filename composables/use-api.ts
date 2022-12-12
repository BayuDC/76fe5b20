import { UseFetchOptions } from 'nuxt/dist/app/composables';
import { AsyncData } from 'nuxt/dist/app/composables/asyncData';
import type { FetchError } from 'ofetch';

export default function useApi(
    path: string,
    opts?: UseFetchOptions<any> | undefined
): AsyncData<any, FetchError<any> | null> {
    const loading = useLoading();

    return useFetch('/api' + path, {
        ...opts,
        onRequest() {
            loading.value = true;
        },
        onResponse() {
            loading.value = false;
        },
    });
}
