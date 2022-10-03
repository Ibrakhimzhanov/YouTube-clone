<template>
  <span :class="classes">
    <BaseIcon :name="icon" class="w-5 h-5" />
    <span :class="badgeClasses">
      <span class="inline-block my-1.5 mx-3">
        {{ label }}
      </span>
    </span>
  </span>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: {
    icon: String,
    label: String,
  },
  computed: {
    classes() {
      return [
        "opacity-100",
        "group-hover:opacity-100",
        "bg-opacity-60",
        "absolute",
        "top-0",
        "right-0",
        "text-white",
        "bg-black",
        "m-1",
        "p-1",
        "rounded-sm",
      ];
    },
    data() {
      return {
        isBadgeShown: false,
      };
    },
    badgeClasses() {
      return [
        "absolute",
        "transition-width",
        "bg-black",
        "bg-opacity-60",
        "whitespace-nowrap",
        "top-0",
        "right-full",
        "overflow-hidden",
        "uppercase",
        "text-xs",
        "delay-100",
        "font-semibold",
        "rounded-l-sm",
        "w-28",
      ];
    },
    methods: {
      toggleBadge() {
        this.isBadgeShown = !this.isBadgeShown;
      },
    },
  },
};
</script>
