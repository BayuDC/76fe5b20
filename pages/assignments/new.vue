<script lang="ts" setup>
const role = useAuth().user.value?.role;
const courseId = useRoute().query.course as string;

if (role != 'teacher') showError({ statusCode: 403, statusMessage: 'Forbidden' });

const { data } = await useApi(`/courses/${courseId}`);
const check = await useApi(`/courses/${courseId}/check`, { method: 'HEAD', toast: false });

setMenuItem([]);
setMenuNav([{ label: data.value.course.name, href: `/courses/${courseId}` }, { label: 'New Assigment' }]);

const position = ref(0);
const Forms = [
    resolveComponent('AssignmentFormGeneral'),
    resolveComponent('AssignmentFormSchedule'),
    resolveComponent('AssignmentFormAttachment'),
];
</script>

<template>
    <div>
        <Course403 v-if="check.error.value" />
        <div v-else class="lg:flex lg:gap-8 lg:items-start">
            <AssignmentSteps :position="position" />
            <component :is="Forms[position]" :courseId="courseId" @done="position++" />
        </div>
    </div>
</template>
