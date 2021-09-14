<template>
  <button :class="classes" class="uppercase py-1 px-3 rounded-md">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface BaseButtonProps {
  primary?: boolean;
  text?: boolean;
}
const props = withDefaults(defineProps<BaseButtonProps>(), {
  primary: true,
  text: false,
});

const classes = computed(() => ({
  "bg-primary text-white": props.primary && !props.text,
  "hover:bg-primary-alt text-gray": props.text,
}));
</script>
