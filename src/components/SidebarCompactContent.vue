<template>
  <section>
    <ul>
      <SidebarCompactNavItem
        v-for="navItem in navItems"
        :key="navItem.label"
        :label="navItem.label"
        :icon="navItem.icon"
        :is-active="navItem.isActive"
      />
    </ul>
  </section>
</template>
<script>
import SidebarCompactNavItem from "./SidebarCompactNavItem.vue";
export default {
  components: {
    SidebarCompactNavItem,
  },
  data() {
    return {
      navItems: [
        {
          label: "Home",
          icon: "home",
          isActive: true,
        },
        {
          label: "Shorts",
          icon: "shorts",
          isActive: false,
        },
        {
          label: "Subscriptions",
          icon: "subscription",
          isActive: false,
        },
        {
          label: "Library",
          icon: "library",
          isActive: false,
        },
        {
          label: "History",
          icon: "history",
          isActive: false,
        },
      ],
    };
  },
};
</script>
