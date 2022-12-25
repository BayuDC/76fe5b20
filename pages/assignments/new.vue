<script lang="ts" setup>
const role = useAuth().user.value?.role;
const courseId = useRoute().query.course as string;

if (role != 'teacher') showError({ statusCode: 403, statusMessage: 'Forbidden' });

const { data } = await useApi(`/courses/${courseId}`);
const check = await useApi(`/courses/${courseId}/check`, {
    method: 'HEAD',
    toast: false,
});
setMenuItem([]);
setMenuNav([
    { label: data.value.course.name, href: `/courses/${courseId}` },
    { label: 'New Assigment' },
    //
]);
</script>

<template>
    <div>
        <Course403 v-if="check.error.value" />
        <AssignmentForm v-else :courseId="courseId" />
    </div>
</template>
