<script lang="ts" setup>
const loading = useLoading();
const props = defineProps({ assignmentId: String });
const emit = defineEmits(['finish']);
const files = ref<File[]>([]);

async function handleSubmit(e: Event) {
    const formData = new FormData();
    files.value.forEach(file => formData.append('attachments[]', file));

    const { error } = await useApi(`/assignments/${props.assignmentId}/attachments`, {
        method: 'PATCH',
        body: formData,
    });

    if (!error.value) emit('finish');
}
function handleChange(e: Event) {
    files.value = [...((e.target as HTMLInputElement).files as any)];
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="w-full max-w-xl">
        <div class="form-control w-full mb-8">
            <label class="label" for="attachments">
                <div class="label-text">Files</div>
            </label>
            <input
                type="file"
                class="file-input file-input-bordered w-full"
                name="attachments[]"
                id="attachments"
                multiple
                required
                @change="handleChange"
            />
        </div>
        <div class="flex items-center justify-end gap-4 max-w-xl flex-wrap">
            <button class="btn" type="button" @click="emit('finish')">Skip This and finish</button>
            <button class="btn btn-primary" :class="{ loading }" type="submit">Upload and Finish</button>
        </div>
    </form>

    <!-- TODO File List Preview -->
</template>

<style scoped></style>
