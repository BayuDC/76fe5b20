<script lang="ts" setup>
const { loading, refresh } = useAuthFetch();
watchEffect(async () => await refresh());
</script>
<template>
    <slot v-if="!loading" />
    <!-- TODO Loading -->
</template>
