<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button @click="toggle" class="relative p-2 focus:outline-none">
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
        @keydown.esc="close"
        tabindex="-1"
        :class="dropdownClasses"
      >
        <component
          v-if="selectedMenu"
          :is="menu"
          :selected-options="selectedOptions"
          @select-option="selectOption"
          @close="closeMenu"
        />
        <TheDropdownSettingsMain
          v-else
          :menu-items="menuItems"
          @select-menu="selectMenu"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import BaseTooltip from "./BaseTooltip.vue";
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearance from "./TheDropdownSettingsAppearance.vue";
import TheDropdownSettingsLanguages from "./TheDropdownSettingsLanguages.vue";
import TheDropdownSettingsLocation from "./TheDropdownSettingsLocation.vue";
import TheDropdownSettingsRestrictedMode from "./TheDropdownSettingsRestrictedMode.vue";
export default {
  components: {
    BaseIcon,
    BaseTooltip,
    TheDropdownSettingsMain,
    TheDropdownSettingsAppearance,
    TheDropdownSettingsLanguages,
    TheDropdownSettingsRestrictedMode,
    TheDropdownSettingsLocation,
  },
  computed: {
    menu() {
      const menuComponentNames = {
        appearance: "TheDropdownSettingsAppearance",
        language: "TheDropdownSettingsLanguages",
        restricted_mode: "TheDropdownSettingsRestrictedMode",
        location: "TheDropdownSettingsLocation",
      };
      return this.selectedMenu
        ? menuComponentNames[this.selectedMenu.id]
        : null;
    },
    menuItems() {
      return [
        { label: "Your data in YouTube", icon: "data", withSubMenu: false },
        {
          id: "appearance",
          label: "Appearance: " + this.selectedOptions.theme.text,
          icon: "sun",
          withSubMenu: true,
        },
        {
          id: "language",
          label: "Language: " + this.selectedOptions.language.text,
          icon: "translate",
          withSubMenu: true,
        },
        {
          id: "restricted_mode",
          label: "Restricted Mode: " + this.selectedOptions.restrictedMode.text,
          icon: "shieldCheck",
          withSubMenu: true,
        },
        {
          id: "location",
          label: "Location: " + this.selectedOptions.location.text,
          icon: "location",
          withSubMenu: true,
        },
        { label: "Keyboard shortcuts", icon: "keyboard", withSubMenu: false },
        { label: "Settings", icon: "setting", withSubMenu: false },
        { label: "Help", icon: "help", withSubMenu: false },
        { label: "Send feedback", icon: "chatAlt", withSubMenu: false },
      ];
    },
  },
  data() {
    return {
      isOpen: false,
      selectedMenu: null,
      selectedOptions: {
        theme: { id: 0, text: "Device theme" },
        language: { id: 0, text: "English" },
        restrictedMode: { enabled: false, text: "Off" },
        location: { id: 0, text: "United States" },
      },
      dropdownClasses: [
        "z-10",
        "absolute",
        "top-9",
        "right-0",
        "bg-white",
        "w-72",
        "border",
        "border-t-0",
        "focus:outline-none",
      ],
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
        this.close();
      }
    });
  },
  methods: {
    selectMenu(menu) {
      this.selectedMenu = menu;

      this.$refs.dropdown.focus();
    },
    selectOption(option) {
      this.selectedOptions[option.name] = option.value;
    },
    toggle() {
      this.isOpen ? this.close() : this.open();
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
      setTimeout(this.closeMenu, 100);
    },
    closeMenu() {
      this.selectMenu(null);
    },
  },
};
</script>
