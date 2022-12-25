<script lang="ts" setup>
const props = defineProps({
    courseId: String,
});
const loading = useLoading();

interface AssignmentForm extends EventTarget {
    name: { value: string };
    description: { value: string };
    type: { value: string };
}

function handleSubmit(e: Event) {
    console.log((e.target as AssignmentForm).name.value);
    console.log((e.target as AssignmentForm).description.value);
    console.log((e.target as AssignmentForm).type.value);
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-control w-full max-w-xl mb-4">
            <label class="label" for="name">
                <div class="label-text">Name<span class="text-error">*</span></div>
            </label>
            <input type="text" class="input input-bordered w-full" name="name" id="name" required />
        </div>
        <div class="form-control w-full max-w-xl mb-4">
            <label class="label" for="description">
                <div class="label-text">Description <span class="text-error">*</span></div>
            </label>
            <textarea class="textarea textarea-bordered h-24" required name="description" id="description"></textarea>
        </div>
        <div class="form-control w-full max-w-xl mb-8">
            <label class="label" for="type">
                <div class="label-text">Type <span class="text-error">*</span></div>
            </label>
            <select class="select select-bordered w-full" name="type" id="type" required>
                <option value="empty">Empty</option>
                <option value="files">Files</option>
            </select>
        </div>
        <div class="flex items-center justify-end gap-4 max-w-xl">
            <button class="btn" @click="useRouter().back()" type="button">Back to Course</button>
            <button class="btn btn-primary" :class="{ loading }" type="submit">Create</button>
        </div>
    </form>
</template>

<style scoped></style>
