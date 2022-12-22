<script lang="ts" setup>
const { refresh } = useAuthFetch();
const render = ref(false);
onMounted(async () => {
    await refresh();
    render.value = true;
});
</script>
<template>
    <slot v-if="render" />
    <!-- TODO Loading -->
</template>
