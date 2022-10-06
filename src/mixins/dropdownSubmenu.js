import DropdownSettingsListItem from "../components/DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "../components/DropdownSettingsHeader.vue";
export default {
  components: { DropdownSettingsListItem, DropdownSettingsHeader },
  data() {
    return {
      optionName: null,
    };
  },
  props: ["selectedOptions"],
  emits: {
    close: null,
    "select-option": null,
  },
  methods: {
    selectOption(option) {
      this.$emit("select-option", { name: this.optionName, value: option });
    },
  },
};
