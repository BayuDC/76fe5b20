<script lang="ts" setup>
const props = defineProps({
    position: {
        required: true,
        type: Number,
    },
});
const steps = ['General', 'Schedule', 'Attachment'];
</script>

<template>
    <ul class="steps lg:steps-vertical steps-horizontal mt-2 mb-4 w-full lg:w-40">
        <li v-for="(step, i) in steps" class="step" :class="{ 'step-secondary': i <= props.position }">
            {{ step }}
        </li>
    </ul>
</template>

<style scoped></style>
