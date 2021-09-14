<template>
  <BaseLayout>
    <router-view />
  </BaseLayout>
</template>

<style>
#app {
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script setup lang="ts">
import BaseLayout from "./layouts/BaseLayout.vue";
</script>
