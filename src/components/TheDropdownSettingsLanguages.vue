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
        :active="languageId === selectedLanguageId"
        @click="selectedLanguageId = languageId"
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
      selectedLanguageId: 0,
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
  emits: {
    "select-menu": null,
  },
};
</script>
