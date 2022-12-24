<template>
    <Guard>
        <div class="container max-w-6xl p-5 m-auto">
            <Header />
            <div class="divider mt-1 mb-10"></div>
            <main>
                <slot />
            </main>
        </div>
    </Guard>
</template>
