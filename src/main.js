import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import globalComponents from './utils/global-components';
import 'highlight.js/lib/common';
import 'highlight.js/styles/vs2015.css';
import '@vscode/codicons/dist/codicon.css';
import RuleEngineUI from '@ruleenginejs/ui';
import '@ruleenginejs/ui/dist/style.css';
import '@ruleenginejs/ui/dist/vscode.theme.css';

const app = createApp(App);

app.use(router);
app.use(hljsVuePlugin);
app.use(globalComponents);
app.use(RuleEngineUI);

app.mount('#app');
