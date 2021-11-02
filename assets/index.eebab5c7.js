import{r as n,c as V,o as b,a as me,b as re,d as f,e as t,f as B,g as e,w as o,t as pe,h as O,i as ve,F as y,j as k,k as h,l as T,m as M,n as L,p as be,q as he,s as fe,u as ge}from"./vendor.6462032e.js";const ye=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function u(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=u(i);fetch(i.href,r)}};ye();var g=(_,s)=>{for(const[u,l]of s)_[u]=l;return _};const ke={name:"App"};function xe(_,s,u,l,i,r){const c=n("router-view");return b(),V(c)}var $e=g(ke,[["render",xe]]);const Se="modulepreload",U={},we="/ruleengine-ui-demo/",w=function(s,u){return!u||u.length===0?s():Promise.all(u.map(l=>{if(l=`${we}${l}`,l in U)return;U[l]=!0;const i=l.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Se,i||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),i)return new Promise((a,d)=>{c.addEventListener("load",a),c.addEventListener("error",d)})})).then(()=>s())},je=()=>w(()=>import("./demo-component-layout.fdcea525.js"),["assets/demo-component-layout.fdcea525.js","assets/vendor.6462032e.js"]),Ce=()=>w(()=>import("./demo-component-page.36684960.js"),["assets/demo-component-page.36684960.js","assets/vendor.6462032e.js"]);var Oe=[{path:"component",redirect:"/component/installation",name:"component",component:je,children:[{path:":id",name:"component-content",props:!0,component:Ce}]}];const Te=()=>w(()=>import("./demo-layout.f01119b6.js"),["assets/demo-layout.f01119b6.js","assets/demo-header.dfc68275.js","assets/vendor.6462032e.js"]),Ie=()=>w(()=>import("./demo-home.0a5c34ec.js"),["assets/demo-home.0a5c34ec.js","assets/vendor.6462032e.js"]);var ze=[{path:"/",component:Te,children:[{path:"",name:"home",component:Ie},...Oe]}];const Ee=()=>w(()=>import("./demo-not-found.c5914f95.js"),["assets/demo-not-found.c5914f95.js","assets/demo-header.dfc68275.js","assets/vendor.6462032e.js"]);var Ve=[{path:"/:pathMatch(.*)",name:"not-found",component:Ee}];const Be=me({history:re(),routes:[...ze,...Ve]}),Me={name:"demo-block"},Le={class:"demo-block"},Ue={class:"demo-block__source"},De={class:"demo-block__code"};function Ae(_,s,u,l,i,r){const c=n("v-sidebar-section");return b(),f("div",Le,[t("div",Ue,[B(_.$slots,"default")]),t("div",De,[e(c,{"bottom-border":!1,"header-border":!1,title:"Code"},{default:o(()=>[B(_.$slots,"code")]),_:3})])])}var qe=g(Me,[["render",Ae]]),Fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qe});const Re=`
<template>
  <v-action-bar>
    <v-action @click="onClick">
      <v-icon-play />
    </v-action>
    <v-action @click="onClick">
      <v-icon-stop />
    </v-action>
    <v-action @click="onClick">
      <v-icon-plus />
    </v-action>
    <v-action @click="onClick">
      <v-icon-folder />
    </v-action>
  </v-action-bar>
</template>
`,Ne=`
<template>
  <v-action-bar>
    <v-action @click="onClick">
      <v-icon-play />
    </v-action>
    <v-action disabled @click="onClick">
      <v-icon-stop />
    </v-action>
  </v-action-bar>
</template>
`,Pe=`
<template>
  <v-action-bar>
    <v-action-group>
      <v-action @click="onClick">
        <span class="codicon codicon-play" />
      </v-action>
      <v-action @click="onClick">
        <span class="codicon codicon-stop" />
      </v-action>
    </v-action-group>
    <v-action @click="onClick">
      <span class="codicon codicon-plus" />
    </v-action>
    <v-action-group>
      <v-action @click="onClick">
        <span class="codicon codicon-zoom-in" />
      </v-action>
      <v-action @click="onClick">
        <span class="codicon codicon-zoom-out" />
      </v-action>
    </v-action-group>
  </v-action-bar>
</template>
`;var We=[{name:"actionbar_basic_usage_html",code:Re,lang:"html"},{name:"actionbar_disabled_action_usage_html",code:Ne,lang:"html"},{name:"actionbar_grouping_action_usage_html",code:Pe,lang:"html"}],D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});const Ge=`
<template>
  <v-autocomplete
    placeholder="Enter your text"
    v-model="value"
    :data-source="fetchAutocompleteData"
    loading-message="Loading..."
    empty-result-message="No matching results."
  />
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const value = ref("");
      const items = ref([
        {
          text: "Vue.js"
        },
        {
          text: "React"
        },
        {
          text: "Angular"
        },
        {
          text: "Ember.js"
        },
        {
          text: "Meteor"
        },
        {
          text: "Polymer"
        },
        {
          text: "Backbone.js"
        }
      ]);

      const searchData = (query) => {
        return query
          ? items.value.filter((item) =>
              item.text.toLowerCase().includes(query.toLowerCase())
            )
          : items.value;
      };

      const fetchAutocompleteData = (query, requestId, token) => {
        return new Promise((resolve) => {
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
        fetchAutocompleteData
      };
    }
  }
<\/script>
`,He=`
<template>
  <v-autocomplete placeholder="Enter your text" disabled />
</template>
`,Ke=`
<template>
  <v-autocomplete
    placeholder="Enter your text"
    icon-clickable
    @icon-click="onClick"
  >
    <template #icon>
      <span class="codicon codicon-file-code"></span>
    </template>
  </v-autocomplete>
</template>
`;var Qe=[{name:"autocomplete_basic_usage_html",code:Ge,lang:"html"},{name:"autocomplete_disabled_usage_html",code:He,lang:"html"},{name:"autocomplete_with_icon_usage_html",code:Ke,lang:"html"}],A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const Je=`
<template>
  <v-layout gutter>
    <v-button>Default</v-button>
    <v-button secondary>Secondary</v-button>
  </v-layout>
</template>
`,Xe=`
<template>
  <v-layout gutter>
    <v-button disabled>Default</v-button>
    <v-button disabled secondary>Secondary</v-button>
  </v-layout>
</template>
`;var Ye=[{name:"button_basic_usage_html",code:Je,lang:"html"},{name:"button_disabled_html",code:Xe,lang:"html"}],q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ye});const Ze=`
<template>
  <v-layout gutter wrap>
    <v-layout gutter w-full h-center>
      <v-checkbox id="checkbox_1" v-model="checked" />
      <v-label for="checkbox_1">Checked</v-label>
    </v-layout>
    <v-layout gutter w-full h-center>
      <v-checkbox id="checkbox_2" v-model="unchecked" />
      <v-label for="checkbox_2">Unchecked</v-label>
    </v-layout>
  </v-layout>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const checked = ref(true);
      const unchecked = ref(false);

      return {
        checked,
        unchecked
      };
    }
  }
<\/script>
`,eo=`
<template>
  <v-layout gutter wrap>
    <v-layout gutter w-full h-center>
      <v-checkbox id="checkbox_1" v-model="checked" disabled />
      <v-label for="checkbox_1">Checked</v-label>
    </v-layout>
    <v-layout gutter w-full h-center>
      <v-checkbox id="checkbox_2" v-model="unchecked" disabled />
      <v-label for="checkbox_2">Unchecked</v-label>
    </v-layout>
  </v-layout>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const checked = ref(true);
      const unchecked = ref(false);

      return {
        checked,
        unchecked
      };
    }
  }
<\/script>
`;var oo=[{name:"checkbox_basic_usage_html",code:Ze,lang:"html"},{name:"checkbox_disabled_html",code:eo,lang:"html"}],F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oo});const to=`
<template>
  <v-content h-full scroll padding="md">
    <div class="demo-cube demo-cube-a demo-cube-h14" />
    <div class="demo-cube demo-cube-b demo-cube-h14" />
    <div class="demo-cube demo-cube-c demo-cube-h14" />
    <div class="demo-cube demo-cube-d demo-cube-h14" />
  </v-content>
</template>
`;var no=[{name:"content_basic_usage_html",code:to,lang:"html"}],R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:no});const lo=`
<template>
  <v-button id="button-1" @click="dropdownOpen = !dropdownOpen">
    Toggle Dropdown
  </v-button>
  <v-dropdown
    v-model:visible="dropdownOpen"
    anchor="button-1"
    anchor-constraint
    :offset-y="4"
  >
    <v-content fill>
      <v-list :items="items" @update:selected="dropdownOpen = false" />
    </v-content>
  </v-dropdown>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      return {
        dropdownOpen: ref(false),
        items: ref([
          {
            id: 1,
            text: "Item 1",
            icon: "v-icon-doc-text",
            iconColor: "#B69E24"
          },
          {
            id: 2,
            text: "Item 2",
            icon: "v-icon-doc-text",
            iconColor: "#B69E24"
          },
          {
            id: 3,
            text: "Item 3",
            icon: "v-icon-doc-text",
            iconColor: "#B69E24"
          }
        ])
      };
    }
  }
<\/script>
`;var co=[{name:"dropdown_basic_usage_html",code:lo,lang:"html"}],N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:co});const ao=`
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
`,so=`
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
`;var io=[{name:"fieldset_basic_usage_html",code:ao,lang:"html"},{name:"fieldset_vertical_layout_html",code:so,lang:"html"}],P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:io});const _o=`
<template>
  <v-layout gutter wrap>
    <v-icon-book />
    <v-icon-checkmark />
    <v-icon-chevron-down />
    <v-icon-circle />
    <v-icon-close />
    <v-icon-doc-text />
    <v-icon-file-menu />
    <v-icon-folder />
    <v-icon-play />
    <v-icon-stop />
    <v-icon-plus-bold />
    <v-icon-plus />
    <v-icon-script />
    <v-icon-sidebar-left />
    <v-icon-sidebar-right />
  </v-layout>
</template>
`,uo=`
<template>
  <v-layout gutter wrap>
    <i class="codicon codicon-account"/>
    <i class="codicon codicon-activate-breakpoints"/>
    <i class="codicon codicon-add"/>
    <i class="codicon codicon-alert"/>
    <i class="codicon codicon-archive"/>
    <i class="codicon codicon-array"/>
  </v-layout>
</template>
`;var mo=[{name:"icon_basic_usage_html",code:_o,lang:"html"},{name:"codicons_html",code:uo,lang:"html"}],W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mo});const ro=`
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
<\/script>
`,po=`
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
<\/script>
`,vo=`
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
<\/script>
`;var bo=[{name:"input_basic_usage_html",code:ro,lang:"html"},{name:"input_disabled_html",code:po,lang:"html"},{name:"input_with_icon_html",code:vo,lang:"html"}],G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bo});const ho=`
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
`,fo=`
<v-action-bar>
  <v-action @click="onClick">
    <v-icon-play />
  </v-action>
</v-action-bar>
`;var go=[{name:"installation_usage_js",code:ho,lang:"javascript"},{name:"installation_usage_html",code:fo,lang:"html"}],H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:go});const yo=`
<template>
  <v-fieldset>
    <v-field-layout>
      <template #label>
        <v-label truncate for="input1">Label 1</v-label>
      </template>
      <template #value>
        <v-input id="input1" placeholder="Enter your text" />
      </template>
    </v-field-layout>
    <v-field-layout>
      <template #label>
        <v-label truncate for="checkbox1">Label 2</v-label>
      </template>
      <template #value>
        <v-checkbox id="checkbox1" v-model="value" />
      </template>
    </v-field-layout>
  </v-fieldset>
</template>
`;var ko=[{name:"label_basic_usage_html",code:yo,lang:"html"}],K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ko});const xo=`
<template>
  <v-layout h-full w-full vertical>
    <v-layout not-shrink>
      <div class="demo-cube demo-cube-a demo-cube-h14" />
    </v-layout>
    <v-layout all-distr h-full>
      <v-layout h-full not-shrink>
        <div class="demo-cube demo-cube-b demo-cube-w52" />
      </v-layout>
      <v-layout h-full all-distr>
        <div class="demo-cube demo-cube-c" />
      </v-layout>
    </v-layout>
  </v-layout>
</template>
`;var $o=[{name:"layout_basic_html",code:xo,lang:"html"}],Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$o});const So=`
<template>
  <v-content h-full scroll>
    <v-list :items="items" v-model:selected="selectedItem" />
  </v-content>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const items = reactive([]);
      const selectedItem = ref({ id: 1 });

      for (let i = 0; i < 15; i++) {
        items.push({
          id: i + 1,
          text: \`Item \${i + 1}\`,
          icon: "v-icon-doc-text"
        });
      }

      return {
        items,
        selectedItem
      };
    }
  }
<\/script>
`,wo=`
<template>
  <v-content h-full scroll>
    <v-list :tab-index="0" :items="items" v-model:selected="selectedItem" />
  </v-content>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const items = reactive([]);
      const selectedItem = ref({ id: 1 });

      for (let i = 0; i < 15; i++) {
        items.push({
          id: i + 1,
          text: \`Item \${i + 1}\`,
          icon: "v-icon-doc-text"
        });
      }

      return {
        items,
        selectedItem
      };
    }
  }
<\/script>
`;var jo=[{name:"list_basic_usage_html",code:So,lang:"html"},{name:"list_focusable_html",code:wo,lang:"html"}],J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});const Co=`
<template>
  <v-graph-canvas>
    <template #node>
      <v-graph-circle-node :id="1" :x="100" :y="100" title="s">
        <template #port>
          <v-graph-port id="start_port" />
        </template>
      </v-graph-circle-node>
      <v-graph-circle-node :id="3" :x="650" :y="100" title="e">
        <template #port>
          <v-graph-port id="end_port" />
        </template>
      </v-graph-circle-node>
      <v-graph-node :id="2" :x="300" :y="10" title="Simple Node">
        <template #header-left-icon>
          <v-icon-doc-text />
        </template>
        <template #header-right-icon>
          <v-icon-script />
        </template>
        <template #left>
          <v-graph-port id="in_port" direction="left">
            in port
          </v-graph-port>
        </template>
        <template #right>
          <v-graph-port id="out_port" direction="right">
            out port
          </v-graph-port>
        </template>
      </v-graph-node>
    </template>
    <template #connection>
      <v-graph-connection
        :from="{ nodeId: 1, portId: 'start_port' }"
        :to="{ nodeId: 2, portId: 'in_port' }"
      />
      <v-graph-connection
        :from="{ nodeId: 2, portId: 'out_port' }"
        :to="{ nodeId: 3, portId: 'end_port' }"
      />
    </template>
  </v-graph-canvas>
</template>
`;var Oo=[{name:"node_graph_basic_usage_html",code:Co,lang:"html"}],X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oo});const To=`
<template>
  <div class="scrollbar" style="height: 260px; overflow: auto">
    <v-layout gutter wrap>
      <div v-for="item in 10" :key="item" class="demo-cube demo-cube-num demo-cube-h14">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`,Io=`
<template>
  <div class="scrollbar" style="height: 70px; overflow: auto">
    <v-layout gutter>
      <div v-for="item in 20" :key="item" class="demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`;var zo=[{name:"scrollbar_basic_usage_html",code:To,lang:"html"},{name:"scrollbar_horizontal_scroll_html",code:Io,lang:"html"}],Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zo});const Eo=`
<template>
  <v-select-box v-model="value" :items="options" />
</template>

<script>
  import { ref, reactive } from 'vue';

  export default {
    setup() {
      const value = ref("Option 1");
      const options = reactive([
        {
          text: "Option 1",
          value: "Option 1"
        },
        {
          text: "Option 2",
          value: "Option 2"
        },
        {
          text: "Option 3",
          value: "Option 3"
        },
        {
          text: "Option 4",
          value: "Option 4"
        },
        {
          text: "Option 5",
          value: "Option 5"
        }
      ]);

      return {
        options,
        value
      };
    }
  }
<\/script>
`,Vo=`
<template>
  <v-select-box v-model="value" :items="options" disabled />
</template>

<script>
  import { ref, reactive } from 'vue';

  export default {
    setup() {
      const value = ref("Option 1");
      const options = reactive([
        {
          text: "Option 1",
          value: "Option 1"
        },
        {
          text: "Option 2",
          value: "Option 2"
        },
        {
          text: "Option 3",
          value: "Option 3"
        },
        {
          text: "Option 4",
          value: "Option 4"
        },
        {
          text: "Option 5",
          value: "Option 5"
        }
      ]);

      return {
        options,
        value
      };
    }
  }
<\/script>
`;var Bo=[{name:"selectbox_basic_usage_html",code:Eo,lang:"html"},{name:"selectbox_disabled_usage_html",code:Vo,lang:"html"}],Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bo});const Mo=`
<template>
  <v-layout h-full w-full>
    <v-layout not-shrink class="demo-cube-w52">
      <v-sidebar w-full h-full />
    </v-layout>
    <v-layout all-distr h-full>
      <div class="demo-cube demo-cube-a" />
    </v-layout>
  </v-layout>
</template>
`,Lo=`
<template>
  <v-layout h-full w-full>
    <v-layout not-shrink class="demo-cube-w52">
      <v-sidebar w-full h-full>
        <v-content w-full h-full scroll>
          <v-sidebar-section title="Section A">
            <div class="demo-cube demo-cube-a demo-cube-h14" />
          </v-sidebar-section>
          <v-sidebar-section title="Section B">
            <div class="demo-cube demo-cube-b demo-cube-h14" />
          </v-sidebar-section>
          <v-sidebar-section title="Section C" :bottom-border="false">
            <div class="demo-cube demo-cube-c demo-cube-h14" />
          </v-sidebar-section>
        </v-content>
      </v-sidebar>
    </v-layout>
    <v-layout all-distr h-full>
      <div class="demo-cube demo-cube-d" />
    </v-layout>
  </v-layout>
</template>
`;var Uo=[{name:"sidebar_basic_usage_html",code:Mo,lang:"html"},{name:"sidebar_section_html",code:Lo,lang:"html"}],ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Uo});const Do=`
<template>
  <v-layout>
    <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14" />
    <v-space />
    <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14" />
    <v-space />
    <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14" />
    <v-space />
    <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14" />
  </v-layout>
</template>
`;var Ao=[{name:"space_basic_usage_html",code:Do,lang:"html"}],oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ao});const qo=`
<template>
  <v-split-view :snap-offset="30">
    <v-split-pane size="200px" :min-size="40">
      <div class="demo-cube demo-cube-a" />
    </v-split-pane>
    <v-split-pane :min-size="150">
      <div class="demo-cube demo-cube-b" />
    </v-split-pane>
    <v-split-pane size="20%">
      <div class="demo-cube demo-cube-c" />
    </v-split-pane>
  </v-split-view>
</template>
`,Fo=`
<template>
  <v-split-view horizontal :snap-offset="30">
    <v-split-pane>
      <div class="demo-cube demo-cube-a" />
    </v-split-pane>
    <v-split-pane>
      <div class="demo-cube demo-cube-b" />
    </v-split-pane>
    <v-split-pane>
      <div class="demo-cube demo-cube-c" />
    </v-split-pane>
  </v-split-view>
</template>
`;var Ro=[{name:"splitview_basic_usage_html",code:qo,lang:"html"},{name:"splitview_horizontal_usage_html",code:Fo,lang:"html"}],te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro});const No=`
<template>
  <v-layout gutter>
    <v-button @click="suggestOpen = !suggestOpen">Toggle Suggest</v-button>
    <v-input v-model="queryText" placeholder="Enter your text" id="input-1" />
    <v-suggest
      v-model:visible="suggestOpen"
      anchor="input-1"
      :anchor-constraint="false"
      :search-query="queryText"
      :data-source="fetchData"
      action-on-parent-scrolling="update"
      loading-message="Loading..."
      empty-result-message="No suggestions."
      :max-item-count="20"
      clear-on-invisible
      @error="onError"
      @select="onSuggestionSelected"
    />
  </v-layout>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const suggestOpen = ref(false);
      const queryText = ref("");
      const suggestionItems = ref([
        {
          text: "Vue.js"
        },
        {
          text: "React"
        },
        {
          text: "Angular"
        },
        {
          text: "Ember.js"
        },
        {
          text: "Meteor"
        },
        {
          text: "Polymer"
        },
        {
          text: "Backbone.js"
        }
      ]);

      const searchData = (query) => {
        return query
          ? suggestionItems.value.filter((item) =>
              item.text.toLowerCase().includes(query.toLowerCase())
            )
          : suggestionItems.value;
      };

      const fetchData = (query, requestId, token) => {
        return new Promise((resolve) => {
          const timer = setTimeout(() => {
            resolve(searchData(query));
          }, 100);

          token.onCancellationRequested(() => {
            clearTimeout(timer);
            resolve();
          });
        });
      };

      const onError = () => {};
      const onSuggestionSelected = (item) => {
        queryText.value = item.text;
        suggestOpen.value = false;
      };

      return {
        suggestOpen,
        queryText,
        fetchData,
        onError,
        onSuggestionSelected
      };
    }
  }
<\/script>
`;var Po=[{name:"suggest_basic_usage_html",code:No,lang:"html"}],ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Po});const Wo=`
<template>
  <v-tabs v-model="selectedTab">
    <v-tab icon-color="#B69E24" modified>
      File 1.txt
      <template #icon>
        <v-icon-book />
      </template>
    </v-tab>
    <v-tab>
      File 2.txt
      <template #icon>
        <v-icon-book />
      </template>
    </v-tab>
    <v-tab icon-color="#B69E24">
      File 3.txt
      <template #icon>
        <v-icon-book />
      </template>
    </v-tab>
    <v-tab>
      File 4.txt
      <template #icon>
        <v-icon-book />
      </template>
    </v-tab>
    <v-tab>
      File 5.txt
      <template #icon>
        <v-icon-book />
      </template>
    </v-tab>
    <v-tab icon-color="#B69E24">
      File 6.txt
      <template #icon>
        <v-icon-book />
      </template>
    </v-tab>
  </v-tabs>
</template>
`;var Go=[{name:"tabs_basic_usage_html",code:Wo,lang:"html"}],le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Go});const Ho=`
<template>
  <v-treeview :items="items" />
</template>

<script>
  import { reactive } from 'vue'

  export default {
    setup() {
      const items = reactive([
        {
          id: 1,
          name: "Root folder",
          expanded: true,
          selected: false,
          children: [
            {
              id: 2,
              name: "Folder 1",
              expanded: false,
              selected: false,
              icon: "v-icon-folder",
              children: [
                {
                  id: 3,
                  name: "File 1",
                  icon: "v-icon-doc-text",
                  expanded: false,
                  selected: false
                },
                {
                  id: 4,
                  name: "File 2",
                  icon: "v-icon-doc-text",
                  expanded: false,
                  selected: false
                }
              ]
            },
            {
              id: 5,
              name: "File 3",
              icon: "v-icon-doc-text",
              expanded: false,
              selected: false
            },
            {
              id: 6,
              name: "Folder 2",
              icon: "v-icon-folder",
              expanded: false,
              selected: false,
              children: []
            }
          ]
        }
      ]);

      return {
        items
      };
    }
  }
<\/script>
`;var Ko=[{name:"treeview_basic_usage_html",code:Ho,lang:"html"}],ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ko});const Qo={"./component-action-bar.js":D,"./component-autocomplete.js":A,"./component-button.js":q,"./component-checkbox.js":F,"./component-content.js":R,"./component-dropdown.js":N,"./component-fieldset.js":P,"./component-icon.js":W,"./component-input.js":G,"./component-installation.js":H,"./component-label.js":K,"./component-layout.js":Q,"./component-list.js":J,"./component-node-graph.js":X,"./component-scrollbar.js":Y,"./component-selectbox.js":Z,"./component-sidebar.js":ee,"./component-space.js":oe,"./component-splitview.js":te,"./component-suggest.js":ne,"./component-tabs.js":le,"./component-treeview.js":ce},C=[];for(const[,_]of Object.entries(Qo))C.push.apply(C,_.default);var Jo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const Xo={name:"demo-code",props:{lang:{type:String,default:null},code:{type:String,default:null},name:{type:String,default:null}},setup(_){const{lang:s,code:u,name:l}=pe(_),i=O(()=>C.find(a=>a.name===l.value)),r=O(()=>{var a;return u.value||((a=i.value)==null?void 0:a.code.trim())}),c=O(()=>{var a;return s.value||((a=i.value)==null?void 0:a.lang)});return{content:r,language:c}}};function Yo(_,s,u,l,i,r){const c=n("highlightjs");return l.content?(b(),V(c,{key:0,autodetect:!1,language:l.language,code:l.content},null,8,["language","code"])):ve("",!0)}var Zo=g(Xo,[["render",Yo]]),et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zo});const ot={name:"demo-component-action-bar",setup(){return{onClick:()=>{}}}},tt=t("h2",null,"ActionBar",-1),nt=t("h3",null,"Basic Usage",-1),lt=t("h3",null,"Disabled Action",-1),ct=t("h3",null,"Grouping Action",-1),at=t("span",{class:"codicon codicon-play"},null,-1),st=t("span",{class:"codicon codicon-stop"},null,-1),dt=t("span",{class:"codicon codicon-plus"},null,-1),it=t("span",{class:"codicon codicon-zoom-in"},null,-1),_t=t("span",{class:"codicon codicon-zoom-out"},null,-1);function ut(_,s,u,l,i,r){const c=n("v-icon-play"),a=n("v-action"),d=n("v-icon-stop"),m=n("v-icon-plus"),p=n("v-icon-folder"),v=n("v-action-bar"),x=n("demo-code"),$=n("demo-block"),S=n("v-action-group");return b(),f(y,null,[tt,nt,e($,null,{code:o(()=>[e(x,{name:"actionbar_basic_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[e(c)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(m)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(p)]),_:1},8,["onClick"])]),_:1})]),_:1}),lt,e($,null,{code:o(()=>[e(x,{name:"actionbar_disabled_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[e(c)]),_:1},8,["onClick"]),e(a,{disabled:"",onClick:l.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"])]),_:1})]),_:1}),ct,e($,null,{code:o(()=>[e(x,{name:"actionbar_grouping_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(S,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[at]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[st]),_:1},8,["onClick"])]),_:1}),e(a,{onClick:l.onClick},{default:o(()=>[dt]),_:1},8,["onClick"]),e(S,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[it]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[_t]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var mt=g(ot,[["render",ut]]),rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const pt={name:"demo-component-autocomplete",setup(){const _=k(""),s=k([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),u=i=>i?s.value.filter(r=>r.text.toLowerCase().includes(i.toLowerCase())):s.value;return{value:_,fetchAutocompleteData:(i,r,c)=>new Promise(a=>{const d=setTimeout(()=>{a(u(i))},100);c.onCancellationRequested(()=>{clearTimeout(d),a()})}),onClick:()=>{}}}},vt=t("h2",null,"Autocomplete",-1),bt=t("h3",null,"Basic Usage",-1),ht=t("h3",null,"Disabled Autocomplete",-1),ft=t("h3",null,"Autocomplete With Icon",-1),gt=t("span",{class:"codicon codicon-file-code"},null,-1);function yt(_,s,u,l,i,r){const c=n("v-autocomplete"),a=n("demo-code"),d=n("demo-block");return b(),f(y,null,[vt,bt,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_basic_usage_html"})]),default:o(()=>[e(c,{placeholder:"Enter your text",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=m=>l.value=m),"data-source":l.fetchAutocompleteData,"loading-message":"Loading...","empty-result-message":"No matching results."},null,8,["modelValue","data-source"])]),_:1}),ht,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_disabled_usage_html"})]),default:o(()=>[e(c,{placeholder:"Enter your text",disabled:""})]),_:1}),ft,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_with_icon_usage_html"})]),default:o(()=>[e(c,{placeholder:"Enter your text","icon-clickable":"",onIconClick:l.onClick},{icon:o(()=>[gt]),_:1},8,["onIconClick"])]),_:1})],64)}var kt=g(pt,[["render",yt]]),xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt});const $t={name:"demo-component-button"},St=t("h2",null,"Button",-1),wt=t("p",null,"Simple button.",-1),jt=t("h3",null,"Basic Usage",-1),Ct=h("Default"),Ot=h("Secondary"),Tt=t("h3",null,"Disabled Button",-1),It=h("Default"),zt=h("Secondary");function Et(_,s,u,l,i,r){const c=n("v-button"),a=n("v-layout"),d=n("demo-code"),m=n("demo-block");return b(),f(y,null,[St,wt,jt,e(m,null,{code:o(()=>[e(d,{name:"button_basic_usage_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(c,null,{default:o(()=>[Ct]),_:1}),e(c,{secondary:""},{default:o(()=>[Ot]),_:1})]),_:1})]),_:1}),Tt,e(m,null,{code:o(()=>[e(d,{name:"button_disabled_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(c,{disabled:""},{default:o(()=>[It]),_:1}),e(c,{disabled:"",secondary:""},{default:o(()=>[zt]),_:1})]),_:1})]),_:1})],64)}var Vt=g($t,[["render",Et]]),Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vt});const Mt={name:"demo-component-checkbox",setup(){const _=k(!0),s=k(!1),u=k(!0),l=k(!1);return{checked:_,unchecked:s,disabledChecked:u,disabledUnchecked:l}}},Lt=t("h2",null,"Checkbox",-1),Ut=t("h3",null,"Basic Usage",-1),Dt=h("Checked"),At=h("Unchecked"),qt=t("h3",null,"Disabled State",-1),Ft=h("Checked"),Rt=h("Unchecked");function Nt(_,s,u,l,i,r){const c=n("v-checkbox"),a=n("v-label"),d=n("v-layout"),m=n("demo-code"),p=n("demo-block");return b(),f(y,null,[Lt,Ut,e(p,null,{code:o(()=>[e(m,{name:"checkbox_basic_usage_html"})]),default:o(()=>[e(d,{gutter:"",wrap:""},{default:o(()=>[e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(c,{id:"checkbox_1",modelValue:l.checked,"onUpdate:modelValue":s[0]||(s[0]=v=>l.checked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_1"},{default:o(()=>[Dt]),_:1})]),_:1}),e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(c,{id:"checkbox_2",modelValue:l.unchecked,"onUpdate:modelValue":s[1]||(s[1]=v=>l.unchecked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_2"},{default:o(()=>[At]),_:1})]),_:1})]),_:1})]),_:1}),qt,e(p,null,{code:o(()=>[e(m,{name:"checkbox_disabled_html"})]),default:o(()=>[e(d,{gutter:"",wrap:""},{default:o(()=>[e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(c,{id:"checkbox_3",modelValue:l.disabledChecked,"onUpdate:modelValue":s[2]||(s[2]=v=>l.disabledChecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_3"},{default:o(()=>[Ft]),_:1})]),_:1}),e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(c,{id:"checkbox_4",modelValue:l.disabledUnchecked,"onUpdate:modelValue":s[3]||(s[3]=v=>l.disabledUnchecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_4"},{default:o(()=>[Rt]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Pt=g(Mt,[["render",Nt]]),Wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pt});const Gt={name:"demo-component-content"},Ht=t("h2",null,"Content",-1),Kt=t("h3",null,"Basic Usage",-1),Qt={class:"demo-cube demo-cube-h52"},Jt=t("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Xt=t("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),Yt=t("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),Zt=t("div",{class:"demo-cube demo-cube-d demo-cube-h14"},null,-1);function en(_,s,u,l,i,r){const c=n("v-content"),a=n("demo-code"),d=n("demo-block");return b(),f(y,null,[Ht,Kt,e(d,null,{code:o(()=>[e(a,{name:"content_basic_usage_html"})]),default:o(()=>[t("div",Qt,[e(c,{"h-full":"",scroll:"",padding:"md"},{default:o(()=>[Jt,Xt,Yt,Zt]),_:1})])]),_:1})],64)}var on=g(Gt,[["render",en]]),tn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:on});const nn={name:"demo-component-dropdown",setup(){return{dropdownOpen:k(!1),items:k([{id:1,text:"Item 1",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:2,text:"Item 2",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:3,text:"Item 3",icon:"v-icon-doc-text",iconColor:"#B69E24"}])}}},ln=t("h2",null,"Dropdown",-1),cn=t("h3",null,"Basic Usage",-1),an=h(" Toggle Dropdown ");function sn(_,s,u,l,i,r){const c=n("v-button"),a=n("v-list"),d=n("v-content"),m=n("v-dropdown"),p=n("demo-code"),v=n("demo-block");return b(),f(y,null,[ln,cn,e(v,null,{code:o(()=>[e(p,{name:"dropdown_basic_usage_html"})]),default:o(()=>[e(c,{id:"button-1",onClick:s[0]||(s[0]=x=>l.dropdownOpen=!l.dropdownOpen)},{default:o(()=>[an]),_:1}),e(m,{visible:l.dropdownOpen,"onUpdate:visible":s[2]||(s[2]=x=>l.dropdownOpen=x),anchor:"button-1","anchor-constraint":"","offset-y":4},{default:o(()=>[e(d,{fill:""},{default:o(()=>[e(a,{items:l.items,"onUpdate:selected":s[1]||(s[1]=x=>l.dropdownOpen=!1)},null,8,["items"])]),_:1})]),_:1},8,["visible"])]),_:1})],64)}var dn=g(nn,[["render",sn]]),_n=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dn});const un={name:"demo-component-fieldset"},mn=t("h2",null,"Fieldset",-1),rn=t("h3",null,"Basic Usage",-1),pn=h("Label 1"),vn=h("Label 2"),bn=t("h3",null,"Vertical Layout",-1),hn=h("Label 1"),fn=h("Label 2");function gn(_,s,u,l,i,r){const c=n("v-label"),a=n("v-input"),d=n("v-field-layout"),m=n("v-fieldset"),p=n("demo-code"),v=n("demo-block");return b(),f(y,null,[mn,rn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(p,{name:"fieldset_basic_usage_html"})]),default:o(()=>[e(m,{label:"Title"},{default:o(()=>[e(d,null,{label:o(()=>[e(c,{truncate:""},{default:o(()=>[pn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(d,null,{label:o(()=>[e(c,{truncate:""},{default:o(()=>[vn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),bn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(p,{name:"fieldset_vertical_layout_html"})]),default:o(()=>[e(m,{label:"Title"},{default:o(()=>[e(d,{vertical:""},{label:o(()=>[e(c,{truncate:""},{default:o(()=>[hn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(d,{vertical:""},{label:o(()=>[e(c,{truncate:""},{default:o(()=>[fn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1})],64)}var yn=g(un,[["render",gn]]),kn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yn});const xn={name:"demo-component-space"},$n=t("h2",null,"Icon",-1),Sn=t("p",null,"Library provides some svg icons.",-1),wn=t("h3",null,"Built-in Icons",-1),jn=t("h3",null,"Codicons",-1),Cn=t("p",null,[h(" The "),t("a",{href:"https://github.com/microsoft/vscode-codicons",class:"demo-external-link",target:"_blank"},"Codicon library"),h(" contains all the icons used in VS Code. "),t("a",{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",class:"demo-external-link",target:"_blank"},"All list of icons"),h(". ")],-1),On=t("i",{class:"codicon codicon-account"},null,-1),Tn=t("i",{class:"codicon codicon-activate-breakpoints"},null,-1),In=t("i",{class:"codicon codicon-add"},null,-1),zn=t("i",{class:"codicon codicon-alert"},null,-1),En=t("i",{class:"codicon codicon-archive"},null,-1),Vn=t("i",{class:"codicon codicon-array"},null,-1);function Bn(_,s,u,l,i,r){const c=n("v-icon-book"),a=n("v-icon-checkmark"),d=n("v-icon-chevron-down"),m=n("v-icon-circle"),p=n("v-icon-close"),v=n("v-icon-doc-text"),x=n("v-icon-file-menu"),$=n("v-icon-folder"),S=n("v-icon-play"),ae=n("v-icon-stop"),se=n("v-icon-plus-bold"),de=n("v-icon-plus"),ie=n("v-icon-script"),_e=n("v-icon-sidebar-left"),ue=n("v-icon-sidebar-right"),I=n("v-layout"),z=n("demo-code"),E=n("demo-block");return b(),f(y,null,[$n,Sn,wn,e(E,null,{code:o(()=>[e(z,{name:"icon_basic_usage_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[e(c),e(a),e(d),e(m),e(p),e(v),e(x),e($),e(S),e(ae),e(se),e(de),e(ie),e(_e),e(ue)]),_:1})]),_:1}),jn,Cn,e(E,null,{code:o(()=>[e(z,{name:"codicons_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[On,Tn,In,zn,En,Vn]),_:1})]),_:1})],64)}var Mn=g(xn,[["render",Bn]]),Ln=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mn});const Un={name:"demo-component-button",setup(){const _=k(""),s=k(""),u=k("");return{input:_,disabledInput:s,inputWithIcon:u}}},Dn=t("h2",null,"Input",-1),An=t("h3",null,"Basic Usage",-1),qn=t("h3",null,"Disabled Input",-1),Fn=t("h3",null,"Input with icon",-1),Rn=t("i",{class:"codicon codicon-file-add"},null,-1);function Nn(_,s,u,l,i,r){const c=n("v-input"),a=n("demo-code"),d=n("demo-block"),m=n("v-icon-file-menu");return b(),f(y,null,[Dn,An,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_basic_usage_html"})]),default:o(()=>[e(c,{modelValue:l.input,"onUpdate:modelValue":s[0]||(s[0]=p=>l.input=p),placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),qn,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_disabled_html"})]),default:o(()=>[e(c,{modelValue:l.disabledInput,"onUpdate:modelValue":s[1]||(s[1]=p=>l.disabledInput=p),disabled:"",placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),Fn,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_with_icon_html"})]),default:o(()=>[e(c,{modelValue:l.inputWithIcon,"onUpdate:modelValue":s[2]||(s[2]=p=>l.inputWithIcon=p),placeholder:"Enter your text"},{icon:o(()=>[e(m)]),_:1},8,["modelValue"]),e(c,{modelValue:l.inputWithIcon,"onUpdate:modelValue":s[3]||(s[3]=p=>l.inputWithIcon=p),placeholder:"Enter your text"},{icon:o(()=>[Rn]),_:1},8,["modelValue"])]),_:1})],64)}var Pn=g(Un,[["render",Nn]]),Wn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pn});const Gn={name:"demo-component-installation"},Hn=t("h2",null,"Installation",-1),Kn=t("h3",null,"npm",-1),Qn=t("p",null,"Add codicons (optional)",-1),Jn=t("p",null,"In your code",-1),Xn=t("h3",null,"Usage",-1),Yn=t("p",null,"In your templates",-1);function Zn(_,s,u,l,i,r){const c=n("demo-code");return b(),f(y,null,[Hn,Kn,e(c,{lang:"shell",code:"npm install @ruleenginejs/ruleengine-ui"}),Qn,e(c,{lang:"shell",code:"npm install @vscode/codicons"}),Jn,e(c,{lang:"javascript",code:'import "@vscode/codicons/dist/codicon.css"'}),Xn,e(c,{name:"installation_usage_js"}),Yn,e(c,{name:"installation_usage_html"})],64)}var el=g(Gn,[["render",Zn]]),ol=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:el});const tl={name:"demo-component-label",setup(){return{value:k(!1)}}},nl=t("h2",null,"Label",-1),ll=t("h3",null,"Basic Usage",-1),cl=h("Label 1"),al=h("Label 2");function sl(_,s,u,l,i,r){const c=n("v-label"),a=n("v-input"),d=n("v-field-layout"),m=n("v-checkbox"),p=n("v-fieldset"),v=n("demo-code"),x=n("demo-block");return b(),f(y,null,[nl,ll,e(x,{class:"demo-label-block"},{code:o(()=>[e(v,{name:"label_basic_usage_html"})]),default:o(()=>[e(p,null,{default:o(()=>[e(d,null,{label:o(()=>[e(c,{truncate:"",for:"input1"},{default:o(()=>[cl]),_:1})]),value:o(()=>[e(a,{id:"input1",placeholder:"Enter your text"})]),_:1}),e(d,null,{label:o(()=>[e(c,{truncate:"",for:"checkbox1"},{default:o(()=>[al]),_:1})]),value:o(()=>[e(m,{id:"checkbox1",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=$=>l.value=$)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)}var dl=g(tl,[["render",sl]]),il=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dl});const _l={name:"demo-component-layout"},ul=t("h2",null,"Layout",-1),ml=t("p",null,"Quickly create layouts with no styling on flex.",-1),rl=t("h3",null,"Basic layout",-1),pl={class:"demo-cube demo-cube-h60"},vl=t("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),bl=t("div",{class:"demo-cube demo-cube-b demo-cube-w52"},null,-1),hl=t("div",{class:"demo-cube demo-cube-c"},null,-1);function fl(_,s,u,l,i,r){const c=n("v-layout"),a=n("demo-code"),d=n("demo-block");return b(),f(y,null,[ul,ml,rl,e(d,null,{code:o(()=>[e(a,{name:"layout_basic_html"})]),default:o(()=>[t("div",pl,[e(c,{"h-full":"","w-full":"",vertical:""},{default:o(()=>[e(c,{"not-shrink":""},{default:o(()=>[vl]),_:1}),e(c,{"all-distr":"","h-full":""},{default:o(()=>[e(c,{"h-full":"","not-shrink":""},{default:o(()=>[bl]),_:1}),e(c,{"h-full":"","all-distr":""},{default:o(()=>[hl]),_:1})]),_:1})]),_:1})])]),_:1})],64)}var gl=g(_l,[["render",fl]]),yl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gl});const kl={name:"demo-component-list",setup(){const _=T([]),s=k({id:1}),u=k({id:1});for(let l=0;l<15;l++)_.push({id:l+1,text:`Item ${l+1}`,icon:"v-icon-doc-text"});return{items:_,selectedItem:s,focusableSelectedItem:u}}},xl=t("h2",null,"List",-1),$l=t("p",null,"Display a set of data with flat list.",-1),Sl=t("h3",null,"Basic Usage",-1),wl={class:"demo-cube demo-cube-h52"},jl=t("h3",null,"Focusable",-1),Cl={class:"demo-cube demo-cube-h52"};function Ol(_,s,u,l,i,r){const c=n("v-list"),a=n("v-content"),d=n("demo-code"),m=n("demo-block");return b(),f(y,null,[xl,$l,Sl,e(m,null,{code:o(()=>[e(d,{name:"list_basic_usage_html"})]),default:o(()=>[t("div",wl,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(c,{items:l.items,selected:l.selectedItem,"onUpdate:selected":s[0]||(s[0]=p=>l.selectedItem=p)},null,8,["items","selected"])]),_:1})])]),_:1}),jl,e(m,null,{code:o(()=>[e(d,{name:"list_focusable_html"})]),default:o(()=>[t("div",Cl,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(c,{"tab-index":0,items:l.items,selected:l.focusableSelectedItem,"onUpdate:selected":s[1]||(s[1]=p=>l.focusableSelectedItem=p)},null,8,["items","selected"])]),_:1})])]),_:1})],64)}var Tl=g(kl,[["render",Ol]]),Il=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tl});const zl={name:"demo-component-node-graph"},El=t("h2",null,"Node Graph",-1),Vl=t("p",null,"Graph of nodes connected via ports using connectors.",-1),Bl=t("h3",null,"Basic Usage",-1),Ml={class:"demo-cube demo-cube-h60"},Ll=h(" in port "),Ul=h(" out port ");function Dl(_,s,u,l,i,r){const c=n("v-graph-port"),a=n("v-graph-circle-node"),d=n("v-icon-doc-text"),m=n("v-icon-script"),p=n("v-graph-node"),v=n("v-graph-connection"),x=n("v-graph-canvas"),$=n("demo-code"),S=n("demo-block");return b(),f(y,null,[El,Vl,Bl,e(S,null,{code:o(()=>[e($,{name:"node_graph_basic_usage_html"})]),default:o(()=>[t("div",Ml,[e(x,null,{node:o(()=>[e(a,{id:1,x:100,y:100,title:"s"},{port:o(()=>[e(c,{id:"start_port"})]),_:1}),e(a,{id:3,x:650,y:100,title:"e"},{port:o(()=>[e(c,{id:"end_port"})]),_:1}),e(p,{id:2,x:300,y:10,title:"Simple Node"},{"header-left-icon":o(()=>[e(d)]),"header-right-icon":o(()=>[e(m)]),left:o(()=>[e(c,{id:"in_port",direction:"left"},{default:o(()=>[Ll]),_:1})]),right:o(()=>[e(c,{id:"out_port",direction:"right"},{default:o(()=>[Ul]),_:1})]),_:1})]),connection:o(()=>[e(v,{from:{nodeId:1,portId:"start_port"},to:{nodeId:2,portId:"in_port"}}),e(v,{from:{nodeId:2,portId:"out_port"},to:{nodeId:3,portId:"end_port"}})]),_:1})])]),_:1})],64)}var Al=g(zl,[["render",Dl]]),ql=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Al});const Fl={name:"demo-component-scrollbar"},Rl=t("h2",null,"Scrollbar",-1),Nl=t("h3",null,"Basic Usage",-1),Pl={class:"scrollbar",style:{height:"260px",overflow:"auto"}},Wl=t("h3",null,"Horizontal Scroll",-1),Gl={class:"scrollbar",style:{height:"70px",overflow:"auto"}};function Hl(_,s,u,l,i,r){const c=n("v-layout"),a=n("demo-code"),d=n("demo-block");return b(),f(y,null,[Rl,Nl,e(d,null,{code:o(()=>[e(a,{name:"scrollbar_basic_usage_html"})]),default:o(()=>[t("div",Pl,[e(c,{gutter:"",wrap:""},{default:o(()=>[(b(),f(y,null,M(10,m=>t("div",{key:m,class:"demo-cube demo-cube-num demo-cube-h14"},L(m),1)),64))]),_:1})])]),_:1}),Wl,e(d,null,{code:o(()=>[e(a,{name:"scrollbar_horizontal_scroll_html"})]),default:o(()=>[t("div",Gl,[e(c,{gutter:""},{default:o(()=>[(b(),f(y,null,M(20,m=>t("div",{key:m,class:"demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink"},L(m),1)),64))]),_:1})])]),_:1})],64)}var Kl=g(Fl,[["render",Hl]]),Ql=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kl});const Jl={name:"demo-component-selectbox",setup(){const _=k("Option 1"),s=T([{text:"Option 1",value:"Option 1"},{text:"Option 2",value:"Option 2"},{text:"Option 3",value:"Option 3"},{text:"Option 4",value:"Option 4"},{text:"Option 5",value:"Option 5"}]),u=k("Option 1");return{options:s,value:_,disabledValue:u}}},Xl=t("h2",null,"SelectBox",-1),Yl=t("h3",null,"Basic Usage",-1),Zl=t("h3",null,"Disabled Select",-1);function ec(_,s,u,l,i,r){const c=n("v-select-box"),a=n("demo-code"),d=n("demo-block");return b(),f(y,null,[Xl,Yl,e(d,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_basic_usage_html"})]),default:o(()=>[e(c,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=m=>l.value=m),items:l.options},null,8,["modelValue","items"])]),_:1}),Zl,e(d,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_disabled_usage_html"})]),default:o(()=>[e(c,{modelValue:l.disabledValue,"onUpdate:modelValue":s[1]||(s[1]=m=>l.disabledValue=m),items:l.options,disabled:""},null,8,["modelValue","items"])]),_:1})],64)}var oc=g(Jl,[["render",ec]]),tc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oc});const nc={name:"demo-component-sidebar"},lc=t("h2",null,"Sidebar",-1),cc=t("h3",null,"Basic Usage",-1),ac={class:"demo-cube demo-cube-h60"},sc=t("div",{class:"demo-cube demo-cube-a"},null,-1),dc=t("h3",null,"Sidebar Section",-1),ic={class:"demo-cube demo-cube-h60"},_c=t("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),uc=t("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),mc=t("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),rc=t("div",{class:"demo-cube demo-cube-d"},null,-1);function pc(_,s,u,l,i,r){const c=n("v-sidebar"),a=n("v-layout"),d=n("demo-code"),m=n("demo-block"),p=n("v-sidebar-section"),v=n("v-content");return b(),f(y,null,[lc,cc,e(m,null,{code:o(()=>[e(d,{name:"sidebar_basic_usage_html"})]),default:o(()=>[t("div",ac,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(c,{"w-full":"","h-full":""})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[sc]),_:1})]),_:1})])]),_:1}),dc,e(m,null,{code:o(()=>[e(d,{name:"sidebar_section_html"})]),default:o(()=>[t("div",ic,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(c,{"w-full":"","h-full":"","lt-border":"","rt-border":""},{default:o(()=>[e(v,{"w-full":"","h-full":"",scroll:""},{default:o(()=>[e(p,{title:"Section A"},{default:o(()=>[_c]),_:1}),e(p,{title:"Section B"},{default:o(()=>[uc]),_:1}),e(p,{title:"Section C","bottom-border":!1},{default:o(()=>[mc]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[rc]),_:1})]),_:1})])]),_:1})],64)}var vc=g(nc,[["render",pc]]),bc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vc});const hc={name:"demo-component-space"},fc=t("h2",null,"Space",-1),gc=t("p",null,"Space between two elements.",-1),yc=t("h3",null,"Basic Usage",-1),kc=t("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),xc=t("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),$c=t("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),Sc=t("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1);function wc(_,s,u,l,i,r){const c=n("v-space"),a=n("v-layout"),d=n("demo-code"),m=n("demo-block");return b(),f(y,null,[fc,gc,yc,e(m,null,{code:o(()=>[e(d,{name:"space_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[kc,e(c),xc,e(c),$c,e(c),Sc]),_:1})]),_:1})],64)}var jc=g(hc,[["render",wc]]),Cc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jc});const Oc={name:"demo-component-splitview"},Tc=t("h2",null,"SplitView",-1),Ic=t("h3",null,"Basic Usage",-1),zc={class:"demo-cube demo-cube-h60"},Ec=t("div",{class:"demo-cube demo-cube-a"},null,-1),Vc=t("div",{class:"demo-cube demo-cube-b"},null,-1),Bc=t("div",{class:"demo-cube demo-cube-c"},null,-1),Mc=t("h3",null,"Horizontal SplitView",-1),Lc={class:"demo-cube demo-cube-h60"},Uc=t("div",{class:"demo-cube demo-cube-a"},null,-1),Dc=t("div",{class:"demo-cube demo-cube-b"},null,-1),Ac=t("div",{class:"demo-cube demo-cube-c"},null,-1);function qc(_,s,u,l,i,r){const c=n("v-split-pane"),a=n("v-split-view"),d=n("demo-code"),m=n("demo-block");return b(),f(y,null,[Tc,Ic,e(m,null,{code:o(()=>[e(d,{name:"splitview_basic_usage_html"})]),default:o(()=>[t("div",zc,[e(a,{"snap-offset":30},{default:o(()=>[e(c,{size:"200px","min-size":40},{default:o(()=>[Ec]),_:1}),e(c,{"min-size":150},{default:o(()=>[Vc]),_:1}),e(c,{size:"20%"},{default:o(()=>[Bc]),_:1})]),_:1})])]),_:1}),Mc,e(m,null,{code:o(()=>[e(d,{name:"splitview_horizontal_usage_html"})]),default:o(()=>[t("div",Lc,[e(a,{horizontal:"","snap-offset":30},{default:o(()=>[e(c,null,{default:o(()=>[Uc]),_:1}),e(c,null,{default:o(()=>[Dc]),_:1}),e(c,null,{default:o(()=>[Ac]),_:1})]),_:1})])]),_:1})],64)}var Fc=g(Oc,[["render",qc]]),Rc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fc});const Nc={name:"demo-component-suggest",setup(){const _=k(!1),s=k(""),u=k([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),l=a=>a?u.value.filter(d=>d.text.toLowerCase().includes(a.toLowerCase())):u.value;return{suggestOpen:_,queryText:s,fetchData:(a,d,m)=>new Promise(p=>{const v=setTimeout(()=>{p(l(a))},100);m.onCancellationRequested(()=>{clearTimeout(v),p()})}),onError:()=>{},onSuggestionSelected:a=>{s.value=a.text,_.value=!1}}}},Pc=t("h2",null,"Suggest",-1),Wc=t("h3",null,"Basic Usage",-1),Gc=h("Toggle Suggest");function Hc(_,s,u,l,i,r){const c=n("v-button"),a=n("v-input"),d=n("v-suggest"),m=n("v-layout"),p=n("demo-code"),v=n("demo-block");return b(),f(y,null,[Pc,Wc,e(v,{class:"demo-suggest-block"},{code:o(()=>[e(p,{name:"suggest_basic_usage_html"})]),default:o(()=>[e(m,{gutter:""},{default:o(()=>[e(c,{onClick:s[0]||(s[0]=x=>l.suggestOpen=!l.suggestOpen)},{default:o(()=>[Gc]),_:1}),e(a,{modelValue:l.queryText,"onUpdate:modelValue":s[1]||(s[1]=x=>l.queryText=x),placeholder:"Enter your text",id:"input-1"},null,8,["modelValue"]),e(d,{visible:l.suggestOpen,"onUpdate:visible":s[2]||(s[2]=x=>l.suggestOpen=x),anchor:"input-1","anchor-constraint":!1,"search-query":l.queryText,"data-source":l.fetchData,"action-on-parent-scrolling":"update","loading-message":"Loading...","empty-result-message":"No suggestions.","max-item-count":20,"clear-on-invisible":"",onError:l.onError,onSelect:l.onSuggestionSelected},null,8,["visible","search-query","data-source","onError","onSelect"])]),_:1})]),_:1})],64)}var Kc=g(Nc,[["render",Hc]]),Qc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kc});const Jc={name:"demo-component-tabs",setup(){return{selectedTab:k(null)}}},Xc=t("h2",null,"Tabs",-1),Yc=t("h3",null,"Basic Usage",-1),Zc=h(" File 1.txt "),ea=h(" File 2.txt "),oa=h(" File 3.txt "),ta=h(" File 4.txt "),na=h(" File 5.txt "),la=h(" File 6.txt ");function ca(_,s,u,l,i,r){const c=n("v-icon-book"),a=n("v-tab"),d=n("v-tabs"),m=n("demo-code"),p=n("demo-block");return b(),f(y,null,[Xc,Yc,e(p,null,{code:o(()=>[e(m,{name:"tabs_basic_usage_html"})]),default:o(()=>[e(d,{modelValue:l.selectedTab,"onUpdate:modelValue":s[0]||(s[0]=v=>l.selectedTab=v)},{default:o(()=>[e(a,{"icon-color":"#B69E24",modified:""},{icon:o(()=>[e(c)]),default:o(()=>[Zc]),_:1}),e(a,null,{icon:o(()=>[e(c)]),default:o(()=>[ea]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(c)]),default:o(()=>[oa]),_:1}),e(a,null,{icon:o(()=>[e(c)]),default:o(()=>[ta]),_:1}),e(a,null,{icon:o(()=>[e(c)]),default:o(()=>[na]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(c)]),default:o(()=>[la]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var aa=g(Jc,[["render",ca]]),sa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:aa});const da={name:"demo-component-treeview",setup(){return{items:T([{id:1,name:"Root folder",expanded:!0,selected:!1,children:[{id:2,name:"Folder 1",expanded:!1,selected:!1,icon:"v-icon-folder",children:[{id:3,name:"File 1",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:4,name:"File 2",icon:"v-icon-doc-text",expanded:!1,selected:!1}]},{id:5,name:"File 3",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:6,name:"Folder 2",icon:"v-icon-folder",expanded:!1,selected:!1,children:[]}]}])}}},ia=t("h2",null,"Treeview",-1),_a=t("p",null,"Display a set of data with hierarchies.",-1),ua=t("h3",null,"Basic Usage",-1);function ma(_,s,u,l,i,r){const c=n("v-treeview"),a=n("demo-code"),d=n("demo-block");return b(),f(y,null,[ia,_a,ua,e(d,null,{code:o(()=>[e(a,{name:"treeview_basic_usage_html"})]),default:o(()=>[e(c,{items:l.items},null,8,["items"])]),_:1})],64)}var ra=g(da,[["render",ma]]),pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ra});const va={"../components/demo-block.vue":Fe,"../components/demo-code.vue":et,"../components/demo-component-action-bar.vue":rt,"../components/demo-component-autocomplete.vue":xt,"../components/demo-component-button.vue":Bt,"../components/demo-component-checkbox.vue":Wt,"../components/demo-component-content.vue":tn,"../components/demo-component-dropdown.vue":_n,"../components/demo-component-fieldset.vue":kn,"../components/demo-component-icon.vue":Ln,"../components/demo-component-input.vue":Wn,"../components/demo-component-installation.vue":ol,"../components/demo-component-label.vue":il,"../components/demo-component-layout.vue":yl,"../components/demo-component-list.vue":Il,"../components/demo-component-node-graph.vue":ql,"../components/demo-component-scrollbar.vue":Ql,"../components/demo-component-selectbox.vue":tc,"../components/demo-component-sidebar.vue":bc,"../components/demo-component-space.vue":Cc,"../components/demo-component-splitview.vue":Rc,"../components/demo-component-suggest.vue":Qc,"../components/demo-component-tabs.vue":sa,"../components/demo-component-treeview.vue":pa,"../components/demo-codes/component-action-bar.js":D,"../components/demo-codes/component-autocomplete.js":A,"../components/demo-codes/component-button.js":q,"../components/demo-codes/component-checkbox.js":F,"../components/demo-codes/component-content.js":R,"../components/demo-codes/component-dropdown.js":N,"../components/demo-codes/component-fieldset.js":P,"../components/demo-codes/component-icon.js":W,"../components/demo-codes/component-input.js":G,"../components/demo-codes/component-installation.js":H,"../components/demo-codes/component-label.js":K,"../components/demo-codes/component-layout.js":Q,"../components/demo-codes/component-list.js":J,"../components/demo-codes/component-node-graph.js":X,"../components/demo-codes/component-scrollbar.js":Y,"../components/demo-codes/component-selectbox.js":Z,"../components/demo-codes/component-sidebar.js":ee,"../components/demo-codes/component-space.js":oe,"../components/demo-codes/component-splitview.js":te,"../components/demo-codes/component-suggest.js":ne,"../components/demo-codes/component-tabs.js":le,"../components/demo-codes/component-treeview.js":ce,"../components/demo-codes/index.js":Jo};var ba={install:_=>{for(const[s,u]of Object.entries(va)){const l=be(s.split("/").pop().replace(/\.\w+$/,""));_.component(l,u.default||u)}}};const j=he($e);j.use(Be);j.use(fe);j.use(ba);j.use(ge);j.mount("#app");export{g as _};
