<template>
  <h2>KeybindingLabel</h2>

  <h3>Basic Usage</h3>
  <demo-block>
    <v-keybinding-label value="Ctrl+A" />
    <br />
    <v-keybinding-label value="Ctrl+C" />
    <template #code>
      <demo-code name="keybindinglabel_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Mac Separator</h3>
  <demo-block>
    <v-keybinding-label value="Cmd+A" :separator="null" />
    <br />
    <v-keybinding-label value="Cmd+C" :separator="null" />
    <template #code>
      <demo-code name="keybindinglabel_other_separator_usage_html" />
    </template>
  </demo-block>
</template>

<script>
export default {
  name: 'demo-component-keybinding-label'
};
</script>
