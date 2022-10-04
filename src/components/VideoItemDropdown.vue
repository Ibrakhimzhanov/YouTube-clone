<template>
  <div class="relative -m-1 ml-auto">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
      <BaseIcon name="dotsVertical" class="w-5 h-5" />
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transition opacity-100 scale=100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transition opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropdown"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        class="absolute top-9 right-full sm:right-0 bg-white w-48 rounded shadow-2xl focus:outline-none"
      >
        <section class="py-2">
          <ul>
            <VideoItemDropdownListItem label="Add to queue" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>
<script>
import BaseIcon from "./BaseIcon.vue";
import VideoItemDropdownListItem from "./VideoItemDropdownListItem.vue";
export default {
  components: { BaseIcon, VideoItemDropdownListItem },
  data() {
    return { isOpen: false };
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus());
    },
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>
