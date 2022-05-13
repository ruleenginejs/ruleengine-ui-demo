<template>
  <h2>Draggable</h2>

  <h3>Basic Usage</h3>
  <demo-block>
    <v-layout>
      <v-draggable>
        <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable>
        <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable>
        <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable>
        <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
    </v-layout>
    <template #code>
      <demo-code name="draggable_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Draggable With Hint</h3>
  <demo-block>
    <v-layout>
      <v-draggable hint>
        <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable hint>
        <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable hint>
        <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable hint>
        <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
    </v-layout>
    <template #code>
      <demo-code name="draggable_with_hint_html" />
    </template>
  </demo-block>

  <h3>Fixed Draggable</h3>
  <demo-block>
    <v-layout>
      <v-draggable fixed>
        <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable fixed>
        <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable fixed>
        <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
      <v-draggable fixed>
        <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
    </v-layout>
    <template #code>
      <demo-code name="draggable_fixed_html" />
    </template>
  </demo-block>

  <h3>Disabled Draggable</h3>
  <demo-block>
    <v-layout>
      <v-draggable disabled>
        <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
      </v-draggable>
    </v-layout>
    <template #code>
      <demo-code name="draggable_disabled_html" />
    </template>
  </demo-block>

  <h3>Draggable Actions</h3>
  <demo-block>
    <v-action-list>
      <v-draggable>
        <v-action-item title="Add" icon="add" @click="onClick" />
      </v-draggable>
      <v-draggable>
        <v-action-item title="Edit" icon="edit" @click="onClick" />
      </v-draggable>
      <v-draggable hint>
        <v-action-item title="Remove" icon="trash" @click="onClick" />
      </v-draggable>
      <v-draggable hint>
        <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
      </v-draggable>
    </v-action-list>
    <template #code>
      <demo-code name="draggable_actions_html" />
    </template>
  </demo-block>
</template>

<script>
export default {
  name: 'demo-component-draggable',
  setup() {
    return {
      onClick: () => {}
    };
  }
};
</script>
