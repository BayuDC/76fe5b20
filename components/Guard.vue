<script lang="ts" setup>
const user = useAuthUser();
const render = ref(false);
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
    if (!user.value && !props.inverse) {
        navigateTo('/login');
    } else if (user.value && props.inverse) {
        navigateTo('/');
    } else if (props.custom && !props.custom()) {
        showError({ statusCode: 403, message: 'Forbidden' });
    } else {
        render.value = true;
    }
});
</script>

<template>
    <slot v-if="render" />
    <!-- TODO Loading -->
</template>
