<template>
  <h2>Input</h2>

  <h3>Basic Usage</h3>
  <demo-block class="demo-input-block">
    <v-input v-model="input" placeholder="Enter your text" />
    <template #code>
      <demo-code name="input_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Disabled Input</h3>
  <demo-block class="demo-input-block">
    <v-input v-model="disabledInput" disabled placeholder="Enter your text" />
    <template #code>
      <demo-code name="input_disabled_html" />
    </template>
  </demo-block>

  <h3>Input with icon</h3>
  <demo-block class="demo-input-block">
    <v-input v-model="inputWithIcon" placeholder="Enter your text">
      <template #icon>
        <v-icon-file-menu />
      </template>
    </v-input>
    <v-input v-model="inputWithIcon" placeholder="Enter your text">
      <template #icon>
        <i class="codicon codicon-file-add" />
      </template>
    </v-input>
    <template #code>
      <demo-code name="input_with_icon_html" />
    </template>
  </demo-block>

  <h3>Input message</h3>
  <demo-block class="demo-input-block">
    <v-input
      v-model="inputWithMessage"
      placeholder="Error message"
      error
      message="Some error message"
    />
    <v-input
      v-model="inputWithMessage"
      placeholder="Warning message"
      warning
      message="Some warning message"
    />
    <v-input
      v-model="inputWithMessage"
      placeholder="Info message"
      info
      message="Some info message"
    />
    <template #code>
      <demo-code name="input_message_html" />
    </template>
  </demo-block>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'demo-component-button',
  setup() {
    return {
      input: ref(''),
      disabledInput: ref(''),
      inputWithIcon: ref(''),
      inputWithMessage: ref('')
    };
  }
};
</script>
