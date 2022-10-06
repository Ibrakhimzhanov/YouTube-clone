<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem label="Your data in YouTube" icon="data" />
    </ul>
  </section>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="menuItem in menuItems.slice(1, 6)"
        :key="menuItem.label"
        :label="menuItem.label"
        :icon="menuItem.icon"
        :with-sub-menu="menuItem.withSubMenu"
        @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        :label="menuItems[6].label"
        :icon="menuItems[6].icon"
      />
    </ul>
  </section>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="menuItem in menuItems.slice(7, 9)"
        :key="menuItem.label"
        :label="menuItem.label"
        :icon="menuItem.icon"
      />
    </ul>
  </section>
</template>
<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  components: { DropdownSettingsListItem },

  props: ["menuItems"],
  emits: {
    "select-menu": null,
  },
  methods: {
    selectMenu(menuItem) {
      if (menuItem.withSubMenu) {
        this.$emit("select-menu", menuItem);
      }
    },
  },
};
</script>
