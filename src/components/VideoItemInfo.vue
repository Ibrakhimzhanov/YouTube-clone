<template>
  <div class="flex items-start mt-3">
    <img
      :src="`https://picsum.photos/seed/avatar${index}/68`"
      class="mr-3 rounded-full w-9 h-9"
    />
    <div class="text-sm">
      <!-- <BaseTooltip :text="channelName" top> -->
      <span class="mb-1 font-semibold text-gray-800">Channel {{ index }}</span>
      <!-- </BaseTooltip> -->

      <div class="mt-1 flex">
        <BaseTooltip :text="channelName" top>
          <span>{{ channelName }}</span>
        </BaseTooltip>
        <BaseTooltip text="Verified" top>
          <BaseIcon name="checkCircle" class="w-3.5 h-3.5 ml-1" />
        </BaseTooltip>
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
import BaseTooltip from "./BaseTooltip.vue";
export default {
  data() {
    return {
      channelName: `BLACKPINK ${this.index * 2}`,
    };
  },
  props: ["index"],
  components: { BaseIcon, VideoItemDropdown, BaseTooltip },
};
</script>
