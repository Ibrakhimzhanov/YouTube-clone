<template>
  <div
    class="fixed inset-0 z-10 bg-black bg-opacity-80 focus:outline-none"
    tabindex="-1"
    @click.self="close"
    @keydown.esc="close"
  >
    <div class="bg-white max-w-sm mx-auto my-8">
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
export default {
  components: {
    BaseModalButtonClose,
  },
  emits: ["close"],
  mounted() {
    this.$el.focus();
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
