<template>
  <DropdownSettingsHeader
    title="Choose your location"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(locationName, locationId) in locations"
        :key="locationId"
        :label="locationName"
        :active="locationId === selectedOptions.locationId"
        @click="selectOption(locationId)"
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
    "select-menu": null,
    "select-option": null,
  },
  methods: {
    selectOption(locationId) {
      this.$emit("select-option", { name: "locationId", value: locationId });
      //   selectedThemeId = themeId;
    },
  },
};
</script>
