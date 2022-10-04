<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${index}/720/404`" />
    <VideoItemThumbnailButton icon="clock" label="Watch later" class="top-0" />
    <VideoItemThumbnailButton
      icon="menuAlt3"
      label="Add to queue"
      class="top-8"
    />
    <span
      class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 text-white bg-black rounded-sm m-1 p-1 text-xs font-semibold"
    >
      17:42
    </span>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import VideoItemThumbnailButton from "./VideoItemThumbnailButton.vue";
export default {
  props: ["index"],
  components: { BaseIcon, VideoItemThumbnailButton },
};
</script>
