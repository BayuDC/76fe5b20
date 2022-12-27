<script lang="ts" setup>
const props = defineProps({ assignmentId: String });
const emit = defineEmits(['finish']);
const loading = useLoading();
const skip = ref(true);
const enable = ref(false);

const { data } = useApi('/groups');

interface FormBody {
    group: number;
    open?: string;
    close?: string;
}
async function handleSubmit(e: Event) {
    const body: FormBody = {
        group: parseInt((e.target as any).group.value),
    };
    if (enable.value) {
        body.open = (e.target as any).open.value += ':00Z';
        body.close = (e.target as any).close.value += ':00Z';
    }

    await useApi(`/assignments/${props.assignmentId}/schedules`, {
        method: 'PATCH',
        body,
    });

    skip.value = false;
}
</script>
<template>
    <form @submit.prevent="handleSubmit" class="w-full max-w-xl">
        <div class="form-control w-full mb-6">
            <label class="label" for="group">
                <div class="label-text">Group <span class="text-error">*</span></div>
            </label>
            <select class="select select-bordered w-full" name="group" id="group" required>
                <option v-for="group in data?.groups" :value="group.id">{{ group.name }}</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label cursor-pointer justify-center px-0">
                <input type="checkbox" class="checkbox" v-model="enable" />
                <span class="label-text ml-2">Enable schedule</span>
            </label>
        </div>
        <template v-if="enable">
            <div class="form-control w-full mb-4">
                <label class="label" for="open">
                    <div class="label-text">Open at <span class="text-error">*</span></div>
                </label>
                <input type="datetime-local" class="input input-bordered w-full" name="open" id="open" required />
            </div>
            <div class="form-control w-full mb-4">
                <label class="label" for="close">
                    <div class="label-text">Close at <span class="text-error">*</span></div>
                </label>
                <input type="datetime-local" class="input input-bordered w-full" name="close" id="close" required />
            </div>
            <div class="form-control mb-4"></div>
        </template>

        <div class="flex items-center justify-end gap-4 max-w-xl">
            <button class="btn" type="button" @click="emit('finish')">{{ skip ? 'Skip This' : 'Done' }}</button>
            <button class="btn btn-primary" :class="{ loading }" type="submit">Save</button>
        </div>
    </form>

    <!-- TODO Added Schedule Preview -->
</template>
