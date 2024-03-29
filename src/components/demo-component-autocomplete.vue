<template>
  <h2>Autocomplete</h2>

  <h3>Basic Usage</h3>
  <demo-block class="demo-autocomplete-block">
    <v-autocomplete
      v-model="value"
      :data-source="fetchAutocompleteData"
      placeholder="Enter your text"
      loading-message="Loading..."
      empty-result-message="No matching results."
    />
    <template #code>
      <demo-code name="autocomplete_basic_usage_html" />
    </template>
  </demo-block>

  <h3>Disabled Autocomplete</h3>
  <demo-block class="demo-autocomplete-block">
    <v-autocomplete placeholder="Enter your text" disabled />
    <template #code>
      <demo-code name="autocomplete_disabled_usage_html" />
    </template>
  </demo-block>

  <h3>Autocomplete With Icon</h3>
  <demo-block class="demo-autocomplete-block">
    <v-autocomplete
      v-model="withIconValue"
      :data-source="fetchAutocompleteData"
      placeholder="Enter your text"
      loading-message="Loading..."
      empty-result-message="No matching results."
      icon-clickable
      @icon-click="onClick"
    >
      <template #icon>
        <span class="codicon codicon-file-code"></span>
      </template>
    </v-autocomplete>
    <template #code>
      <demo-code name="autocomplete_with_icon_usage_html" />
    </template>
  </demo-block>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'demo-component-autocomplete',
  setup() {
    const value = ref('');
    const items = ref([
      {
        text: 'Vue.js'
      },
      {
        text: 'React'
      },
      {
        text: 'Angular'
      },
      {
        text: 'Ember.js'
      },
      {
        text: 'Meteor'
      },
      {
        text: 'Polymer'
      },
      {
        text: 'Backbone.js'
      }
    ]);

    const searchData = query => {
      return query
        ? items.value.filter(item =>
            item.text.toLowerCase().includes(query.toLowerCase())
          )
        : items.value;
    };

    const fetchAutocompleteData = (query, requestId, token) => {
      return new Promise(resolve => {
        const timer = setTimeout(() => {
          resolve(searchData(query));
        }, 100);

        token.onCancellationRequested(() => {
          clearTimeout(timer);
          resolve();
        });
      });
    };

    return {
      value,
      withIconValue: ref(''),
      fetchAutocompleteData,
      onClick: () => {}
    };
  }
};
</script>
