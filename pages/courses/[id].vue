<script setup lang="ts">
const id = useRoute().params.id;
const { data } = await useApi(`/courses/${id}`);
const check = await useApi(`/courses/${id}/check`, {
    method: 'HEAD',
    toast: false,
});
</script>

<template>
    <Guard>
        <div className="text-sm breadcrumbs">
            <ul>
                <li>
                    <NuxtLink to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </NuxtLink>
                </li>
                <li>{{ data.course.name }}</li>
            </ul>
        </div>

        <div class="mt-8">
            <div v-if="check.error.value" class="text-2xl font-bold mb-6">
                Sorry, you are not allowed to access this course!
                <div class="text-lg mt-2 font-normal">
                    Let's go back to the <NuxtLink to="/" class="link link-info">Home Page</NuxtLink>.
                </div>
            </div>
            <div v-else>Hehehe</div>
        </div>
    </Guard>
</template>
