<template>
  <button
    :class="classes"
    class="uppercase rounded-md py-1 whitespace-nowrap w-min"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface BaseButtonProps {
  primary?: boolean;
  text?: boolean;
  class?: string;
  size?: "small" | "medium" | "big";
}
const props = withDefaults(defineProps<BaseButtonProps>(), {
  primary: true,
  text: false,
  class: "",
  size: "medium",
});

const classes = computed(() => ({
  "bg-primary hover:bg-primary-dark text-white": props.primary && !props.text,
  "hover:bg-primary hover:opacity-50 hover:text-white text-gray": props.text,
  "px-3": props.size === "medium",
  "px-2 text-xs": props.size === "small",
  "px-3 text-xl": props.size === "big",
  [props.class]: true,
}));
</script>
