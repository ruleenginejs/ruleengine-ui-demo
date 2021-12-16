<template>
  <h2>Installation</h2>
  <h3>npm</h3>
  <demo-code
    lang="shell"
    code="npm install @ruleenginejs/ui"
  />

  <p>Add codicons (optional)</p>
  <demo-code lang="shell" code="npm install @vscode/codicons" />

  <p>In your code</p>
  <demo-code lang="javascript" code='import "@vscode/codicons/dist/codicon.css"' />

  <h3>Usage</h3>
  <demo-code name="installation_usage_js" />

  <p>In your templates</p>
  <demo-code name="installation_usage_html" />
</template>

<script>
export default {
  name: "demo-component-installation"
};
</script>
