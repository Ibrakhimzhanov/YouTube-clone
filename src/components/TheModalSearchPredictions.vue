<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <div class="space-y-3 text-black text-sm mt-5">
      <div
        class="flex items-center"
        v-for="(label, index) in searchPredictions"
        :key="label"
      >
        <input
          class="h-5 w-5 cursor-pointer"
          type="checkbox"
          :id="index"
          :value="label"
          v-model="selectedSearchPredictions"
        />
        <label :for="index" class="pl-4 cursor-pointer flex-grow">{{
          label
        }}</label>
      </div>
    </div>
    <template #footer="{ close }">
      <button @click="close" :class="classes">Cancel</button>
      <button :class="ReportClasses" disabled>Report</button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";

export default {
  components: {
    BaseModal,
  },
  data() {
    return {
      selectedSearchPredictions: [],
      searchPredictions: [
        "new york giants",
        "new york alicia keys",
        "new york giants vs washington footbal",
        "new york",
        "new york song",
        "new york new york frank sinatra",
        "new york jets",
        "new york city",
        "new york giants live",
        "new york state of mind",
        "new york giants vs washington footbal live",
        "new york giants injury",
        "new york giants live stream",
        "new york accent",
      ],
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
