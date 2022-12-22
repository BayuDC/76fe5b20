import { UseFetchOptions } from 'nuxt/dist/app/composables';
import { AsyncData } from 'nuxt/dist/app/composables/asyncData';
import type { FetchError } from 'ofetch';

interface UseApiOptions extends UseFetchOptions<any> {
    toast?: boolean;
}

const defaultOpts: UseApiOptions = {
    toast: true,
};

export default function useApi(path: string, opts?: UseApiOptions | undefined): AsyncData<any, FetchError<any> | null> {
    const loading = useLoading();
    const message = useMessage();

    opts = { ...defaultOpts, ...opts };

    return useFetch('/api' + path, {
        onRequest() {
            loading.value = true;
            message.value = undefined;
        },
        onResponse() {
            loading.value = false;
        },
        onResponseError({ response }) {
            if (!opts.toast) return;
            message.value = response._data?.message || 'Something went wrong';
        },
        ...opts,
    });
}
