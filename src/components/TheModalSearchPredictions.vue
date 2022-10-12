<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <TheSearchPredictionsList
      :search-predictions="searchPredictions"
      v-model="selectedSearchPredictions"
    />
    <template #footer="{ close }">
      <button @click="close" :class="classes">Cancel</button>
      <button :class="ReportClasses" disabled>Report</button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import TheSearchPredictionsList from "./TheSearchPredictionsList.vue";
export default {
  components: {
    BaseModal,
    TheSearchPredictionsList,
  },
  props: {
    searchPredictions: Array,
  },

  data() {
    return {
      selectedSearchPredictions: [],
      classes: [
        "uppercase",
        "text-sm",
        "font-medium",
        "tracking-wider",
        "py-2.5",
        "px-4",
        "ml-auto",
        "mr-1",
        "focus:outline-none",
      ],
      ReportClasses: [
        "uppercase",
        "text-sm",
        "font-medium",
        "tracking-wider",
        "py-2.5",
        "px-4",
        "ml-1",
        "mr-1",
        "focus:outline-none",
        "text-gray-400",
        "cursor-auto",
      ],
    };
  },
};
</script>
