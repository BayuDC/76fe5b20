<script lang="ts" setup>
const render = ref(false);
const user = useAuthUser();
const props = defineProps({
    inverse: {
        default: false,
        type: Boolean,
    },
});

onMounted(() => {
    if (!user.value && !props.inverse) return navigateTo('/login');
    if (user.value && props.inverse) return navigateTo('/');
    render.value = true;
});
</script>

<template>
    <slot v-if="render" />
</template>

<style scoped></style>
