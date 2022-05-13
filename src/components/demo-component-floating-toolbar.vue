<template>
  <h2>FloatingToolbar</h2>

  <h3>Basic Usage</h3>
  <demo-block>
    <div class="demo-cube demo-cube-c demo-cube-h52 demo-cube-relative">
      <v-floating-toolbar :x="10" :y="10">
        <v-action-list>
          <v-action-item icon="add" />
          <v-action-item icon="history" />
          <v-action-item icon="folder" />
          <v-action-item icon="play" disabled />
          <v-action-item icon="debug-stop" disabled />
        </v-action-list>
      </v-floating-toolbar>
    </div>
    <template #code>
      <demo-code name="floating_toolbar_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Vertical Floating Toolbar</h3>
  <demo-block>
    <div class="demo-cube demo-cube-c demo-cube-h52 demo-cube-relative">
      <v-floating-toolbar vertical :x="10" :y="10">
        <v-action-list vertical>
          <v-action-item icon="add" />
          <v-action-item icon="history" />
          <v-action-item icon="folder" />
          <v-action-item icon="play" disabled />
          <v-action-item icon="debug-stop" disabled />
        </v-action-list>
      </v-floating-toolbar>
    </div>
    <template #code>
      <demo-code name="floating_toolbar_vertical_html" />
    </template>
  </demo-block>

  <h3>Fixed Floating Toolbar</h3>
  <demo-block>
    <div class="demo-cube demo-cube-c demo-cube-h14">
      <v-floating-toolbar fixed :x="300" :y="6">
        <v-action-list>
          <v-action-item icon="add" />
          <v-action-item icon="history" />
          <v-action-item icon="folder" />
          <v-action-item icon="play" disabled />
          <v-action-item icon="debug-stop" disabled />
        </v-action-list>
      </v-floating-toolbar>
    </div>
    <template #code>
      <demo-code name="floating_toolbar_fixed_html" />
    </template>
  </demo-block>

  <h3>Floating Toolbar With Labels</h3>
  <demo-block>
    <v-layout h-full w-full>
      <v-layout h-full class="demo-cube-w50p">
        <div class="demo-cube demo-cube-b demo-cube-h52 demo-cube-relative">
          <v-floating-toolbar :x="10" :y="10">
            <v-action-list>
              <v-action-item icon="add">Add Item</v-action-item>
              <v-action-item icon="history">History</v-action-item>
              <v-action-item icon="folder">Choose Folder</v-action-item>
            </v-action-list>
          </v-floating-toolbar>
        </div>
      </v-layout>
      <v-layout h-full class="demo-cube-w50p">
        <div class="demo-cube demo-cube-c demo-cube-h52 demo-cube-relative">
          <v-floating-toolbar vertical :x="10" :y="10">
            <v-action-list vertical>
              <v-action-item icon="add">Add Item</v-action-item>
              <v-action-item icon="history">History</v-action-item>
              <v-action-item icon="folder">Choose Folder</v-action-item>
              <v-action-item icon="play" disabled>Play</v-action-item>
              <v-action-item icon="debug-stop">Stop</v-action-item>
            </v-action-list>
          </v-floating-toolbar>
        </div>
      </v-layout>
    </v-layout>
    <template #code>
      <demo-code name="floating_toolbar_with_labels_usage_html" />
    </template>
  </demo-block>
</template>

<script>
export default {
  name: 'demo-component-floating-toolbar'
};
</script>
