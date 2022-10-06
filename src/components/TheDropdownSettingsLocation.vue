<template>
  <DropdownSettingsHeader title="Choose your location" @back="$emit('close')" />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(locationName, locationId) in locations"
        :key="locationId"
        :label="locationName"
        :active="locationId === selectedOptions.location.id"
        @click="selectOption({ id: locationId, text: locationName })"
      />
    </ul>
  </section>
</template>
<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  components: { DropdownSettingsListItem, DropdownSettingsHeader },
  data() {
    return {
      locations: [
        "United States",
        "Russia",
        "Uzbekistan",
        "Ukraine",
        "France",
        "Portugal",
        "Turkey",
      ],
    };
  },
  props: ["selectedOptions"],
  emits: {
    close: null,
    "select-option": null,
  },
  methods: {
    selectOption(location) {
      this.$emit("select-option", { name: "location", value: location });
      //   selectedThemeId = themeId;
    },
  },
};
</script>
