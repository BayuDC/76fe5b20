<script lang="ts" setup>
await useApi('/auth/logout', { method: 'POST' });
useAuth().user.value = undefined;
navigateTo('/login');
</script>

<template></template>
