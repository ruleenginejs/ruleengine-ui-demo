import{r as c,c as V,o as h,a as ve,b as he,d as f,e as n,f as A,g as e,w as o,t as fe,h as T,i as ge,F as k,j as b,k as y,l as j,m as M,n as L,p as ke,q as ye,s as xe,u as $e}from"./vendor.e7ae9c0e.js";const Ce=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))l(_);new MutationObserver(_=>{for(const r of _)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function m(_){const r={};return _.integrity&&(r.integrity=_.integrity),_.referrerpolicy&&(r.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?r.credentials="include":_.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(_){if(_.ep)return;_.ep=!0;const r=m(_);fetch(_.href,r)}};Ce();var g=(u,i)=>{for(const[m,l]of i)u[m]=l;return u};const Se={name:"App"};function we(u,i,m,l,_,r){const t=c("router-view");return h(),V(t)}var je=g(Se,[["render",we]]);const Oe="modulepreload",B={},Te="/ruleengine-ui-demo/",S=function(i,m){return!m||m.length===0?i():Promise.all(m.map(l=>{if(l=`${Te}${l}`,l in B)return;B[l]=!0;const _=l.endsWith(".css"),r=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const t=document.createElement("link");if(t.rel=_?"stylesheet":Oe,_||(t.as="script",t.crossOrigin=""),t.href=l,document.head.appendChild(t),_)return new Promise((a,s)=>{t.addEventListener("load",a),t.addEventListener("error",s)})})).then(()=>i())},Ie=()=>S(()=>import("./demo-component-layout.72b6f489.js"),["assets/demo-component-layout.72b6f489.js","assets/vendor.e7ae9c0e.js"]),ze=()=>S(()=>import("./demo-component-page.e773febb.js"),["assets/demo-component-page.e773febb.js","assets/vendor.e7ae9c0e.js"]);var Ee=[{path:"component",redirect:"/component/installation",name:"component",component:Ie,children:[{path:":id",name:"component-content",props:!0,component:ze}]}];const Ve=()=>S(()=>import("./demo-layout.14c9b645.js"),["assets/demo-layout.14c9b645.js","assets/demo-header.8373639c.js","assets/vendor.e7ae9c0e.js"]),Ae=()=>S(()=>import("./demo-home.5cdc52d5.js"),["assets/demo-home.5cdc52d5.js","assets/vendor.e7ae9c0e.js"]);var Me=[{path:"/",component:Ve,children:[{path:"",name:"home",component:Ae},...Ee]}];const Le=()=>S(()=>import("./demo-not-found.813693ab.js"),["assets/demo-not-found.813693ab.js","assets/demo-header.8373639c.js","assets/vendor.e7ae9c0e.js"]);var Be=[{path:"/:pathMatch(.*)",name:"not-found",component:Le}];const Ue=ve({history:he(),routes:[...Me,...Be]}),De={name:"demo-block"},Fe={class:"demo-block"},qe={class:"demo-block__source"},Pe={class:"demo-block__code"};function Re(u,i,m,l,_,r){const t=c("v-sidebar-section");return h(),f("div",Fe,[n("div",qe,[A(u.$slots,"default")]),n("div",Pe,[e(t,{"bottom-border":!1,"header-border":!1,title:"Code"},{default:o(()=>[A(u.$slots,"code")]),_:3})])])}var Ne=g(De,[["render",Re]]),We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ne});const He=`
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
`,Ke=`
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
`,Ge=`
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
`;var Qe=[{name:"actionbar_basic_usage_html",code:He,lang:"html"},{name:"actionbar_disabled_action_usage_html",code:Ke,lang:"html"},{name:"actionbar_grouping_action_usage_html",code:Ge,lang:"html"}],U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const Je=`
<template>
  <v-action-list>
    <v-action-item title="Play" icon="play" @click="onClick" />
    <v-action-item title="Stop" icon="debug-stop" @click="onClick" />
    <v-action-item title="Add Item" icon="plus" @click="onClick" />
    <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,Xe=`
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item disabled icon="plus" @click="onClick" />
    <v-action-item disabled icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,Ye=`
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item icon="plus" @click="onClick" />
    <v-action-item icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,Ze=`
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`,eo=`
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`;var oo=[{name:"actionlist_basic_usage_html",code:Je,lang:"html"},{name:"actionlist_disabled_action_usage_html",code:Xe,lang:"html"},{name:"actionlist_vertical_action_list_usage_html",code:Ye,lang:"html"},{name:"actionlist_action_with_label_usage_html",code:Ze,lang:"html"},{name:"actionlist_vertical_action_with_label_usage_html",code:eo,lang:"html"}],D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oo});const to=`
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
`,no=`
<template>
  <v-autocomplete placeholder="Enter your text" disabled />
</template>
`,lo=`
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
`;var co=[{name:"autocomplete_basic_usage_html",code:to,lang:"html"},{name:"autocomplete_disabled_usage_html",code:no,lang:"html"},{name:"autocomplete_with_icon_usage_html",code:lo,lang:"html"}],F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:co});const ao=`
<template>
  <v-layout gutter>
    <v-button>Default</v-button>
    <v-button secondary>Secondary</v-button>
  </v-layout>
</template>
`,io=`
<template>
  <v-layout gutter>
    <v-button disabled>Default</v-button>
    <v-button disabled secondary>Secondary</v-button>
  </v-layout>
</template>
`;var so=[{name:"button_basic_usage_html",code:ao,lang:"html"},{name:"button_disabled_html",code:io,lang:"html"}],q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:so});const _o=`
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
`,uo=`
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
`;var mo=[{name:"checkbox_basic_usage_html",code:_o,lang:"html"},{name:"checkbox_disabled_html",code:uo,lang:"html"}],P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mo});const ro=`
<template>
  <v-content h-full scroll padding="md">
    <div class="demo-cube demo-cube-a demo-cube-h14" />
    <div class="demo-cube demo-cube-b demo-cube-h14" />
    <div class="demo-cube demo-cube-c demo-cube-h14" />
    <div class="demo-cube demo-cube-d demo-cube-h14" />
  </v-content>
</template>
`;var po=[{name:"content_basic_usage_html",code:ro,lang:"html"}],R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:po});const bo=`
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
`;var vo=[{name:"dropdown_basic_usage_html",code:bo,lang:"html"}],N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vo});const ho=`
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
`,fo=`
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
`;var go=[{name:"fieldset_basic_usage_html",code:ho,lang:"html"},{name:"fieldset_vertical_layout_html",code:fo,lang:"html"}],W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:go});const ko=`
<template>
  <div class="demo-cube demo-cube-c demo-cube-h52 demo-cube-relative">
    <v-floating-toolbar :x="10" :y="10">
      <v-action-list>
        <v-action-item icon="add" />
        <v-action-item icon="history" />
        <v-action-item icon="folder" />
        <v-action-item icon="play" disabled />
        <v-action-item icon="debug-stop" disabled />
      </v-action-list>
    </v-floating-toolbar>
  </div>
</template>
`,yo=`
<template>
  <div class="demo-cube demo-cube-c demo-cube-h52 demo-cube-relative">
    <v-floating-toolbar vertical :x="10" :y="10">
      <v-action-list vertical>
        <v-action-item icon="add" />
        <v-action-item icon="history" />
        <v-action-item icon="folder" />
        <v-action-item icon="play" disabled />
        <v-action-item icon="debug-stop" disabled />
      </v-action-list>
    </v-floating-toolbar>
  </div>
</template>
`,xo=`
<template>
  <div class="demo-cube demo-cube-c demo-cube-h14">
    <v-floating-toolbar fixed :x="300" :y="6">
      <v-action-list>
        <v-action-item icon="add" />
        <v-action-item icon="history" />
        <v-action-item icon="folder" />
        <v-action-item icon="play" disabled />
        <v-action-item icon="debug-stop" disabled />
      </v-action-list>
    </v-floating-toolbar>
  </div>
</template>
`,$o=`
<template>
  <v-layout h-full w-full>
    <v-layout h-full class="demo-cube-w50p">
      <div class="demo-cube demo-cube-b demo-cube-h52 demo-cube-relative">
        <v-floating-toolbar :x="10" :y="10">
          <v-action-list>
            <v-action-item icon="add">Add Item</v-action-item>
            <v-action-item icon="history">History</v-action-item>
            <v-action-item icon="folder">Choose Folder</v-action-item>
          </v-action-list>
        </v-floating-toolbar>
      </div>
    </v-layout>
    <v-layout h-full class="demo-cube-w50p">
      <div class="demo-cube demo-cube-c demo-cube-h52 demo-cube-relative">
        <v-floating-toolbar vertical :x="10" :y="10">
          <v-action-list vertical>
            <v-action-item icon="add">Add Item</v-action-item>
            <v-action-item icon="history">History</v-action-item>
            <v-action-item icon="folder">Choose Folder</v-action-item>
            <v-action-item icon="play" disabled>Play</v-action-item>
            <v-action-item icon="debug-stop">Stop</v-action-item>
          </v-action-list>
        </v-floating-toolbar>
      </div>
    </v-layout>
  </v-layout>
</template>
`;var Co=[{name:"floating_toolbar_basic_usage_html",code:ko,lang:"html"},{name:"floating_toolbar_vertical_html",code:yo,lang:"html"},{name:"floating_toolbar_fixed_html",code:xo,lang:"html"},{name:"floating_toolbar_with_labels_usage_html",code:$o,lang:"html"}],H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Co});const So=`
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
`,wo=`
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
`;var jo=[{name:"icon_basic_usage_html",code:So,lang:"html"},{name:"codicons_html",code:wo,lang:"html"}],K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});const Oo=`
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
`,To=`
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
`,Io=`
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
`;var zo=[{name:"input_basic_usage_html",code:Oo,lang:"html"},{name:"input_disabled_html",code:To,lang:"html"},{name:"input_with_icon_html",code:Io,lang:"html"}],G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zo});const Eo=`
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
`,Vo=`
<v-action-bar>
  <v-action @click="onClick">
    <v-icon-play />
  </v-action>
</v-action-bar>
`;var Ao=[{name:"installation_usage_js",code:Eo,lang:"javascript"},{name:"installation_usage_html",code:Vo,lang:"html"}],Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ao});const Mo=`
<template>
  <v-keybinding-label value="Ctrl+A" />
  <br />
  <v-keybinding-label value="Ctrl+C" />
</template>
`,Lo=`
<template>
  <v-keybinding-label value="Cmd+A" :separator="null" />
  <br />
  <v-keybinding-label value="Cmd+C" :separator="null" />
</template>
`;var Bo=[{name:"keybindinglabel_basic_usage_html",code:Mo,lang:"html"},{name:"keybindinglabel_other_separator_usage_html",code:Lo,lang:"html"}],J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bo});const Uo=`
<template>
  <v-keyboard-shortcuts :value="shortcuts" />
</template>

<script>
import { reactive } from "vue"

export default {
  setup() {
    const shortcuts = reactive([
      {
        title: "Copy",
        key: "Ctrl+C"
      },
      {
        title: "Paste",
        key: "Ctrl+V"
      }
    ]);

    return {
      shortcuts
    };
  }
};
<\/script>
`;var Do=[{name:"keyboard_shortcuts_basic_usage_html",code:Uo,lang:"html"}],X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Do});const Fo=`
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
`;var qo=[{name:"label_basic_usage_html",code:Fo,lang:"html"}],Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qo});const Po=`
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
`;var Ro=[{name:"layout_basic_html",code:Po,lang:"html"}],Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro});const No=`
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
`,Wo=`
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
`;var Ho=[{name:"list_basic_usage_html",code:No,lang:"html"},{name:"list_focusable_html",code:Wo,lang:"html"}],ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ho});const Ko=`
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
`;var Go=[{name:"node_graph_basic_usage_html",code:Ko,lang:"html"}],oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Go});const Qo=`
<template>
  <div class="scrollbar" style="height: 260px; overflow: auto">
    <v-layout gutter wrap>
      <div v-for="item in 10" :key="item" class="demo-cube demo-cube-num demo-cube-h14">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`,Jo=`
<template>
  <div class="scrollbar" style="height: 70px; overflow: auto">
    <v-layout gutter>
      <div v-for="item in 20" :key="item" class="demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`;var Xo=[{name:"scrollbar_basic_usage_html",code:Qo,lang:"html"},{name:"scrollbar_horizontal_scroll_html",code:Jo,lang:"html"}],te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xo});const Yo=`
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
`,Zo=`
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
`;var et=[{name:"selectbox_basic_usage_html",code:Yo,lang:"html"},{name:"selectbox_disabled_usage_html",code:Zo,lang:"html"}],ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const ot=`
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
`,tt=`
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
`;var nt=[{name:"sidebar_basic_usage_html",code:ot,lang:"html"},{name:"sidebar_section_html",code:tt,lang:"html"}],le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const lt=`
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
`;var ct=[{name:"space_basic_usage_html",code:lt,lang:"html"}],ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ct});const at=`
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
`,it=`
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
`;var st=[{name:"splitview_basic_usage_html",code:at,lang:"html"},{name:"splitview_horizontal_usage_html",code:it,lang:"html"}],ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});const dt=`
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
`;var _t=[{name:"suggest_basic_usage_html",code:dt,lang:"html"}],ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t});const ut=`
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
`;var mt=[{name:"tabs_basic_usage_html",code:ut,lang:"html"}],se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const rt=`
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
`;var pt=[{name:"treeview_basic_usage_html",code:rt,lang:"html"}],de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const bt={"./component-action-bar.js":U,"./component-action-list.js":D,"./component-autocomplete.js":F,"./component-button.js":q,"./component-checkbox.js":P,"./component-content.js":R,"./component-dropdown.js":N,"./component-fieldset.js":W,"./component-floating-toolbar.js":H,"./component-icon.js":K,"./component-input.js":G,"./component-installation.js":Q,"./component-keybinding-label.js":J,"./component-keyboard-shortcuts.js":X,"./component-label.js":Y,"./component-layout.js":Z,"./component-list.js":ee,"./component-node-graph.js":oe,"./component-scrollbar.js":te,"./component-selectbox.js":ne,"./component-sidebar.js":le,"./component-space.js":ce,"./component-splitview.js":ae,"./component-suggest.js":ie,"./component-tabs.js":se,"./component-treeview.js":de},O=[];for(const[,u]of Object.entries(bt))O.push.apply(O,u.default);var vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const ht={name:"demo-code",props:{lang:{type:String,default:null},code:{type:String,default:null},name:{type:String,default:null}},setup(u){const{lang:i,code:m,name:l}=fe(u),_=T(()=>O.find(a=>a.name===l.value)),r=T(()=>{var a;return m.value||((a=_.value)==null?void 0:a.code.trim())}),t=T(()=>{var a;return i.value||((a=_.value)==null?void 0:a.lang)});return{content:r,language:t}}};function ft(u,i,m,l,_,r){const t=c("highlightjs");return l.content?(h(),V(t,{key:0,autodetect:!1,language:l.language,code:l.content},null,8,["language","code"])):ge("",!0)}var gt=g(ht,[["render",ft]]),kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt});const yt={name:"demo-component-action-bar",setup(){return{onClick:()=>{}}}},xt=n("h2",null,"ActionBar",-1),$t=n("h3",null,"Basic Usage",-1),Ct=n("h3",null,"Disabled Action",-1),St=n("h3",null,"Grouping Action",-1),wt=n("span",{class:"codicon codicon-play"},null,-1),jt=n("span",{class:"codicon codicon-stop"},null,-1),Ot=n("span",{class:"codicon codicon-plus"},null,-1),Tt=n("span",{class:"codicon codicon-zoom-in"},null,-1),It=n("span",{class:"codicon codicon-zoom-out"},null,-1);function zt(u,i,m,l,_,r){const t=c("v-icon-play"),a=c("v-action"),s=c("v-icon-stop"),d=c("v-icon-plus"),p=c("v-icon-folder"),v=c("v-action-bar"),x=c("demo-code"),$=c("demo-block"),C=c("v-action-group");return h(),f(k,null,[xt,$t,e($,null,{code:o(()=>[e(x,{name:"actionbar_basic_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(s)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(p)]),_:1},8,["onClick"])]),_:1})]),_:1}),Ct,e($,null,{code:o(()=>[e(x,{name:"actionbar_disabled_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{disabled:"",onClick:l.onClick},{default:o(()=>[e(s)]),_:1},8,["onClick"])]),_:1})]),_:1}),St,e($,null,{code:o(()=>[e(x,{name:"actionbar_grouping_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[wt]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[jt]),_:1},8,["onClick"])]),_:1}),e(a,{onClick:l.onClick},{default:o(()=>[Ot]),_:1},8,["onClick"]),e(C,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[Tt]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[It]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var Et=g(yt,[["render",zt]]),Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Et});const At={name:"demo-component-action-list",setup(){return{onClick:()=>{}}}},Mt=n("h2",null,"ActionList",-1),Lt=n("h3",null,"Basic Usage",-1),Bt=n("h3",null,"Disabled Action Item",-1),Ut=n("h3",null,"Vertical Action List",-1),Dt=n("h3",null,"Action With Label",-1),Ft=b("Play"),qt=b("Stop"),Pt=b("Add Item"),Rt=b("Choose Folder"),Nt=n("h3",null,"Vertcal Action With Label",-1),Wt=b("Play"),Ht=b("Stop"),Kt=b("Add Item"),Gt=b("Choose Folder");function Qt(u,i,m,l,_,r){const t=c("v-action-item"),a=c("v-action-list"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Mt,Lt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{title:"Play",icon:"play",onClick:l.onClick},null,8,["onClick"]),e(t,{title:"Stop",icon:"debug-stop",onClick:l.onClick},null,8,["onClick"]),e(t,{title:"Add Item",icon:"plus",onClick:l.onClick},null,8,["onClick"]),e(t,{title:"Choose Folder",icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1}),Bt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_disabled_action_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"plus",onClick:l.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1}),Ut,e(d,null,{code:o(()=>[e(s,{name:"actionlist_vertical_action_list_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"plus",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1}),Dt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_action_with_label_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},{default:o(()=>[Ft]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},{default:o(()=>[qt]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:l.onClick},{default:o(()=>[Pt]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:l.onClick},{default:o(()=>[Rt]),_:1},8,["onClick"])]),_:1})]),_:1}),Nt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_vertical_action_with_label_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},{default:o(()=>[Wt]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},{default:o(()=>[Ht]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:l.onClick},{default:o(()=>[Kt]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:l.onClick},{default:o(()=>[Gt]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var Jt=g(At,[["render",Qt]]),Xt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jt});const Yt={name:"demo-component-autocomplete",setup(){const u=y(""),i=y([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),m=_=>_?i.value.filter(r=>r.text.toLowerCase().includes(_.toLowerCase())):i.value;return{value:u,fetchAutocompleteData:(_,r,t)=>new Promise(a=>{const s=setTimeout(()=>{a(m(_))},100);t.onCancellationRequested(()=>{clearTimeout(s),a()})}),onClick:()=>{}}}},Zt=n("h2",null,"Autocomplete",-1),en=n("h3",null,"Basic Usage",-1),on=n("h3",null,"Disabled Autocomplete",-1),tn=n("h3",null,"Autocomplete With Icon",-1),nn=n("span",{class:"codicon codicon-file-code"},null,-1);function ln(u,i,m,l,_,r){const t=c("v-autocomplete"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Zt,en,e(s,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_basic_usage_html"})]),default:o(()=>[e(t,{placeholder:"Enter your text",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=d=>l.value=d),"data-source":l.fetchAutocompleteData,"loading-message":"Loading...","empty-result-message":"No matching results."},null,8,["modelValue","data-source"])]),_:1}),on,e(s,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_disabled_usage_html"})]),default:o(()=>[e(t,{placeholder:"Enter your text",disabled:""})]),_:1}),tn,e(s,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_with_icon_usage_html"})]),default:o(()=>[e(t,{placeholder:"Enter your text","icon-clickable":"",onIconClick:l.onClick},{icon:o(()=>[nn]),_:1},8,["onIconClick"])]),_:1})],64)}var cn=g(Yt,[["render",ln]]),an=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cn});const sn={name:"demo-component-button"},dn=n("h2",null,"Button",-1),_n=n("p",null,"Simple button.",-1),un=n("h3",null,"Basic Usage",-1),mn=b("Default"),rn=b("Secondary"),pn=n("h3",null,"Disabled Button",-1),bn=b("Default"),vn=b("Secondary");function hn(u,i,m,l,_,r){const t=c("v-button"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[dn,_n,un,e(d,null,{code:o(()=>[e(s,{name:"button_basic_usage_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,null,{default:o(()=>[mn]),_:1}),e(t,{secondary:""},{default:o(()=>[rn]),_:1})]),_:1})]),_:1}),pn,e(d,null,{code:o(()=>[e(s,{name:"button_disabled_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,{disabled:""},{default:o(()=>[bn]),_:1}),e(t,{disabled:"",secondary:""},{default:o(()=>[vn]),_:1})]),_:1})]),_:1})],64)}var fn=g(sn,[["render",hn]]),gn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fn});const kn={name:"demo-component-checkbox",setup(){const u=y(!0),i=y(!1),m=y(!0),l=y(!1);return{checked:u,unchecked:i,disabledChecked:m,disabledUnchecked:l}}},yn=n("h2",null,"Checkbox",-1),xn=n("h3",null,"Basic Usage",-1),$n=b("Checked"),Cn=b("Unchecked"),Sn=n("h3",null,"Disabled State",-1),wn=b("Checked"),jn=b("Unchecked");function On(u,i,m,l,_,r){const t=c("v-checkbox"),a=c("v-label"),s=c("v-layout"),d=c("demo-code"),p=c("demo-block");return h(),f(k,null,[yn,xn,e(p,null,{code:o(()=>[e(d,{name:"checkbox_basic_usage_html"})]),default:o(()=>[e(s,{gutter:"",wrap:""},{default:o(()=>[e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_1",modelValue:l.checked,"onUpdate:modelValue":i[0]||(i[0]=v=>l.checked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_1"},{default:o(()=>[$n]),_:1})]),_:1}),e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_2",modelValue:l.unchecked,"onUpdate:modelValue":i[1]||(i[1]=v=>l.unchecked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_2"},{default:o(()=>[Cn]),_:1})]),_:1})]),_:1})]),_:1}),Sn,e(p,null,{code:o(()=>[e(d,{name:"checkbox_disabled_html"})]),default:o(()=>[e(s,{gutter:"",wrap:""},{default:o(()=>[e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_3",modelValue:l.disabledChecked,"onUpdate:modelValue":i[2]||(i[2]=v=>l.disabledChecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_3"},{default:o(()=>[wn]),_:1})]),_:1}),e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_4",modelValue:l.disabledUnchecked,"onUpdate:modelValue":i[3]||(i[3]=v=>l.disabledUnchecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_4"},{default:o(()=>[jn]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Tn=g(kn,[["render",On]]),In=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tn});const zn={name:"demo-component-content"},En=n("h2",null,"Content",-1),Vn=n("h3",null,"Basic Usage",-1),An={class:"demo-cube demo-cube-h52"},Mn=n("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Ln=n("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),Bn=n("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),Un=n("div",{class:"demo-cube demo-cube-d demo-cube-h14"},null,-1);function Dn(u,i,m,l,_,r){const t=c("v-content"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[En,Vn,e(s,null,{code:o(()=>[e(a,{name:"content_basic_usage_html"})]),default:o(()=>[n("div",An,[e(t,{"h-full":"",scroll:"",padding:"md"},{default:o(()=>[Mn,Ln,Bn,Un]),_:1})])]),_:1})],64)}var Fn=g(zn,[["render",Dn]]),qn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fn});const Pn={name:"demo-component-dropdown",setup(){return{dropdownOpen:y(!1),items:y([{id:1,text:"Item 1",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:2,text:"Item 2",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:3,text:"Item 3",icon:"v-icon-doc-text",iconColor:"#B69E24"}])}}},Rn=n("h2",null,"Dropdown",-1),Nn=n("h3",null,"Basic Usage",-1),Wn=b(" Toggle Dropdown ");function Hn(u,i,m,l,_,r){const t=c("v-button"),a=c("v-list"),s=c("v-content"),d=c("v-dropdown"),p=c("demo-code"),v=c("demo-block");return h(),f(k,null,[Rn,Nn,e(v,null,{code:o(()=>[e(p,{name:"dropdown_basic_usage_html"})]),default:o(()=>[e(t,{id:"button-1",onClick:i[0]||(i[0]=x=>l.dropdownOpen=!l.dropdownOpen)},{default:o(()=>[Wn]),_:1}),e(d,{visible:l.dropdownOpen,"onUpdate:visible":i[2]||(i[2]=x=>l.dropdownOpen=x),anchor:"button-1","anchor-constraint":"","offset-y":4},{default:o(()=>[e(s,{fill:""},{default:o(()=>[e(a,{items:l.items,"onUpdate:selected":i[1]||(i[1]=x=>l.dropdownOpen=!1)},null,8,["items"])]),_:1})]),_:1},8,["visible"])]),_:1})],64)}var Kn=g(Pn,[["render",Hn]]),Gn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kn});const Qn={name:"demo-component-fieldset"},Jn=n("h2",null,"Fieldset",-1),Xn=n("h3",null,"Basic Usage",-1),Yn=b("Label 1"),Zn=b("Label 2"),el=n("h3",null,"Vertical Layout",-1),ol=b("Label 1"),tl=b("Label 2");function nl(u,i,m,l,_,r){const t=c("v-label"),a=c("v-input"),s=c("v-field-layout"),d=c("v-fieldset"),p=c("demo-code"),v=c("demo-block");return h(),f(k,null,[Jn,Xn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(p,{name:"fieldset_basic_usage_html"})]),default:o(()=>[e(d,{label:"Title"},{default:o(()=>[e(s,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Yn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(s,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Zn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),el,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(p,{name:"fieldset_vertical_layout_html"})]),default:o(()=>[e(d,{label:"Title"},{default:o(()=>[e(s,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[ol]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(s,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[tl]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1})],64)}var ll=g(Qn,[["render",nl]]),cl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ll});const al={name:"demo-component-floating-toolbar"},il=n("h2",null,"FloatingToolbar",-1),sl=n("h3",null,"Basic Usage",-1),dl={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},_l=n("h3",null,"Vertical Floating Toolbar",-1),ul={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},ml=n("h3",null,"Fixed Floating Toolbar",-1),rl={class:"demo-cube demo-cube-c demo-cube-h14"},pl=n("h3",null,"Floating Toolbar With Labels",-1),bl={class:"demo-cube demo-cube-b demo-cube-h52 demo-cube-relative"},vl=b("Add Item"),hl=b("History"),fl=b("Choose Folder"),gl={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},kl=b("Add Item"),yl=b("History"),xl=b("Choose Folder"),$l=b("Play"),Cl=b("Stop");function Sl(u,i,m,l,_,r){const t=c("v-action-item"),a=c("v-action-list"),s=c("v-floating-toolbar"),d=c("demo-code"),p=c("demo-block"),v=c("v-layout");return h(),f(k,null,[il,sl,e(p,null,{code:o(()=>[e(d,{name:"floating_toolbar_basic_usage_html"})]),default:o(()=>[n("div",dl,[e(s,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),_l,e(p,null,{code:o(()=>[e(d,{name:"floating_toolbar_vertical_html"})]),default:o(()=>[n("div",ul,[e(s,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),ml,e(p,null,{code:o(()=>[e(d,{name:"floating_toolbar_fixed_html"})]),default:o(()=>[n("div",rl,[e(s,{fixed:"",x:300,y:6},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),pl,e(p,null,{code:o(()=>[e(d,{name:"floating_toolbar_with_labels_usage_html"})]),default:o(()=>[e(v,{"h-full":"","w-full":""},{default:o(()=>[e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[n("div",bl,[e(s,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[vl]),_:1}),e(t,{icon:"history"},{default:o(()=>[hl]),_:1}),e(t,{icon:"folder"},{default:o(()=>[fl]),_:1})]),_:1})]),_:1})])]),_:1}),e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[n("div",gl,[e(s,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[kl]),_:1}),e(t,{icon:"history"},{default:o(()=>[yl]),_:1}),e(t,{icon:"folder"},{default:o(()=>[xl]),_:1}),e(t,{icon:"play",disabled:""},{default:o(()=>[$l]),_:1}),e(t,{icon:"debug-stop"},{default:o(()=>[Cl]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})],64)}var wl=g(al,[["render",Sl]]),jl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wl});const Ol={name:"demo-component-space"},Tl=n("h2",null,"Icon",-1),Il=n("p",null,"Library provides some svg icons.",-1),zl=n("h3",null,"Built-in Icons",-1),El=n("h3",null,"Codicons",-1),Vl=n("p",null,[b(" The "),n("a",{href:"https://github.com/microsoft/vscode-codicons",class:"demo-external-link",target:"_blank"},"Codicon library"),b(" contains all the icons used in VS Code. "),n("a",{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",class:"demo-external-link",target:"_blank"},"All list of icons"),b(". ")],-1),Al=n("i",{class:"codicon codicon-account"},null,-1),Ml=n("i",{class:"codicon codicon-activate-breakpoints"},null,-1),Ll=n("i",{class:"codicon codicon-add"},null,-1),Bl=n("i",{class:"codicon codicon-alert"},null,-1),Ul=n("i",{class:"codicon codicon-archive"},null,-1),Dl=n("i",{class:"codicon codicon-array"},null,-1);function Fl(u,i,m,l,_,r){const t=c("v-icon-book"),a=c("v-icon-checkmark"),s=c("v-icon-chevron-down"),d=c("v-icon-circle"),p=c("v-icon-close"),v=c("v-icon-doc-text"),x=c("v-icon-file-menu"),$=c("v-icon-folder"),C=c("v-icon-play"),_e=c("v-icon-stop"),ue=c("v-icon-plus-bold"),me=c("v-icon-plus"),re=c("v-icon-script"),pe=c("v-icon-sidebar-left"),be=c("v-icon-sidebar-right"),I=c("v-layout"),z=c("demo-code"),E=c("demo-block");return h(),f(k,null,[Tl,Il,zl,e(E,null,{code:o(()=>[e(z,{name:"icon_basic_usage_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[e(t),e(a),e(s),e(d),e(p),e(v),e(x),e($),e(C),e(_e),e(ue),e(me),e(re),e(pe),e(be)]),_:1})]),_:1}),El,Vl,e(E,null,{code:o(()=>[e(z,{name:"codicons_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[Al,Ml,Ll,Bl,Ul,Dl]),_:1})]),_:1})],64)}var ql=g(Ol,[["render",Fl]]),Pl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ql});const Rl={name:"demo-component-button",setup(){const u=y(""),i=y(""),m=y("");return{input:u,disabledInput:i,inputWithIcon:m}}},Nl=n("h2",null,"Input",-1),Wl=n("h3",null,"Basic Usage",-1),Hl=n("h3",null,"Disabled Input",-1),Kl=n("h3",null,"Input with icon",-1),Gl=n("i",{class:"codicon codicon-file-add"},null,-1);function Ql(u,i,m,l,_,r){const t=c("v-input"),a=c("demo-code"),s=c("demo-block"),d=c("v-icon-file-menu");return h(),f(k,null,[Nl,Wl,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:l.input,"onUpdate:modelValue":i[0]||(i[0]=p=>l.input=p),placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),Hl,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_disabled_html"})]),default:o(()=>[e(t,{modelValue:l.disabledInput,"onUpdate:modelValue":i[1]||(i[1]=p=>l.disabledInput=p),disabled:"",placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),Kl,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_with_icon_html"})]),default:o(()=>[e(t,{modelValue:l.inputWithIcon,"onUpdate:modelValue":i[2]||(i[2]=p=>l.inputWithIcon=p),placeholder:"Enter your text"},{icon:o(()=>[e(d)]),_:1},8,["modelValue"]),e(t,{modelValue:l.inputWithIcon,"onUpdate:modelValue":i[3]||(i[3]=p=>l.inputWithIcon=p),placeholder:"Enter your text"},{icon:o(()=>[Gl]),_:1},8,["modelValue"])]),_:1})],64)}var Jl=g(Rl,[["render",Ql]]),Xl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jl});const Yl={name:"demo-component-installation"},Zl=n("h2",null,"Installation",-1),ec=n("h3",null,"npm",-1),oc=n("p",null,"Add codicons (optional)",-1),tc=n("p",null,"In your code",-1),nc=n("h3",null,"Usage",-1),lc=n("p",null,"In your templates",-1);function cc(u,i,m,l,_,r){const t=c("demo-code");return h(),f(k,null,[Zl,ec,e(t,{lang:"shell",code:"npm install @ruleenginejs/ruleengine-ui"}),oc,e(t,{lang:"shell",code:"npm install @vscode/codicons"}),tc,e(t,{lang:"javascript",code:'import "@vscode/codicons/dist/codicon.css"'}),nc,e(t,{name:"installation_usage_js"}),lc,e(t,{name:"installation_usage_html"})],64)}var ac=g(Yl,[["render",cc]]),ic=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ac});const sc={name:"demo-component-keybinding-label"},dc=n("h2",null,"KeybindingLabel",-1),_c=n("h3",null,"Basic Usage",-1),uc=n("br",null,null,-1),mc=n("h3",null,"Mac Separator",-1),rc=n("br",null,null,-1);function pc(u,i,m,l,_,r){const t=c("v-keybinding-label"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[dc,_c,e(s,null,{code:o(()=>[e(a,{name:"keybindinglabel_basic_usage_html"})]),default:o(()=>[e(t,{value:"Ctrl+A"}),uc,e(t,{value:"Ctrl+C"})]),_:1}),mc,e(s,null,{code:o(()=>[e(a,{name:"keybindinglabel_other_separator_usage_html"})]),default:o(()=>[e(t,{value:"Cmd+A",separator:null}),rc,e(t,{value:"Cmd+C",separator:null})]),_:1})],64)}var bc=g(sc,[["render",pc]]),vc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bc});const hc={name:"demo-component-keyboard-shortcuts",setup(){return{shortcuts:j([{title:"Copy",key:"Ctrl+C"},{title:"Paste",key:"Ctrl+V"}])}}},fc=n("h2",null,"KeyboardShortcuts",-1),gc=n("h3",null,"Basic Usage",-1);function kc(u,i,m,l,_,r){const t=c("v-keyboard-shortcuts"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[fc,gc,e(s,null,{code:o(()=>[e(a,{name:"keyboard_shortcuts_basic_usage_html"})]),default:o(()=>[e(t,{value:l.shortcuts},null,8,["value"])]),_:1})],64)}var yc=g(hc,[["render",kc]]),xc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yc});const $c={name:"demo-component-label",setup(){return{value:y(!1)}}},Cc=n("h2",null,"Label",-1),Sc=n("h3",null,"Basic Usage",-1),wc=b("Label 1"),jc=b("Label 2");function Oc(u,i,m,l,_,r){const t=c("v-label"),a=c("v-input"),s=c("v-field-layout"),d=c("v-checkbox"),p=c("v-fieldset"),v=c("demo-code"),x=c("demo-block");return h(),f(k,null,[Cc,Sc,e(x,{class:"demo-label-block"},{code:o(()=>[e(v,{name:"label_basic_usage_html"})]),default:o(()=>[e(p,null,{default:o(()=>[e(s,null,{label:o(()=>[e(t,{truncate:"",for:"input1"},{default:o(()=>[wc]),_:1})]),value:o(()=>[e(a,{id:"input1",placeholder:"Enter your text"})]),_:1}),e(s,null,{label:o(()=>[e(t,{truncate:"",for:"checkbox1"},{default:o(()=>[jc]),_:1})]),value:o(()=>[e(d,{id:"checkbox1",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=$=>l.value=$)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)}var Tc=g($c,[["render",Oc]]),Ic=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tc});const zc={name:"demo-component-layout"},Ec=n("h2",null,"Layout",-1),Vc=n("p",null,"Quickly create layouts with no styling on flex.",-1),Ac=n("h3",null,"Basic layout",-1),Mc={class:"demo-cube demo-cube-h60"},Lc=n("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Bc=n("div",{class:"demo-cube demo-cube-b demo-cube-w52"},null,-1),Uc=n("div",{class:"demo-cube demo-cube-c"},null,-1);function Dc(u,i,m,l,_,r){const t=c("v-layout"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Ec,Vc,Ac,e(s,null,{code:o(()=>[e(a,{name:"layout_basic_html"})]),default:o(()=>[n("div",Mc,[e(t,{"h-full":"","w-full":"",vertical:""},{default:o(()=>[e(t,{"not-shrink":""},{default:o(()=>[Lc]),_:1}),e(t,{"all-distr":"","h-full":""},{default:o(()=>[e(t,{"h-full":"","not-shrink":""},{default:o(()=>[Bc]),_:1}),e(t,{"h-full":"","all-distr":""},{default:o(()=>[Uc]),_:1})]),_:1})]),_:1})])]),_:1})],64)}var Fc=g(zc,[["render",Dc]]),qc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fc});const Pc={name:"demo-component-list",setup(){const u=j([]),i=y({id:1}),m=y({id:1});for(let l=0;l<15;l++)u.push({id:l+1,text:`Item ${l+1}`,icon:"v-icon-doc-text"});return{items:u,selectedItem:i,focusableSelectedItem:m}}},Rc=n("h2",null,"List",-1),Nc=n("p",null,"Display a set of data with flat list.",-1),Wc=n("h3",null,"Basic Usage",-1),Hc={class:"demo-cube demo-cube-h52"},Kc=n("h3",null,"Focusable",-1),Gc={class:"demo-cube demo-cube-h52"};function Qc(u,i,m,l,_,r){const t=c("v-list"),a=c("v-content"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Rc,Nc,Wc,e(d,null,{code:o(()=>[e(s,{name:"list_basic_usage_html"})]),default:o(()=>[n("div",Hc,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{items:l.items,selected:l.selectedItem,"onUpdate:selected":i[0]||(i[0]=p=>l.selectedItem=p)},null,8,["items","selected"])]),_:1})])]),_:1}),Kc,e(d,null,{code:o(()=>[e(s,{name:"list_focusable_html"})]),default:o(()=>[n("div",Gc,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{"tab-index":0,items:l.items,selected:l.focusableSelectedItem,"onUpdate:selected":i[1]||(i[1]=p=>l.focusableSelectedItem=p)},null,8,["items","selected"])]),_:1})])]),_:1})],64)}var Jc=g(Pc,[["render",Qc]]),Xc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jc});const Yc={name:"demo-component-node-graph"},Zc=n("h2",null,"Node Graph",-1),ea=n("p",null,"Graph of nodes connected via ports using connectors.",-1),oa=n("h3",null,"Basic Usage",-1),ta={class:"demo-cube demo-cube-h60"},na=b(" in port "),la=b(" out port ");function ca(u,i,m,l,_,r){const t=c("v-graph-port"),a=c("v-graph-circle-node"),s=c("v-icon-doc-text"),d=c("v-icon-script"),p=c("v-graph-node"),v=c("v-graph-connection"),x=c("v-graph-canvas"),$=c("demo-code"),C=c("demo-block");return h(),f(k,null,[Zc,ea,oa,e(C,null,{code:o(()=>[e($,{name:"node_graph_basic_usage_html"})]),default:o(()=>[n("div",ta,[e(x,null,{node:o(()=>[e(a,{id:1,x:100,y:100,title:"s"},{port:o(()=>[e(t,{id:"start_port"})]),_:1}),e(a,{id:3,x:650,y:100,title:"e"},{port:o(()=>[e(t,{id:"end_port"})]),_:1}),e(p,{id:2,x:300,y:10,title:"Simple Node"},{"header-left-icon":o(()=>[e(s)]),"header-right-icon":o(()=>[e(d)]),left:o(()=>[e(t,{id:"in_port",direction:"left"},{default:o(()=>[na]),_:1})]),right:o(()=>[e(t,{id:"out_port",direction:"right"},{default:o(()=>[la]),_:1})]),_:1})]),connection:o(()=>[e(v,{from:{nodeId:1,portId:"start_port"},to:{nodeId:2,portId:"in_port"}}),e(v,{from:{nodeId:2,portId:"out_port"},to:{nodeId:3,portId:"end_port"}})]),_:1})])]),_:1})],64)}var aa=g(Yc,[["render",ca]]),ia=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:aa});const sa={name:"demo-component-scrollbar"},da=n("h2",null,"Scrollbar",-1),_a=n("h3",null,"Basic Usage",-1),ua={class:"scrollbar",style:{height:"260px",overflow:"auto"}},ma=n("h3",null,"Horizontal Scroll",-1),ra={class:"scrollbar",style:{height:"70px",overflow:"auto"}};function pa(u,i,m,l,_,r){const t=c("v-layout"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[da,_a,e(s,null,{code:o(()=>[e(a,{name:"scrollbar_basic_usage_html"})]),default:o(()=>[n("div",ua,[e(t,{gutter:"",wrap:""},{default:o(()=>[(h(),f(k,null,M(10,d=>n("div",{key:d,class:"demo-cube demo-cube-num demo-cube-h14"},L(d),1)),64))]),_:1})])]),_:1}),ma,e(s,null,{code:o(()=>[e(a,{name:"scrollbar_horizontal_scroll_html"})]),default:o(()=>[n("div",ra,[e(t,{gutter:""},{default:o(()=>[(h(),f(k,null,M(20,d=>n("div",{key:d,class:"demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink"},L(d),1)),64))]),_:1})])]),_:1})],64)}var ba=g(sa,[["render",pa]]),va=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ba});const ha={name:"demo-component-selectbox",setup(){const u=y("Option 1"),i=j([{text:"Option 1",value:"Option 1"},{text:"Option 2",value:"Option 2"},{text:"Option 3",value:"Option 3"},{text:"Option 4",value:"Option 4"},{text:"Option 5",value:"Option 5"}]),m=y("Option 1");return{options:i,value:u,disabledValue:m}}},fa=n("h2",null,"SelectBox",-1),ga=n("h3",null,"Basic Usage",-1),ka=n("h3",null,"Disabled Select",-1);function ya(u,i,m,l,_,r){const t=c("v-select-box"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[fa,ga,e(s,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=d=>l.value=d),items:l.options},null,8,["modelValue","items"])]),_:1}),ka,e(s,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_disabled_usage_html"})]),default:o(()=>[e(t,{modelValue:l.disabledValue,"onUpdate:modelValue":i[1]||(i[1]=d=>l.disabledValue=d),items:l.options,disabled:""},null,8,["modelValue","items"])]),_:1})],64)}var xa=g(ha,[["render",ya]]),$a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xa});const Ca={name:"demo-component-sidebar"},Sa=n("h2",null,"Sidebar",-1),wa=n("h3",null,"Basic Usage",-1),ja={class:"demo-cube demo-cube-h60"},Oa=n("div",{class:"demo-cube demo-cube-a"},null,-1),Ta=n("h3",null,"Sidebar Section",-1),Ia={class:"demo-cube demo-cube-h60"},za=n("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Ea=n("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),Va=n("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),Aa=n("div",{class:"demo-cube demo-cube-d"},null,-1);function Ma(u,i,m,l,_,r){const t=c("v-sidebar"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block"),p=c("v-sidebar-section"),v=c("v-content");return h(),f(k,null,[Sa,wa,e(d,null,{code:o(()=>[e(s,{name:"sidebar_basic_usage_html"})]),default:o(()=>[n("div",ja,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":""})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[Oa]),_:1})]),_:1})])]),_:1}),Ta,e(d,null,{code:o(()=>[e(s,{name:"sidebar_section_html"})]),default:o(()=>[n("div",Ia,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":"","lt-border":"","rt-border":""},{default:o(()=>[e(v,{"w-full":"","h-full":"",scroll:""},{default:o(()=>[e(p,{title:"Section A"},{default:o(()=>[za]),_:1}),e(p,{title:"Section B"},{default:o(()=>[Ea]),_:1}),e(p,{title:"Section C","bottom-border":!1},{default:o(()=>[Va]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[Aa]),_:1})]),_:1})])]),_:1})],64)}var La=g(Ca,[["render",Ma]]),Ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:La});const Ua={name:"demo-component-space"},Da=n("h2",null,"Space",-1),Fa=n("p",null,"Space between two elements.",-1),qa=n("h3",null,"Basic Usage",-1),Pa=n("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),Ra=n("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),Na=n("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),Wa=n("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1);function Ha(u,i,m,l,_,r){const t=c("v-space"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Da,Fa,qa,e(d,null,{code:o(()=>[e(s,{name:"space_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[Pa,e(t),Ra,e(t),Na,e(t),Wa]),_:1})]),_:1})],64)}var Ka=g(Ua,[["render",Ha]]),Ga=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ka});const Qa={name:"demo-component-splitview"},Ja=n("h2",null,"SplitView",-1),Xa=n("h3",null,"Basic Usage",-1),Ya={class:"demo-cube demo-cube-h60"},Za=n("div",{class:"demo-cube demo-cube-a"},null,-1),ei=n("div",{class:"demo-cube demo-cube-b"},null,-1),oi=n("div",{class:"demo-cube demo-cube-c"},null,-1),ti=n("h3",null,"Horizontal SplitView",-1),ni={class:"demo-cube demo-cube-h60"},li=n("div",{class:"demo-cube demo-cube-a"},null,-1),ci=n("div",{class:"demo-cube demo-cube-b"},null,-1),ai=n("div",{class:"demo-cube demo-cube-c"},null,-1);function ii(u,i,m,l,_,r){const t=c("v-split-pane"),a=c("v-split-view"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Ja,Xa,e(d,null,{code:o(()=>[e(s,{name:"splitview_basic_usage_html"})]),default:o(()=>[n("div",Ya,[e(a,{"snap-offset":30},{default:o(()=>[e(t,{size:"200px","min-size":40},{default:o(()=>[Za]),_:1}),e(t,{"min-size":150},{default:o(()=>[ei]),_:1}),e(t,{size:"20%"},{default:o(()=>[oi]),_:1})]),_:1})])]),_:1}),ti,e(d,null,{code:o(()=>[e(s,{name:"splitview_horizontal_usage_html"})]),default:o(()=>[n("div",ni,[e(a,{horizontal:"","snap-offset":30},{default:o(()=>[e(t,null,{default:o(()=>[li]),_:1}),e(t,null,{default:o(()=>[ci]),_:1}),e(t,null,{default:o(()=>[ai]),_:1})]),_:1})])]),_:1})],64)}var si=g(Qa,[["render",ii]]),di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:si});const _i={name:"demo-component-suggest",setup(){const u=y(!1),i=y(""),m=y([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),l=a=>a?m.value.filter(s=>s.text.toLowerCase().includes(a.toLowerCase())):m.value;return{suggestOpen:u,queryText:i,fetchData:(a,s,d)=>new Promise(p=>{const v=setTimeout(()=>{p(l(a))},100);d.onCancellationRequested(()=>{clearTimeout(v),p()})}),onError:()=>{},onSuggestionSelected:a=>{i.value=a.text,u.value=!1}}}},ui=n("h2",null,"Suggest",-1),mi=n("h3",null,"Basic Usage",-1),ri=b("Toggle Suggest");function pi(u,i,m,l,_,r){const t=c("v-button"),a=c("v-input"),s=c("v-suggest"),d=c("v-layout"),p=c("demo-code"),v=c("demo-block");return h(),f(k,null,[ui,mi,e(v,{class:"demo-suggest-block"},{code:o(()=>[e(p,{name:"suggest_basic_usage_html"})]),default:o(()=>[e(d,{gutter:""},{default:o(()=>[e(t,{onClick:i[0]||(i[0]=x=>l.suggestOpen=!l.suggestOpen)},{default:o(()=>[ri]),_:1}),e(a,{modelValue:l.queryText,"onUpdate:modelValue":i[1]||(i[1]=x=>l.queryText=x),placeholder:"Enter your text",id:"input-1"},null,8,["modelValue"]),e(s,{visible:l.suggestOpen,"onUpdate:visible":i[2]||(i[2]=x=>l.suggestOpen=x),anchor:"input-1","anchor-constraint":!1,"search-query":l.queryText,"data-source":l.fetchData,"action-on-parent-scrolling":"update","loading-message":"Loading...","empty-result-message":"No suggestions.","max-item-count":20,"clear-on-invisible":"",onError:l.onError,onSelect:l.onSuggestionSelected},null,8,["visible","search-query","data-source","onError","onSelect"])]),_:1})]),_:1})],64)}var bi=g(_i,[["render",pi]]),vi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bi});const hi={name:"demo-component-tabs",setup(){return{selectedTab:y(null)}}},fi=n("h2",null,"Tabs",-1),gi=n("h3",null,"Basic Usage",-1),ki=b(" File 1.txt "),yi=b(" File 2.txt "),xi=b(" File 3.txt "),$i=b(" File 4.txt "),Ci=b(" File 5.txt "),Si=b(" File 6.txt ");function wi(u,i,m,l,_,r){const t=c("v-icon-book"),a=c("v-tab"),s=c("v-tabs"),d=c("demo-code"),p=c("demo-block");return h(),f(k,null,[fi,gi,e(p,null,{code:o(()=>[e(d,{name:"tabs_basic_usage_html"})]),default:o(()=>[e(s,{modelValue:l.selectedTab,"onUpdate:modelValue":i[0]||(i[0]=v=>l.selectedTab=v)},{default:o(()=>[e(a,{"icon-color":"#B69E24",modified:""},{icon:o(()=>[e(t)]),default:o(()=>[ki]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[yi]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[xi]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[$i]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[Ci]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[Si]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var ji=g(hi,[["render",wi]]),Oi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ji});const Ti={name:"demo-component-treeview",setup(){return{items:j([{id:1,name:"Root folder",expanded:!0,selected:!1,children:[{id:2,name:"Folder 1",expanded:!1,selected:!1,icon:"v-icon-folder",children:[{id:3,name:"File 1",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:4,name:"File 2",icon:"v-icon-doc-text",expanded:!1,selected:!1}]},{id:5,name:"File 3",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:6,name:"Folder 2",icon:"v-icon-folder",expanded:!1,selected:!1,children:[]}]}])}}},Ii=n("h2",null,"Treeview",-1),zi=n("p",null,"Display a set of data with hierarchies.",-1),Ei=n("h3",null,"Basic Usage",-1);function Vi(u,i,m,l,_,r){const t=c("v-treeview"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Ii,zi,Ei,e(s,null,{code:o(()=>[e(a,{name:"treeview_basic_usage_html"})]),default:o(()=>[e(t,{items:l.items},null,8,["items"])]),_:1})],64)}var Ai=g(Ti,[["render",Vi]]),Mi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ai});const Li={"../components/demo-block.vue":We,"../components/demo-code.vue":kt,"../components/demo-component-action-bar.vue":Vt,"../components/demo-component-action-list.vue":Xt,"../components/demo-component-autocomplete.vue":an,"../components/demo-component-button.vue":gn,"../components/demo-component-checkbox.vue":In,"../components/demo-component-content.vue":qn,"../components/demo-component-dropdown.vue":Gn,"../components/demo-component-fieldset.vue":cl,"../components/demo-component-floating-toolbar.vue":jl,"../components/demo-component-icon.vue":Pl,"../components/demo-component-input.vue":Xl,"../components/demo-component-installation.vue":ic,"../components/demo-component-keybinding-label.vue":vc,"../components/demo-component-keyboard-shortcuts.vue":xc,"../components/demo-component-label.vue":Ic,"../components/demo-component-layout.vue":qc,"../components/demo-component-list.vue":Xc,"../components/demo-component-node-graph.vue":ia,"../components/demo-component-scrollbar.vue":va,"../components/demo-component-selectbox.vue":$a,"../components/demo-component-sidebar.vue":Ba,"../components/demo-component-space.vue":Ga,"../components/demo-component-splitview.vue":di,"../components/demo-component-suggest.vue":vi,"../components/demo-component-tabs.vue":Oi,"../components/demo-component-treeview.vue":Mi,"../components/demo-codes/component-action-bar.js":U,"../components/demo-codes/component-action-list.js":D,"../components/demo-codes/component-autocomplete.js":F,"../components/demo-codes/component-button.js":q,"../components/demo-codes/component-checkbox.js":P,"../components/demo-codes/component-content.js":R,"../components/demo-codes/component-dropdown.js":N,"../components/demo-codes/component-fieldset.js":W,"../components/demo-codes/component-floating-toolbar.js":H,"../components/demo-codes/component-icon.js":K,"../components/demo-codes/component-input.js":G,"../components/demo-codes/component-installation.js":Q,"../components/demo-codes/component-keybinding-label.js":J,"../components/demo-codes/component-keyboard-shortcuts.js":X,"../components/demo-codes/component-label.js":Y,"../components/demo-codes/component-layout.js":Z,"../components/demo-codes/component-list.js":ee,"../components/demo-codes/component-node-graph.js":oe,"../components/demo-codes/component-scrollbar.js":te,"../components/demo-codes/component-selectbox.js":ne,"../components/demo-codes/component-sidebar.js":le,"../components/demo-codes/component-space.js":ce,"../components/demo-codes/component-splitview.js":ae,"../components/demo-codes/component-suggest.js":ie,"../components/demo-codes/component-tabs.js":se,"../components/demo-codes/component-treeview.js":de,"../components/demo-codes/index.js":vt};var Bi={install:u=>{for(const[i,m]of Object.entries(Li)){const l=ke(i.split("/").pop().replace(/\.\w+$/,""));u.component(l,m.default||m)}}};const w=ye(je);w.use(Ue);w.use(xe);w.use(Bi);w.use($e);w.mount("#app");export{g as _};
