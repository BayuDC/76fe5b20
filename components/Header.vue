<script lang="ts" setup>
const user = useAuthUser();
</script>

<template>
    <div class="navbar rounded-box p-0">
        <div class="flex-1">
            <NuxtLink to="/" class="link no-underline text-white text-4xl font-bold p-0">Tink!</NuxtLink>
        </div>
        <div class="flex-none">
            <div v-if="user" class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar flex">
                    <div
                        class="w-10 rounded-full bg-primary text-2xl items-center leading-normal"
                        style="color: #4d002b"
                    >
                        {{ user.fullname?.charAt(0) || user.username?.charAt(0) }}
                    </div>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <NuxtLink to="/logout">Logout</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink v-else to="/login" class="btn btn-primary">Login</NuxtLink>
        </div>
    </div>
</template>
