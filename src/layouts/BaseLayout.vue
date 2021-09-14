<template>
  <div class="flex justify-between px-20 py-5 border-b-2 border-gray">
    <span class="font-bold">Chess</span>
    <ul class="flex justify-between">
      <li class="mr-5">
        <router-link to="/">
          <BaseButton text>Home</BaseButton>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <BaseButton text>About</BaseButton>
        </router-link>
      </li>
    </ul>
  </div>
  <slot></slot>

  <div class="flex justify-center border-t-2 border-gray">
    <span class="mt-10">Made with ❤ ️in 2021</span>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
</script>
