<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 "
      enter-to-class="transition opacity-100 "
      leave-active-class="transition ease-in duration-100"
      leave-from-class="transition opacity-100"
      leave-to-class="transition opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      isShown: false,
    };
  },
  computed: {
    classes() {
      return [
        "bg-gray-600",
        "bg-opacity-80",
        "rounded-sm",
        "text-white",
        "text-xs",
        "whitespace-nowrap",
        "p-2",
        "absolute",
        "top-14",
        "left-1/2",
        "transform",
        "-translate-x-1/2",
      ];
    },
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>
