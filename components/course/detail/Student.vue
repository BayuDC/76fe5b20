<script lang="ts" setup>
const id = useRoute().params.id;
</script>

<template>
    <div class="grid grid-cols-1 gap-4">
        <div
            tabindex="0"
            class="collapse collapse-arrow collapse-open border border-base-300 bg-base-100 rounded-box p-2 shadow-xl"
        >
            <h2 class="collapse-title text-xl font-bold">
                <NuxtLink to="#" class="link link-hover">Focus me to see content</NuxtLink>
            </h2>
            <div class="collapse-content prose max-w-full">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit dicta adipisci sint debitis,
                    sit nemo, nobis ut excepturi laborum corporis perferendis a, expedita qui eum! Repellat quasi vitae
                    officiis?
                </p>

                <div class="divider"></div>
                <div class="flex flex-wrap justify-between items-center gap-y-1">
                    <span class="text-sm">
                        <span class="uppercase font-bold text-error">Deadline</span>: 10-01-2023 08:11</span
                    >
                    <button class="btn btn-secondary btn-sm">Details</button>
                </div>
            </div>
        </div>
    </div>
</template>
