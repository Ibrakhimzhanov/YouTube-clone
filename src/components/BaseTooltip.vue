<template>
  <div class="relative">
    <div
      class="flex items-center h-full"
      @mouseenter="isShown = true"
      @mouseleave="isShown = false"
      @click="isShown = false"
    >
      <slot />
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transition opacity-0 "
      enter-to-class="transition opacity-100 "
      leave-active-class="transition ease-in duration-75"
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
    top: Boolean,
    right: Boolean,
    left: Boolean,
  },
  data() {
    return {
      isShown: false,
      classes: [
        "bg-gray-600",
        "bg-opacity-80",
        "rounded-sm",
        "text-white",
        "text-xs",
        "whitespace-nowrap",
        "p-2",
        "transform",
        "absolute",
        ...this.getPositionClasses(),
      ],
    };
  },
  methods: {
    getPositionClasses() {
      const topClass = this.top ? "bottom-12" : "top-14";

      if (this.right) {
        return [topClass, "left-0"];
      }
      if (this.left) {
        return [topClass, "right-0"];
      }

      return [topClass, "left-1/2", "-translate-x-1/2"];
    },
  },
};
</script>
