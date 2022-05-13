<template>
  <h2>Fieldset</h2>

  <h3>Basic Usage</h3>
  <demo-block class="demo-fieldset-block">
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
    <template #code>
      <demo-code name="fieldset_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Vertical Field Layout</h3>
  <demo-block class="demo-fieldset-block">
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
    <template #code>
      <demo-code name="fieldset_vertical_field_layout_html" />
    </template>
  </demo-block>

  <h3>Fieldset Title Actions</h3>
  <demo-block class="demo-fieldset-block">
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
    <template #code>
      <demo-code name="fieldset_title_actions_html" />
    </template>
  </demo-block>
</template>

<script>
export default {
  name: 'demo-component-fieldset'
};
</script>
