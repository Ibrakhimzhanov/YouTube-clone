<template>
  <section :class="classes">
    <div class="border-t border-b px-4 max-w-screen-2xl m-auto">
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <CategoryItem
          v-for="category in categories"
          :key="category"
          :category="category"
          :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: {
    CategoryItem,
  },
  props: {
    isSidebarOpen: Boolean,
  },
  data() {
    return {
      categories: [
        "All",
        "Live",
        "Gaming",
        "Music",
        "Touchdowns",
        "Sitcoms",
        "Animated films",
        "Sneaker Collecting",
        "Action Thrillers",
        "Basketball",
        "Comedy",
        "Smartphones",
        "Scene",
        "Humans",
        "Childrens's Music",
        "Driving",
        "Tourist destinations",
        "Eating",
        "Conversation",
        "Action-adventure games",
        "Recently uploaded",
      ],
    };
  },
  computed: {
    classes() {
      return [
        this.isSidebarOpen ? "xl:pl-64" : "md:pl-24",
        "pt-16",
        "w-full",
        "fixed",
        "bg-white",
        "bg-opacity-95",
        "z-10",
      ];
    },
  },
};
</script>
