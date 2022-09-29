<template>
  <button :class="buttonClassses">
    <BaseIcon
      name="user"
      class="mr-2 w-7 h-7"
      fill="none"
      stroke="currentColor"
      is-viewBox
    />
    Sign In
  </button>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { BaseIcon },
  props: { isSidebar: Boolean },
  computed: {
    buttonClassses() {
      const classes = [
        "flex",
        "items-center",
        "whitespace-nowrap",
        "px-2",
        "text-sm",
        "text-blue-700",
        "uppercase",
        "border",
        "border-blue-700",
        "rounded-full",
      ];
      return this.isSidebar
        ? [...classes, "py-0.5", "mt-3"]
        : [...classes, "py-1"];
    },
  },
};
</script>
