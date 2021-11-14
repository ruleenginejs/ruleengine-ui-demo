<template>
  <h2>ActionList</h2>

  <h3>Basic Usage</h3>
  <demo-block>
    <v-action-list>
      <v-action-item title="Play" icon="play" @click="onClick" />
      <v-action-item title="Stop" icon="debug-stop" @click="onClick" />
      <v-action-item title="Add Item" icon="plus" @click="onClick" />
      <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
    </v-action-list>
    <template #code>
      <demo-code name="actionlist_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Disabled Action Item</h3>
  <demo-block>
    <v-action-list>
      <v-action-item icon="play" @click="onClick" />
      <v-action-item icon="debug-stop" @click="onClick" />
      <v-action-item disabled icon="plus" @click="onClick" />
      <v-action-item disabled icon="folder" @click="onClick" />
    </v-action-list>
    <template #code>
      <demo-code name="actionlist_disabled_action_usage_html" />
    </template>
  </demo-block>

  <h3>Vertical Action List</h3>
  <demo-block>
    <v-action-list vertical>
      <v-action-item icon="play" @click="onClick" />
      <v-action-item icon="debug-stop" @click="onClick" />
      <v-action-item icon="plus" @click="onClick" />
      <v-action-item icon="folder" @click="onClick" />
    </v-action-list>
    <template #code>
      <demo-code name="actionlist_vertical_action_list_usage_html" />
    </template>
  </demo-block>

  <h3>Action With Label</h3>
  <demo-block>
    <v-action-list>
      <v-action-item icon="play" @click="onClick">Play</v-action-item>
      <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
      <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
      <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
    </v-action-list>
    <template #code>
      <demo-code name="actionlist_action_with_label_usage_html" />
    </template>
  </demo-block>

  <h3>Vertcal Action With Label</h3>
  <demo-block>
    <v-action-list vertical>
      <v-action-item icon="play" @click="onClick">Play</v-action-item>
      <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
      <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
      <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
    </v-action-list>
    <template #code>
      <demo-code name="actionlist_vertical_action_with_label_usage_html" />
    </template>
  </demo-block>
</template>

<script>
export default {
  name: "demo-component-action-list",
  setup() {
    return {
      onClick: () => { }
    };
  }
};
</script>
