<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedOptions.language.id"
        @click="selectOption({ id: languageId, text: languageName })"
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
      languages: [
        "English(UK)",
        "Русский",
        "O‘zbek",
        "Українська",
        "Français",
        "Português",
        "Türkçe",
      ],
    };
  },
  props: ["selectedOptions"],
  emits: {
    "select-menu": null,
    "select-option": null,
  },
  methods: {
    selectOption(language) {
      this.$emit("select-option", { name: "language", value: language });
    },
  },
};
</script>
