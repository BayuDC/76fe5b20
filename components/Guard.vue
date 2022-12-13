<script lang="ts" setup>
const render = ref(false);
const user = useAuthUser();
const props = defineProps({
    inverse: {
        default: false,
        type: Boolean,
    },
    custom: {
        type: Function,
    },
});

onMounted(() => {
    if (!user.value && !props.inverse) return navigateTo('/login');
    if (user.value && props.inverse) return navigateTo('/');
    if (props.custom && !props.custom()) {
        return showError({ statusCode: 403, message: 'Forbidden' });
    }

    render.value = true;
});
</script>

<template>
    <slot v-if="render" />
</template>

<style scoped></style>
