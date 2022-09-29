<template>
  <div class="flex items-start mt-3">
    <img
      :src="`https://picsum.photos/seed/avatar${index}/68`"
      class="mr-3 rounded-full w-9 h-9"
    />
    <div class="text-sm">
      <span class="mb-1 font-semibold text-gray-800"
        >Shut Down VIDEO {{ index }}</span
      >
      <div class="mt-1 flex items-center">
        <span>BLACKPINK {{ index * 2 }}</span>
        <BaseIcon name="checkCircle" class="w-3.5 h-3.5 ml-1" />
      </div>
      <div>
        <span>11M views</span>
        &middot;
        <span>15 hours ago</span>
      </div>
    </div>
    <button
      class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <BaseIcon name="dotsVertical" />
    </button>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  props: ["index"],
  components: { BaseIcon },
};
</script>
