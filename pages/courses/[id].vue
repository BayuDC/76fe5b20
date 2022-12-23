<script setup lang="ts">
const id = useRoute().params.id;
const role = useAuthUser().value?.role;
const { data } = await useApi(`/courses/${id}`);
const check = await useApi(`/courses/${id}/check`, {
    method: 'HEAD',
    toast: false,
});
</script>

<template>
    <Guard>
        <Breadcrumb>
            <li>{{ data.course.name }}</li>
        </Breadcrumb>

        <div class="mt-8">
            <Course403 v-if="check.error.value" />
            <CourseDetailStudent v-else-if="role == 'student'" />
            <CourseDetailTeacher v-else-if="role == 'teacher'" />
            <Course403 v-else />
        </div>
    </Guard>
</template>
