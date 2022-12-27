<script lang="ts" setup>
const role = useAuth().user.value?.role;
const courseId = useRoute().query.course as string;
const assignmentId = ref('');

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

function handleFinish(e?: string) {
    if (e) assignmentId.value = e;
    if (position.value < 2) position.value++;
    else navigateTo(`/courses/${courseId}`);
}
</script>

<template>
    <div>
        <Course403 v-if="check.error.value" />
        <div v-else class="lg:flex lg:gap-8 lg:items-start">
            <AssignmentSteps :position="position" />
            <component :is="Forms[position]" :courseId="courseId" :assignmentId="assignmentId" @finish="handleFinish" />
        </div>
    </div>
</template>
