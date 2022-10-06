<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem label="Your data in YouTube" icon="data" />
    </ul>
  </section>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(1, 6)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="selectMenu(listItem)"
      />
    </ul>
  </section>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        :label="listItems[6].label"
        :icon="listItems[6].icon"
      />
    </ul>
  </section>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="listItem in listItems.slice(7, 9)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
      />
    </ul>
  </section>
</template>
<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  components: { DropdownSettingsListItem },
  data() {
    return {
      listItems: [
        { label: "Your data in YouTube", icon: "data", withSubMenu: false },
        {
          id: "appearance",
          label: "Appearance: Device theme",
          icon: "sun",
          withSubMenu: true,
        },
        {
          id: "language",
          label: "Language: English",
          icon: "translate",
          withSubMenu: true,
        },
        {
          id: "restricted_mode",
          label: "Restricted Mode: Off",
          icon: "shieldCheck",
          withSubMenu: true,
        },
        {
          id: "location",
          label: "Location: Ukraine",
          icon: "location",
          withSubMenu: true,
        },
        { label: "Keyboard shortcuts", icon: "keyboard", withSubMenu: false },
        { label: "Settings", icon: "setting", withSubMenu: false },
        { label: "Help", icon: "help", withSubMenu: false },
        { label: "Send feedback", icon: "chatAlt", withSubMenu: false },
      ],
    };
  },
  props: ["selectedOptions"],
  emits: {
    "select-menu": null,
    "select-option": null,
  },
  methods: {
    selectMenu(listItem) {
      if (listItem.withSubMenu) {
        this.$emit("select-menu", listItem.id);
      }
    },
  },
};
</script>
