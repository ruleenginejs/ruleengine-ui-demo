const fieldset_basic_usage_html = `
<template>
  <v-fieldset label="Title">
    <v-field-layout>
      <template #label>
        <v-label truncate>Label 1</v-label>
      </template>
      <template #value>
        <v-input placeholder="Enter your text" />
      </template>
    </v-field-layout>
    <v-field-layout>
      <template #label>
        <v-label truncate>Label 2</v-label>
      </template>
      <template #value>
        <v-input placeholder="Enter your text" />
      </template>
    </v-field-layout>
  </v-fieldset>
</template>
`;

const fieldset_vertical_field_layout_html = `
<template>
  <v-fieldset label="Title">
    <v-field-layout vertical>
      <template #label>
        <v-label truncate>Label 1</v-label>
      </template>
      <template #value>
        <v-input placeholder="Enter your text" />
      </template>
    </v-field-layout>
    <v-field-layout vertical>
      <template #label>
        <v-label truncate>Label 2</v-label>
      </template>
      <template #value>
        <v-input placeholder="Enter your text" />
      </template>
    </v-field-layout>
  </v-fieldset>
</template>
`;

const fieldset_title_actions_html = `
<template>
  <v-fieldset label="Title">
    <template #label-actions>
      <v-action-list>
        <v-action-item icon="add" title="Add" />
        <v-action-item icon="history" title="History" />
        <v-action-item icon="trash" title="Remove" />
      </v-action-list>
    </template>
    <v-field-layout>
      <template #label>
        <v-label truncate>Label 1</v-label>
      </template>
      <template #value>
        <v-input placeholder="Enter your text" />
      </template>
    </v-field-layout>
  </v-fieldset>
</template>
`;

export default [
  {
    name: 'fieldset_basic_usage_html',
    code: fieldset_basic_usage_html,
    lang: 'html'
  },
  {
    name: 'fieldset_vertical_field_layout_html',
    code: fieldset_vertical_field_layout_html,
    lang: 'html'
  },
  {
    name: 'fieldset_title_actions_html',
    code: fieldset_title_actions_html,
    lang: 'html'
  }
];
