<script lang="ts" setup>
await useApi('/auth/logout', { method: 'POST' });
useAuthUser().value = undefined;
navigateTo('/login');
</script>

<template>
    <Guard />
    <!-- TODO Loading -->
</template>
