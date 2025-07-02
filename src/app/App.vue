<script setup lang="ts">
import HelloWorld from '../widgets/welcome/ui/HelloWorld.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full h-[100px] bg-gray-800 z-50 flex items-center justify-center px-4"
  >
    <img alt="Vue logo" class="h-20 w-20 mr-4" src="../shared/assets/logo.svg" />

    <div class="flex flex-col justify-center">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main class="w-full flex-grow">
    <RouterView />
  </main>
</template>

<style scoped>
/* Удалены все стили, которые теперь управляются Tailwind */
</style>
