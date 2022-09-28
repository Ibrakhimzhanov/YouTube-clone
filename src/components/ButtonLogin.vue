<template>
  <button
    class="flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-full"
  >
    <BaseIcon
      name="user"
      class="mr-2 w-7 h-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    />
    Sign In
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
};
</script>
