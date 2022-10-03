<template>
  <aside :class="classes">
    <SidebarCompactContent />
  </aside>
</template>
<script>
import SidebarCompactContent from "./SidebarCompactContent.vue";
export default {
  components: {
    SidebarCompactContent,
  },
  computed: {
    classes() {
      return [
        "min-h-screen",
        "overflow-auto",
        "fixed",
        "top-0",
        "pt-14",
        "bg-white",
        "z-20",
      ];
    },
  },
};
</script>
