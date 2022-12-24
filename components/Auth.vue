<script lang="ts" setup>
const render = ref(false);

onMounted(async () => {
    await useAuth().fetch();
    render.value = true;
});
</script>
<template>
    <slot v-if="render" />
    <!-- TODO Loading -->
</template>
