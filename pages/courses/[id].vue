<script setup lang="ts">
const id = useRoute().params.id;
const role = useAuth().user.value?.role;
const { data } = await useApi(`/courses/${id}`);
const check = await useApi(`/courses/${id}/check`, {
    method: 'HEAD',
    toast: false,
});

setMenuNav([{ label: data.value.course.name }]);
setMenuItem([{ label: 'New Assignment', href: `/assignments/new?course=${id}` }]);
</script>

<template>
    <div>
        <Course403 v-if="check.error.value" />
        <CourseDetailStudent v-else-if="role == 'student'" />
        <CourseDetailTeacher v-else-if="role == 'teacher'" />
        <Course403 v-else />
    </div>
</template>
