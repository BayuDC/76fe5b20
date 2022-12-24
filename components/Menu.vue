<script lang="ts" setup>
const { items, navigations } = useMenu();
</script>

<template>
    <div class="flex items-center justify-between mb-6">
        <div v-if="navigations.length" className="text-sm breadcrumbs">
            <ul>
                <li>
                    <NuxtLink to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </NuxtLink>
                </li>
                <li v-for="(nav, i) in navigations" :key="i">
                    <NuxtLink v-if="nav.href" :to="nav.href">{{ nav.label }}</NuxtLink>
                    <template v-else>{{ nav.label }}</template>
                </li>
            </ul>
        </div>

        <div v-if="items.length" class="dropdown dropdown-end">
            <div class="btn btn-ghost btn-xs" tabindex="0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                </svg>
            </div>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">
                <li v-for="(item, i) in items" :key="i">
                    <NuxtLink v-if="item.href" :to="item.href">{{ item.label }}</NuxtLink>
                    <template v-else>{{ item.label }}</template>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
