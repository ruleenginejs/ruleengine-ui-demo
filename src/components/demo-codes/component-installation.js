const installation_usage_js = `
import { createApp } from 'vue'
import App from './App.vue'
import RuleEngineUI from '@ruleenginejs/ruleengine-ui'
// Add css styles
import "@ruleenginejs/ruleengine-ui/dist/normalize.css"
import '@ruleenginejs/ruleengine-ui/dist/style.css'
import '@ruleenginejs/ruleengine-ui/dist/dark.theme.css'

const app = createApp(App)

app.use(RuleEngineUI)

app.mount('#app')
`;

const installation_usage_html = `
<v-action-bar>
  <v-action @click="onClick">
    <v-icon-play />
  </v-action>
</v-action-bar>
`;

export default [
  {
    name: "installation_usage_js",
    code: installation_usage_js,
    lang: "javascript"
  },
  {
    name: "installation_usage_html",
    code: installation_usage_html,
    lang: "html"
  }
]
