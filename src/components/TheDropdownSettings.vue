<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transition opacity-100 scale=100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transition opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropdown"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        :class="dropdownClasses"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingsListItem
              label="Your data in YouTube"
              icon="data"
            />
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
    </transition>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import BaseTooltip from "./BaseTooltip.vue";
export default {
  components: { BaseIcon, DropdownSettingsListItem, BaseTooltip },
  computed: {
    dropdownClasses() {
      return [
        "z-10",
        "absolute",
        "top-9",
        "right-0",
        "bg-white",
        "w-72",
        "border",
        "border-t-0",
        "focus:outline-none",
      ];
    },
  },
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
      isOpen: false,
    };
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus());
    },
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>
