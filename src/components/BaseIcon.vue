<template>
  <svg
    :class="$attrs.class || 'w-6 h-6'"
    :fill="$attrs.fill || 'currentColor'"
    :stroke="$attrs.stroke || ''"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>

<script>
import icons from "../icons";
export default {
  props: {
    name: String,
    isViewBox: Boolean,
  },
  computed: {
    viewBox() {
      return this.isViewBox ? ["0 0 24 24"] : ["0 0 20 20"];
    },
  },
  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>
