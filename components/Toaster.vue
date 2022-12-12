<script lang="ts" setup>
const message = useMessage();
const key = ref(1);

watch(message, (to, from) => {
    if (to && from) {
        key.value = key.value ? 0 : 1;
    }
});
</script>

<template>
    <Transition
        leave-from-class="translate-y-0 opacity-1"
        leave-to-class="translate-y-20 opacity-0"
        leave-active-class="ease-in-out duration-300"
    >
        <Toast v-if="message" :key="key" />
    </Transition>
</template>
