const actionlist_basic_usage_html = `
<template>
  <v-action-list>
    <v-action-item title="Play" icon="play" @click="onClick" />
    <v-action-item title="Stop" icon="debug-stop" @click="onClick" />
    <v-action-item title="Add Item" icon="plus" @click="onClick" />
    <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
  </v-action-list>
</template>
`;

const actionlist_disabled_action_usage_html = `
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item disabled icon="plus" @click="onClick" />
    <v-action-item disabled icon="folder" @click="onClick" />
  </v-action-list>
</template>
`;

const actionlist_vertical_action_list_usage_html = `
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item icon="plus" @click="onClick" />
    <v-action-item icon="folder" @click="onClick" />
  </v-action-list>
</template>
`;

const actionlist_action_with_label_usage_html = `
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`;

const actionlist_vertical_action_with_label_usage_html = `
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`;

export default [
  {
    name: "actionlist_basic_usage_html",
    code: actionlist_basic_usage_html,
    lang: "html"
  },
  {
    name: "actionlist_disabled_action_usage_html",
    code: actionlist_disabled_action_usage_html,
    lang: "html"
  },
  {
    name: "actionlist_vertical_action_list_usage_html",
    code: actionlist_vertical_action_list_usage_html,
    lang: "html"
  },
  {
    name: "actionlist_action_with_label_usage_html",
    code: actionlist_action_with_label_usage_html,
    lang: "html"
  },
  {
    name: "actionlist_vertical_action_with_label_usage_html",
    code: actionlist_vertical_action_with_label_usage_html,
    lang: "html"
  }
]
