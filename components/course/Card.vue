<script setup>
defineProps({
    course: Object,
});
</script>

<template>
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">{{ course.name }}</h2>
            <p>{{ course.description }}</p>
            <div class="card-actions justify-end mt-2">
                <NuxtLink :to="`/courses/${course.id}`" class="btn btn-primary">See Course</NuxtLink>
            </div>
        </div>
    </div>
</template>
