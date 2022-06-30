<template>
  <main class="py-10 text-center">
    <router-view />

    <p class="my-5 text-center opacity-75 dark:opacity-50 text-sm">[404 Layout]</p>
  </main>
</template>

<script lang="ts" setup>
const router = useRouter()
</script>
