<template>
  <div
    class="absolute opacity-0 group-hover:opacity-100 top-9 right-0 bg-white w-72 border border-t-0"
  >
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
    <section class="py-2">
      <ul>
        <DropdownSettingsListItem
          :label="listItems[9].label"
          :withSubMenu="listItems[9].withSubMenu"
        />
      </ul>
    </section>
  </div>
</template>
<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
export default {
  components: { DropdownSettingsListItem },
  data() {
    return {
      listItems: [
        { label: "Your data in YouTube", icon: "data", withSubMenu: false },
        { label: "Appearance: Device theme", icon: "sun", withSubMenu: true },
        { label: "Language: English", icon: "translate", withSubMenu: true },
        {
          label: "Restricted Mode: Off",
          icon: "shieldCheck",
          withSubMenu: true,
        },
        { label: "Location: Ukraine", icon: "location", withSubMenu: true },
        { label: "Keyboard shortcuts", icon: "keyboard", withSubMenu: false },
        { label: "Settings", icon: "setting", withSubMenu: false },
        { label: "Help", icon: "help", withSubMenu: false },
        { label: "Send feedback", icon: "chatAlt", withSubMenu: false },
        { label: "Restricted Mode: Off", icon: null, withSubMenu: true },
      ],
    };
  },
};
</script>
