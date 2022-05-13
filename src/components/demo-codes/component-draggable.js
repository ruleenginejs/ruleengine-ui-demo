const draggable_basic_usage_html = `
<template>
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
</template>
`;

const draggable_with_hint_html = `
<template>
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
</template>
`;

const draggable_fixed_html = `
<template>
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
</template>
`;

const draggable_disabled_html = `
<template>
  <v-layout>
    <v-draggable disabled>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
  </v-layout>
</template>
`;

const draggable_actions_html = `
<template>
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
</template>
`;

export default [
  {
    name: 'draggable_basic_usage_html',
    code: draggable_basic_usage_html,
    lang: 'html'
  },
  {
    name: 'draggable_with_hint_html',
    code: draggable_with_hint_html,
    lang: 'html'
  },
  {
    name: 'draggable_fixed_html',
    code: draggable_fixed_html,
    lang: 'html'
  },
  {
    name: 'draggable_disabled_html',
    code: draggable_disabled_html,
    lang: 'html'
  },
  {
    name: 'draggable_actions_html',
    code: draggable_actions_html,
    lang: 'html'
  }
];
