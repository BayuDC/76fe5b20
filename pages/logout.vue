<script lang="ts" setup>
await useApi('/auth/logout', { method: 'post' });
useAuthUser().value = undefined;
navigateTo('/login');
</script>

<template>
    <Guard />
    <!-- TODO Loading -->
</template>
