<template>
  <input
    class="h-5 w-5 cursor-pointer"
    type="checkbox"
    :id="id"
    v-bind="$attrs"
    v-model="modelValue"
  />
  <label v-if="$slots.default" :for="id" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>
<script>
export default {
  props: {
    id: String,
    modelValue: Array,
  },
};
</script>
