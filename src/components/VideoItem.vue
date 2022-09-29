<template>
  <a href=" #" class="mb-7 group">
    <VideoItemThumbNail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>

<script>
import VideoItemThumbNail from "./VideoItemThumbNail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";
export default {
  components: {
    VideoItemThumbNail,
    VideoItemInfo,
  },
  props: ["index"],
};
</script>
