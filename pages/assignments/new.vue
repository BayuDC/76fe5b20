<script lang="ts" setup>
const role = useAuth().user.value?.role;
const courseId = useRoute().query.course as string;

if (role != 'teacher') showError({ statusCode: 403, statusMessage: 'Forbidden' });

const { data } = await useApi(`/courses/${courseId}`);
const check = await useApi(`/courses/${courseId}/check`, { method: 'HEAD', toast: false });

setMenuItem([]);
setMenuNav([{ label: data.value.course.name, href: `/courses/${courseId}` }, { label: 'New Assigment' }]);

const FormGeneral = resolveComponent('AssignmentFormGeneral');
const FormSchedule = resolveComponent('AssignmentFormSchedule');
</script>

<template>
    <div>
        <Course403 v-if="check.error.value" />
        <div v-else class="lg:flex lg:gap-8 lg:items-start">
            <AssignmentSteps :position="1" />
            <component :is="FormSchedule" :courseId="courseId" />
        </div>
    </div>
</template>
