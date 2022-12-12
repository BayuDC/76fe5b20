<script lang="ts">
definePageMeta({
    layout: 'clear',
});
</script>
<template>
    <div class="hero min-h-screen">
        <div class="hero-content flex-col w-full max-w-sm">
            <div class="text-center lg:text-left">
                <h1 class="text-6xl font-bold">Tink!</h1>
            </div>
            <div class="card w-full flex-shrink-0 shadow-2xl bg-base-100">
                <form class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input type="text" class="input input-bordered" name="username" required />
                    </div>
                    <div class="form-control mb-4">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" class="input input-bordered" name="password" />
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
