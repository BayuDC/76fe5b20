<script lang="ts" setup>
definePageMeta({ layout: 'clear' });
const message = useMessage();
const loading = useLoading();
const password1 = ref('');
const password2 = ref('');
const notif = ref('');

async function handleSubmit() {
    if (password1.value.length < 6) {
        return (message.value = 'Minimal password length is 6 characters');
    }
    if (password1.value != password2.value) {
        return (message.value = 'The password confirmation does not match');
    }

    const { data } = await useApi('/profile/password', {
        method: 'PATCH',
        body: {
            password: password1.value,
            password_confirm: password2.value,
        },
    });

    notif.value = data.value.message;
}
function handleOk() {
    useAuthUser().value = undefined;
    navigateTo('/login');
}
function protectPage() {
    return useAuthUser().value?.limited;
}
</script>

<template>
    <Guard :custom="protectPage">
        <div class="hero min-h-screen" v-if="!notif">
            <div class="hero-content flex-col lg:flex-row-reverse w-full max-w-sm">
                <div class="text-center lg:text-left w-full max-w-80">
                    <h1 class="text-5xl font-bold">Please Update Your Password</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form @submit.prevent="handleSubmit" class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">New Password</span>
                            </label>
                            <input v-model="password1" type="password" class="input input-bordered" required />
                        </div>
                        <div class="form-control mb-4">
                            <label class="label">
                                <span class="label-text">Repeat Password</span>
                            </label>
                            <input v-model="password2" type="password" class="input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <button class="btn btn-primary" type="submit" :class="{ loading }">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Modal v-else>
            <h3 class="font-bold text-lg">{{ notif }}</h3>
            <div class="modal-action">
                <button @click="handleOk" class="btn" autofocus>OK</button>
            </div>
        </Modal>
    </Guard>
</template>
