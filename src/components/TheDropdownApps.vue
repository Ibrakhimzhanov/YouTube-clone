<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
      <BaseIcon
        name="viewGrid"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      />
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
        class="absolute top-9 right-0 sm:left-0 bg-white w-60 border focus:outline-none border-t-0"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="YouTube TV" icon="tv" />
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="YouTube Music" icon="music" />
            <DropdownAppsListItem label="YouTube Kids" icon="kids" />
          </ul>
        </section>
        <section class="py-2 border-b">
          <ul>
            <DropdownAppsListItem label="Creator Academy" icon="academy" />
            <DropdownAppsListItem label="YouTube for Artists" icon="academy" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import DropdownAppsListItem from "./DropdownAppsListItem.vue";
export default {
  components: {
    BaseIcon,
    DropdownAppsListItem,
  },
  data() {
    return {
      isOpen: false,
    };
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
