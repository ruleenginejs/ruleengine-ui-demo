const input_basic_usage_html = `
<template>
  <v-input v-model="input" placeholder="Enter your text" />
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const input = ref('')
      return {
        input
      }
    }
  }
</script>
`;

const input_disabled_html = `
<template>
  <v-input v-model="input" disabled placeholder="Enter your text" />
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const input = ref('')
      return {
        input
      }
    }
  }
</script>
`;

const input_with_icon_html = `
<template>
  <v-input v-model="input" placeholder="Enter your text">
    <template #icon>
      <v-icon-file-menu />
    </template>
  </v-input>
  <v-input v-model="input" placeholder="Enter your text">
    <template #icon>
      <i class="codicon codicon-file-add" />
    </template>
  </v-input>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const input = ref('')
      return {
        input
      }
    }
  }
</script>
`;

const input_message_html = `
<template>
  <v-input v-model="input" placeholder="Error message" error message="Some error message" />
  <v-input v-model="input" placeholder="Warning message" warning message="Some warning message" />
  <v-input v-model="input" placeholder="Info message" info message="Some info message" />
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const input = ref('')
      return {
        input
      }
    }
  }
</script>
`;

export default [
  {
    name: 'input_basic_usage_html',
    code: input_basic_usage_html,
    lang: 'html'
  },
  {
    name: 'input_disabled_html',
    code: input_disabled_html,
    lang: 'html'
  },
  {
    name: 'input_with_icon_html',
    code: input_with_icon_html,
    lang: 'html'
  },
  {
    name: 'input_message_html',
    code: input_message_html,
    lang: 'html'
  }
];
