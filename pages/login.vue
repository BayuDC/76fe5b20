<script lang="ts" setup>
definePageMeta({
    layout: 'clear',
});

const loading = useLoading();
const { refresh } = useAuthFetch();

interface LoginForm extends EventTarget {
    username: { value: string };
    password: { value: string };
}
async function handleSubmit(e: Event) {
    const { error } = await useApi('/auth/login', {
        method: 'POST',
        body: {
            username: (e.target as LoginForm).username.value,
            password: (e.target as LoginForm).password.value,
        },
    });

    if (!error.value) {
        if (await refresh()) {
            navigateTo('/', { replace: true });
        }
    }
}
</script>
<template>
    <Guard inverse>
        <div class="hero min-h-screen">
            <div class="hero-content flex-col w-full max-w-sm">
                <div class="text-center lg:text-left">
                    <h1 class="text-6xl font-bold">Tink!</h1>
                </div>
                <div class="card w-full flex-shrink-0 shadow-2xl bg-base-100">
                    <form class="card-body" @submit.prevent="handleSubmit">
                        <div class="form-control">
                            <label class="label" for="username">
                                <span class="label-text">Username</span>
                            </label>
                            <input type="text" class="input input-bordered" name="username" id="username" required />
                        </div>
                        <div class="form-control mb-4">
                            <label class="label" for="password">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" class="input input-bordered" name="password" id="password" />
                            <label class="label">
                                <NuxtLink to="/password/forgot" class="label-text-alt link link-hover">
                                    Forgot password?
                                </NuxtLink>
                            </label>
                        </div>
                        <div class="form-control">
                            <button class="btn btn-primary" :class="{ loading }">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Guard>
</template>
