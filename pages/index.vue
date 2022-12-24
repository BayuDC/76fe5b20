<script lang="ts" setup>
const { data } = await useApi('/courses');
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <CourseCard v-for="course in data.courses" :key="course.id" :course="course" />
    </div>
</template>
