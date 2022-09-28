<template>
  <div
    class="absolute opacity-100 group-hover:opacity-100 top-9 right-0 bg-white w-72 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem label="Your data in YouTube" icon="data" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          label="Appearance: Device theme"
          icon="sun"
          with-sub-menu
        />
        <DropdownSettingsListItem
          label="Language: English"
          icon="translate"
          with-sub-menu
        />
        <DropdownSettingsListItem
          label="Restricted Mode: Off"
          icon="shieldCheck"
          with-sub-menu
        />
        <DropdownSettingsListItem
          label="Location: Ukraine"
          icon="location"
          with-sub-menu
        />
        <DropdownSettingsListItem label="Keyboard shortcuts" icon="keyboard" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem label="Settings" icon="setting" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem label="Help" icon="help" />
        <DropdownSettingsListItem label="Send feedback" icon="chatAlt" />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownSettingsListItem label="Restricted Mode: Off" with-sub-menu />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
export default {
  components: {
    DropdownSettingsListItem,
  },
};
</script>
