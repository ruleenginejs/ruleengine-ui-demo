<template>
  <v-layout w-full h-center class="demo-header">
    <div class="demo-header__logo-image">
      <router-link :to="{ name: 'home' }">
        <img alt="Logo" src="/logo.png" width="24" height="24" />
      </router-link>
    </div>
    <div class="demo-header__logo">
      <router-link :to="{ name: 'home' }">Rule Engine UI</router-link>
    </div>
    <v-space />
    <demo-theme-switcher />
    <div class="demo-header__nav">
      <router-link :to="{ name: 'component' }">Guide</router-link>
      <router-link :to="{ name: 'component' }">Components</router-link>
      <a
        href="https://github.com/ruleenginejs/ruleengine-ui"
        class="demo-external-link"
        target="_blank"
        >GitHub</a
      >
    </div>
  </v-layout>
</template>

<script>
import DemoThemeSwitcher from './demo-theme-switcher.vue';

export default {
  name: 'demo-header',
  components: {
    DemoThemeSwitcher
  }
};
</script>
