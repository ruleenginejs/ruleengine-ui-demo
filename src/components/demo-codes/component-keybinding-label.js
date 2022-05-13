const keybindinglabel_basic_usage_html = `
<template>
  <v-keybinding-label value="Ctrl+A" />
  <br />
  <v-keybinding-label value="Ctrl+C" />
</template>
`;

const keybindinglabel_other_separator_usage_html = `
<template>
  <v-keybinding-label value="Cmd+A" :separator="null" />
  <br />
  <v-keybinding-label value="Cmd+C" :separator="null" />
</template>
`;

export default [
  {
    name: 'keybindinglabel_basic_usage_html',
    code: keybindinglabel_basic_usage_html,
    lang: 'html'
  },
  {
    name: 'keybindinglabel_other_separator_usage_html',
    code: keybindinglabel_other_separator_usage_html,
    lang: 'html'
  }
];
