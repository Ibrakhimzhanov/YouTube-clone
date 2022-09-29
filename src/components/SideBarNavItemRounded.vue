<template>
  <li>
    <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
      <div class="p-1 mr-6 bg-gray-700 rounded-full">
        <BaseIcon :name="icon" class="w-4 h-4 text-white" />
      </div>

      <span v-html="label"></span>
    </a>
  </li>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  props: {
    label: String,
    icon: String,
  },
};
</script>
