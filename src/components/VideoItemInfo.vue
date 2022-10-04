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
    <VideoItemDropdown />
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import VideoItemDropdown from "./VideoItemDropdown.vue";
export default {
  props: ["index"],
  components: { BaseIcon, VideoItemDropdown },
};
</script>
