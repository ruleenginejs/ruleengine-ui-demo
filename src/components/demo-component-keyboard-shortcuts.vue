<template>
  <h2>KeyboardShortcuts</h2>

  <h3>Basic Usage</h3>
  <demo-block>
    <v-keyboard-shortcuts :value="shortcuts" />
    <template #code>
      <demo-code name="keyboard_shortcuts_basic_usage_html" />
    </template>
  </demo-block>
</template>

<script>
import { reactive } from "vue"

export default {
  name: "demo-component-keyboard-shortcuts",
  setup() {
    const shortcuts = reactive([
      {
        title: "Copy",
        key: "Ctrl+C"
      },
      {
        title: "Paste",
        key: "Ctrl+V"
      }
    ]);

    return {
      shortcuts
    };
  }
};
</script>
