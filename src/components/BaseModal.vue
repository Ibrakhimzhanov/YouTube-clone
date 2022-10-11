<template>
  <div :class="classes" tabindex="-1" @keydown.esc="close">
    <transition
      appear
      enter-active-class="ease-out duration-200"
      enter-from-class=" opacity-0 "
      enter-to-class=" opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModelOverlay v-if="isOpen" @click="close" />
    </transition>

    <div v-if="isOpen" class="relative bg-white max-w-sm m-8">
      <div class="p-2 text-right">
        <BaseModalButtonClose @click="close" />
      </div>
      <div class="p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sequi
        commodi? Perspiciatis quas excepturi mollitia consequuntur corporis quod
        facere reiciendis dolorem, dolor accusantium sequi nulla consectetur non
        magnam quae quisquam, possimus obcaecati nesciunt unde nisi. Officiis
        minima, similique tempora quaerat ab fuga natus libero laborum eum
        nesciunt cum saepe suscipit.
      </div>
    </div>
  </div>
</template>
<script>
import BaseModalButtonClose from "./BaseModalButtonClose.vue";
import BaseModelOverlay from "./BaseModelOverlay.vue";
export default {
  components: {
    BaseModalButtonClose,
    BaseModelOverlay,
  },
  emits: ["close"],
  data() {
    return {
      isOpen: true,
      classes: [
        "fixed",
        "inset-0",
        "z-30",
        "focus:outline-none",
        "flex",
        "justify-center",
        "items-start",
      ],
    };
  },
  mounted() {
    this.$el.focus();
  },
  methods: {
    close() {
      this.isOpen = false;

      setTimeout(() => this.$emit("close"), 100);
    },
  },
};
</script>
