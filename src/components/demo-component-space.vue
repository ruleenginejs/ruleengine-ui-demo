<template>
  <h2>Space</h2>
  <p>Space between two elements.</p>

  <h3>Basic Usage</h3>
  <demo-block>
    <v-layout>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14" />
      <v-space />
      <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14" />
      <v-space />
      <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14" />
      <v-space />
      <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14" />
    </v-layout>
    <template #code>
      <demo-code name="space_basic_usage_html" />
    </template>
  </demo-block>
</template>

<script>
export default {
  name: 'demo-component-space'
};
</script>
