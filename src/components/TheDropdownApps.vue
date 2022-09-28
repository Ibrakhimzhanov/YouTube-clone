<template>
  <div
    class="absolute opacity-0 group-hover:opacity-100 top-9 right-0 sm:left-0 bg-white w-60 border border-t-0"
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
</template>

<script>
import DropdownAppsListItem from "./DropdownAppsListItem.vue";
export default {
  components: {
    DropdownAppsListItem,
  },
};
</script>
