<script lang="ts" setup>
definePageMeta({
    layout: 'clear',
});

interface LoginForm extends EventTarget {
    username: { value: string };
    password: { value: string };
}
async function handleSubmit(e: Event) {
    const { error } = await useApi('/auth/login', {
        method: 'post',
        body: {
            username: (e.target as LoginForm).username.value,
            password: (e.target as LoginForm).password.value,
        },
    });

    if (!error.value) {
        navigateTo('/', { replace: true });
    } else {
        console.log(error.value);
    }
}
</script>
<template>
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
                        <button class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
