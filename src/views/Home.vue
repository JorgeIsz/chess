<template>
  <div class="flex">
    <div class="m-auto items-center text-center py-10 flex flex-col">
      <h1 class="font-bold text-4xl">Play</h1>
      <router-link to="/play/vs-player">
        <BaseButton size="big" class="mt-4">VS player</BaseButton>
      </router-link>
      <router-link to="/play/vs-computer">
        <BaseButton size="big" class="mt-4">VS computer</BaseButton>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
</script>
