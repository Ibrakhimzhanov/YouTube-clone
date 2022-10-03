<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" :class="iconClasses" is-viewBox />
      <span class="text-xs">{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: {
    label: String,
    icon: String,
    isActive: Boolean,
  },
  computed: {
    classes() {
      const classes = [
        "flex",
        "flex-col",
        "items-center",
        "px-2",
        "py-5",
        "text-sm",
      ];
      return this.isActive
        ? [
            ...classes,
            "font-medium",
            "text-gray-800",
            "bg-gray-200",
            "hover:bg-gray-300",
          ]
        : [...classes, "hover:bg-gray-100"];
    },
    iconClasses() {
      const classes = ["w-6", "h-6", "mb-1.5"];
      return this.isActive ? [...classes, "text-red-500"] : [...classes];
    },
  },
};
</script>
