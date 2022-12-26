<script lang="ts" setup>
const loading = useLoading();
const enable = ref(true);

function handleSubmit(e: Event) {}
</script>
<template>
    <form @submit.prevent="handleSubmit" class="w-full max-w-xl">
        <div class="form-control w-full mb-6">
            <label class="label" for="group">
                <div class="label-text">Group <span class="text-error">*</span></div>
            </label>
            <select class="select select-bordered w-full" name="group" id="group" required>
                <option value="1">Kelas A</option>
                <option value="2">kelas B</option>
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
                    <div class="label-text">Open at</div>
                </label>
                <input type="datetime-local" class="input input-bordered w-full" name="open" id="open" />
            </div>
            <div class="form-control w-full mb-4">
                <label class="label" for="close">
                    <div class="label-text">Close at</div>
                </label>
                <input type="datetime-local" class="input input-bordered w-full" name="close" id="close" />
            </div>
            <div class="form-control mb-4"></div>
        </template>

        <div class="flex items-center justify-end gap-4 max-w-xl">
            <button class="btn" type="button">Skip This</button>
            <button class="btn btn-primary" :class="{ loading }" type="submit">Save</button>
        </div>
    </form>
</template>
