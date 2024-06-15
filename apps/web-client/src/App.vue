<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="flex flex-col"></nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
