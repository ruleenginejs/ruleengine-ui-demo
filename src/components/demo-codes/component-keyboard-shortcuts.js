const keyboard_shortcuts_basic_usage_html = `
<template>
  <v-keyboard-shortcuts :value="shortcuts" />
</template>

<script>
import { reactive } from "vue"

export default {
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
`;

export default [
  {
    name: 'keyboard_shortcuts_basic_usage_html',
    code: keyboard_shortcuts_basic_usage_html,
    lang: 'html'
  }
];
