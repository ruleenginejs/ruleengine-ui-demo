import{c as E,r as c,o as h,a as he,b as fe,d as f,e as n,f as A,g as e,w as o,t as ge,h as T,i as ke,F as k,j as b,k as x,l as j,m as M,n as L,p as ye,q as xe,s as $e,u as Ce}from"./vendor.208fbc23.js";const we=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))l(_);new MutationObserver(_=>{for(const p of _)if(p.type==="childList")for(const t of p.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function r(_){const p={};return _.integrity&&(p.integrity=_.integrity),_.referrerpolicy&&(p.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?p.credentials="include":_.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(_){if(_.ep)return;_.ep=!0;const p=r(_);fetch(_.href,p)}};we();var g=(u,i)=>{const r=u.__vccOpts||u;for(const[l,_]of i)r[l]=_;return r};const Se={name:"App"};function je(u,i,r,l,_,p){const t=c("router-view");return h(),E(t)}var Oe=g(Se,[["render",je]]);const Te="modulepreload",D={},Ie="/ruleengine-ui-demo/",w=function(i,r){return!r||r.length===0?i():Promise.all(r.map(l=>{if(l=`${Ie}${l}`,l in D)return;D[l]=!0;const _=l.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const t=document.createElement("link");if(t.rel=_?"stylesheet":Te,_||(t.as="script",t.crossOrigin=""),t.href=l,document.head.appendChild(t),_)return new Promise((a,s)=>{t.addEventListener("load",a),t.addEventListener("error",s)})})).then(()=>i())},Ve=()=>w(()=>import("./demo-component-layout.4149473f.js"),["assets/demo-component-layout.4149473f.js","assets/vendor.208fbc23.js"]),ze=()=>w(()=>import("./demo-component-page.916052d7.js"),["assets/demo-component-page.916052d7.js","assets/vendor.208fbc23.js"]);var Ee=[{path:"component",redirect:"/component/installation",name:"component",component:Ve,children:[{path:":id",name:"component-content",props:!0,component:ze}]}];const Ae=()=>w(()=>import("./demo-layout.39f1f980.js"),["assets/demo-layout.39f1f980.js","assets/demo-header.e441b513.js","assets/vendor.208fbc23.js"]),Me=()=>w(()=>import("./demo-home.c718bf79.js"),["assets/demo-home.c718bf79.js","assets/vendor.208fbc23.js"]);var Le=[{path:"/",component:Ae,children:[{path:"",name:"home",component:Me},...Ee]}];const De=()=>w(()=>import("./demo-not-found.117466ed.js"),["assets/demo-not-found.117466ed.js","assets/demo-header.e441b513.js","assets/vendor.208fbc23.js"]);var Be=[{path:"/:pathMatch(.*)",name:"not-found",component:De}];const Ue=he({history:fe(),routes:[...Le,...Be]}),Fe={name:"demo-block"},qe={class:"demo-block"},Pe={class:"demo-block__source"},Re={class:"demo-block__code"};function Ne(u,i,r,l,_,p){const t=c("v-sidebar-section");return h(),f("div",qe,[n("div",Pe,[A(u.$slots,"default")]),n("div",Re,[e(t,{"bottom-border":!1,"header-border":!1,title:"Code"},{default:o(()=>[A(u.$slots,"code")]),_:3})])])}var We=g(Fe,[["render",Ne]]),He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:We});const Ke=`
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
`,Ge=`
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
`,Qe=`
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
`;var Je=[{name:"actionbar_basic_usage_html",code:Ke,lang:"html"},{name:"actionbar_disabled_action_usage_html",code:Ge,lang:"html"},{name:"actionbar_grouping_action_usage_html",code:Qe,lang:"html"}],B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Je});const Xe=`
<template>
  <v-action-list>
    <v-action-item title="Play" icon="play" @click="onClick" />
    <v-action-item title="Stop" icon="debug-stop" @click="onClick" />
    <v-action-item title="Add Item" icon="plus" @click="onClick" />
    <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,Ye=`
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item disabled icon="plus" @click="onClick" />
    <v-action-item disabled icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,Ze=`
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item icon="plus" @click="onClick" />
    <v-action-item icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,eo=`
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`,oo=`
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`;var to=[{name:"actionlist_basic_usage_html",code:Xe,lang:"html"},{name:"actionlist_disabled_action_usage_html",code:Ye,lang:"html"},{name:"actionlist_vertical_action_list_usage_html",code:Ze,lang:"html"},{name:"actionlist_action_with_label_usage_html",code:eo,lang:"html"},{name:"actionlist_vertical_action_with_label_usage_html",code:oo,lang:"html"}],U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:to});const no=`
<template>
  <v-autocomplete
    v-model="value"
    :data-source="fetchAutocompleteData"
    placeholder="Enter your text"
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
`,lo=`
<template>
  <v-autocomplete placeholder="Enter your text" disabled />
</template>
`,co=`
<template>
  <v-autocomplete
    v-model="value"
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
`;var ao=[{name:"autocomplete_basic_usage_html",code:no,lang:"html"},{name:"autocomplete_disabled_usage_html",code:lo,lang:"html"},{name:"autocomplete_with_icon_usage_html",code:co,lang:"html"}],F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ao});const io=`
<template>
  <v-layout gutter>
    <v-button>Default</v-button>
    <v-button secondary>Secondary</v-button>
  </v-layout>
</template>
`,so=`
<template>
  <v-layout gutter>
    <v-button disabled>Default</v-button>
    <v-button disabled secondary>Secondary</v-button>
  </v-layout>
</template>
`;var _o=[{name:"button_basic_usage_html",code:io,lang:"html"},{name:"button_disabled_html",code:so,lang:"html"}],q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_o});const uo=`
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
`,mo=`
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
`;var ro=[{name:"checkbox_basic_usage_html",code:uo,lang:"html"},{name:"checkbox_disabled_html",code:mo,lang:"html"}],P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ro});const po=`
<template>
  <v-content h-full scroll padding="md">
    <div class="demo-cube demo-cube-a demo-cube-h14" />
    <div class="demo-cube demo-cube-b demo-cube-h14" />
    <div class="demo-cube demo-cube-c demo-cube-h14" />
    <div class="demo-cube demo-cube-d demo-cube-h14" />
  </v-content>
</template>
`;var bo=[{name:"content_basic_usage_html",code:po,lang:"html"}],R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bo});const vo=`
<template>
  <v-layout>
    <v-draggable>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable>
      <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable>
      <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable>
      <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
  </v-layout>
</template>
`,ho=`
<template>
  <v-layout>
    <v-draggable hint>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable hint>
      <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable hint>
      <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable hint>
      <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
  </v-layout>
</template>
`,fo=`
<template>
  <v-layout>
    <v-draggable fixed>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable fixed>
      <div class="demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable fixed>
      <div class="demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
    <v-draggable fixed>
      <div class="demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
  </v-layout>
</template>
`,go=`
<template>
  <v-layout>
    <v-draggable disabled>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
  </v-layout>
</template>
`,ko=`
<template>
  <v-action-list>
    <v-draggable>
      <v-action-item title="Add" icon="add" @click="onClick" />
    </v-draggable>
    <v-draggable>
      <v-action-item title="Edit" icon="edit" @click="onClick" />
    </v-draggable>
    <v-draggable hint>
      <v-action-item title="Remove" icon="trash" @click="onClick" />
    </v-draggable>
    <v-draggable hint>
      <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
    </v-draggable>
  </v-action-list>
</template>
`;var yo=[{name:"draggable_basic_usage_html",code:vo,lang:"html"},{name:"draggable_with_hint_html",code:ho,lang:"html"},{name:"draggable_fixed_html",code:fo,lang:"html"},{name:"draggable_disabled_html",code:go,lang:"html"},{name:"draggable_actions_html",code:ko,lang:"html"}],N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yo});const xo=`
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
`;var $o=[{name:"dropdown_basic_usage_html",code:xo,lang:"html"}],W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$o});const Co=`
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
`,wo=`
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
`,So=`
<template>
  <v-fieldset label="Title">
    <template #label-actions>
      <v-action-list>
        <v-action-item icon="add" title="Add" />
        <v-action-item icon="history" title="History" />
        <v-action-item icon="trash" title="Remove" />
      </v-action-list>
    </template>
    <v-field-layout>
      <template #label>
        <v-label truncate>Label 1</v-label>
      </template>
      <template #value>
        <v-input placeholder="Enter your text" />
      </template>
    </v-field-layout>
  </v-fieldset>
</template>
`;var jo=[{name:"fieldset_basic_usage_html",code:Co,lang:"html"},{name:"fieldset_vertical_field_layout_html",code:wo,lang:"html"},{name:"fieldset_title_actions_html",code:So,lang:"html"}],H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});const Oo=`
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
`,To=`
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
`,Io=`
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
`,Vo=`
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
`;var zo=[{name:"floating_toolbar_basic_usage_html",code:Oo,lang:"html"},{name:"floating_toolbar_vertical_html",code:To,lang:"html"},{name:"floating_toolbar_fixed_html",code:Io,lang:"html"},{name:"floating_toolbar_with_labels_usage_html",code:Vo,lang:"html"}],K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zo});const Eo=`
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
`,Ao=`
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
`;var Mo=[{name:"icon_basic_usage_html",code:Eo,lang:"html"},{name:"codicons_html",code:Ao,lang:"html"}],G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mo});const Lo=`
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
`,Do=`
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
`,Bo=`
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
`,Uo=`
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
<\/script>
`;var Fo=[{name:"input_basic_usage_html",code:Lo,lang:"html"},{name:"input_disabled_html",code:Do,lang:"html"},{name:"input_with_icon_html",code:Bo,lang:"html"},{name:"input_message_html",code:Uo,lang:"html"}],Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fo});const qo=`
import { createApp } from 'vue'
import App from './App.vue'
import RuleEngineUI from '@ruleenginejs/ui'
// Add css styles
import "@ruleenginejs/ui/dist/normalize.css"
import '@ruleenginejs/ui/dist/style.css'
import '@ruleenginejs/ui/dist/dark.theme.css'

const app = createApp(App)

app.use(RuleEngineUI)

app.mount('#app')
`,Po=`
<v-action-bar>
  <v-action @click="onClick">
    <v-icon-play />
  </v-action>
</v-action-bar>
`;var Ro=[{name:"installation_usage_js",code:qo,lang:"javascript"},{name:"installation_usage_html",code:Po,lang:"html"}],J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro});const No=`
<template>
  <v-keybinding-label value="Ctrl+A" />
  <br />
  <v-keybinding-label value="Ctrl+C" />
</template>
`,Wo=`
<template>
  <v-keybinding-label value="Cmd+A" :separator="null" />
  <br />
  <v-keybinding-label value="Cmd+C" :separator="null" />
</template>
`;var Ho=[{name:"keybindinglabel_basic_usage_html",code:No,lang:"html"},{name:"keybindinglabel_other_separator_usage_html",code:Wo,lang:"html"}],X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ho});const Ko=`
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
`;var Go=[{name:"keyboard_shortcuts_basic_usage_html",code:Ko,lang:"html"}],Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Go});const Qo=`
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
`;var Jo=[{name:"label_basic_usage_html",code:Qo,lang:"html"}],Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jo});const Xo=`
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
`;var Yo=[{name:"layout_basic_html",code:Xo,lang:"html"}],ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yo});const Zo=`
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
`,et=`
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
`;var ot=[{name:"list_basic_usage_html",code:Zo,lang:"html"},{name:"list_focusable_html",code:et,lang:"html"}],oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ot});const tt=`
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
`;var nt=[{name:"node_graph_basic_usage_html",code:tt,lang:"html"}],te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});const lt=`
<template>
  <div class="scrollbar" style="height: 260px; overflow: auto">
    <v-layout gutter wrap>
      <div v-for="item in 10" :key="item" class="demo-cube demo-cube-num demo-cube-h14">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`,ct=`
<template>
  <div class="scrollbar" style="height: 70px; overflow: auto">
    <v-layout gutter>
      <div v-for="item in 20" :key="item" class="demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`;var at=[{name:"scrollbar_basic_usage_html",code:lt,lang:"html"},{name:"scrollbar_horizontal_scroll_html",code:ct,lang:"html"}],ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:at});const it=`
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
`,st=`
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
`;var dt=[{name:"selectbox_basic_usage_html",code:it,lang:"html"},{name:"selectbox_disabled_usage_html",code:st,lang:"html"}],le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dt});const _t=`
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
`,ut=`
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
`;var mt=[{name:"sidebar_basic_usage_html",code:_t,lang:"html"},{name:"sidebar_section_html",code:ut,lang:"html"}],ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});const rt=`
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
`;var pt=[{name:"space_basic_usage_html",code:rt,lang:"html"}],ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const bt=`
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
`,vt=`
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
`;var ht=[{name:"splitview_basic_usage_html",code:bt,lang:"html"},{name:"splitview_horizontal_usage_html",code:vt,lang:"html"}],ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht});const ft=`
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
`;var gt=[{name:"suggest_basic_usage_html",code:ft,lang:"html"}],se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt});const kt=`
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
`;var yt=[{name:"tabs_basic_usage_html",code:kt,lang:"html"}],de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yt});const xt=`
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
`;var $t=[{name:"treeview_basic_usage_html",code:xt,lang:"html"}],_e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$t});const Ct={"./component-action-bar.js":B,"./component-action-list.js":U,"./component-autocomplete.js":F,"./component-button.js":q,"./component-checkbox.js":P,"./component-content.js":R,"./component-draggable.js":N,"./component-dropdown.js":W,"./component-fieldset.js":H,"./component-floating-toolbar.js":K,"./component-icon.js":G,"./component-input.js":Q,"./component-installation.js":J,"./component-keybinding-label.js":X,"./component-keyboard-shortcuts.js":Y,"./component-label.js":Z,"./component-layout.js":ee,"./component-list.js":oe,"./component-node-graph.js":te,"./component-scrollbar.js":ne,"./component-selectbox.js":le,"./component-sidebar.js":ce,"./component-space.js":ae,"./component-splitview.js":ie,"./component-suggest.js":se,"./component-tabs.js":de,"./component-treeview.js":_e},O=[];for(const[,u]of Object.entries(Ct))O.push.apply(O,u.default);var wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const St={name:"demo-code",props:{lang:{type:String,default:null},code:{type:String,default:null},name:{type:String,default:null}},setup(u){const{lang:i,code:r,name:l}=ge(u),_=T(()=>O.find(a=>a.name===l.value)),p=T(()=>{var a;return r.value||((a=_.value)==null?void 0:a.code.trim())}),t=T(()=>{var a;return i.value||((a=_.value)==null?void 0:a.lang)});return{content:p,language:t}}};function jt(u,i,r,l,_,p){const t=c("highlightjs");return l.content?(h(),E(t,{key:0,autodetect:!1,language:l.language,code:l.content},null,8,["language","code"])):ke("",!0)}var Ot=g(St,[["render",jt]]),Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ot});const It={name:"demo-component-action-bar",setup(){return{onClick:()=>{}}}},Vt=n("h2",null,"ActionBar",-1),zt=n("h3",null,"Basic Usage",-1),Et=n("h3",null,"Disabled Action",-1),At=n("h3",null,"Grouping Action",-1),Mt=n("span",{class:"codicon codicon-play"},null,-1),Lt=n("span",{class:"codicon codicon-stop"},null,-1),Dt=n("span",{class:"codicon codicon-plus"},null,-1),Bt=n("span",{class:"codicon codicon-zoom-in"},null,-1),Ut=n("span",{class:"codicon codicon-zoom-out"},null,-1);function Ft(u,i,r,l,_,p){const t=c("v-icon-play"),a=c("v-action"),s=c("v-icon-stop"),d=c("v-icon-plus"),m=c("v-icon-folder"),v=c("v-action-bar"),y=c("demo-code"),$=c("demo-block"),C=c("v-action-group");return h(),f(k,null,[Vt,zt,e($,null,{code:o(()=>[e(y,{name:"actionbar_basic_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(s)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[e(m)]),_:1},8,["onClick"])]),_:1})]),_:1}),Et,e($,null,{code:o(()=>[e(y,{name:"actionbar_disabled_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{disabled:"",onClick:l.onClick},{default:o(()=>[e(s)]),_:1},8,["onClick"])]),_:1})]),_:1}),At,e($,null,{code:o(()=>[e(y,{name:"actionbar_grouping_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[Mt]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[Lt]),_:1},8,["onClick"])]),_:1}),e(a,{onClick:l.onClick},{default:o(()=>[Dt]),_:1},8,["onClick"]),e(C,null,{default:o(()=>[e(a,{onClick:l.onClick},{default:o(()=>[Bt]),_:1},8,["onClick"]),e(a,{onClick:l.onClick},{default:o(()=>[Ut]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var qt=g(It,[["render",Ft]]),Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qt});const Rt={name:"demo-component-action-list",setup(){return{onClick:()=>{}}}},Nt=n("h2",null,"ActionList",-1),Wt=n("h3",null,"Basic Usage",-1),Ht=n("h3",null,"Disabled Action Item",-1),Kt=n("h3",null,"Vertical Action List",-1),Gt=n("h3",null,"Action With Label",-1),Qt=b("Play"),Jt=b("Stop"),Xt=b("Add Item"),Yt=b("Choose Folder"),Zt=n("h3",null,"Vertcal Action With Label",-1),en=b("Play"),on=b("Stop"),tn=b("Add Item"),nn=b("Choose Folder");function ln(u,i,r,l,_,p){const t=c("v-action-item"),a=c("v-action-list"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Nt,Wt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{title:"Play",icon:"play",onClick:l.onClick},null,8,["onClick"]),e(t,{title:"Stop",icon:"debug-stop",onClick:l.onClick},null,8,["onClick"]),e(t,{title:"Add Item",icon:"plus",onClick:l.onClick},null,8,["onClick"]),e(t,{title:"Choose Folder",icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1}),Ht,e(d,null,{code:o(()=>[e(s,{name:"actionlist_disabled_action_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"plus",onClick:l.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1}),Kt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_vertical_action_list_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"plus",onClick:l.onClick},null,8,["onClick"]),e(t,{icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1}),Gt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_action_with_label_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},{default:o(()=>[Qt]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},{default:o(()=>[Jt]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:l.onClick},{default:o(()=>[Xt]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:l.onClick},{default:o(()=>[Yt]),_:1},8,["onClick"])]),_:1})]),_:1}),Zt,e(d,null,{code:o(()=>[e(s,{name:"actionlist_vertical_action_with_label_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:l.onClick},{default:o(()=>[en]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:l.onClick},{default:o(()=>[on]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:l.onClick},{default:o(()=>[tn]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:l.onClick},{default:o(()=>[nn]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var cn=g(Rt,[["render",ln]]),an=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cn});const sn={name:"demo-component-autocomplete",setup(){const u=x(""),i=x([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),r=_=>_?i.value.filter(p=>p.text.toLowerCase().includes(_.toLowerCase())):i.value,l=(_,p,t)=>new Promise(a=>{const s=setTimeout(()=>{a(r(_))},100);t.onCancellationRequested(()=>{clearTimeout(s),a()})});return{value:u,withIconValue:x(""),fetchAutocompleteData:l,onClick:()=>{}}}},dn=n("h2",null,"Autocomplete",-1),_n=n("h3",null,"Basic Usage",-1),un=n("h3",null,"Disabled Autocomplete",-1),mn=n("h3",null,"Autocomplete With Icon",-1),rn=n("span",{class:"codicon codicon-file-code"},null,-1);function pn(u,i,r,l,_,p){const t=c("v-autocomplete"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[dn,_n,e(s,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=d=>l.value=d),"data-source":l.fetchAutocompleteData,placeholder:"Enter your text","loading-message":"Loading...","empty-result-message":"No matching results."},null,8,["modelValue","data-source"])]),_:1}),un,e(s,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_disabled_usage_html"})]),default:o(()=>[e(t,{placeholder:"Enter your text",disabled:""})]),_:1}),mn,e(s,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_with_icon_usage_html"})]),default:o(()=>[e(t,{modelValue:l.withIconValue,"onUpdate:modelValue":i[1]||(i[1]=d=>l.withIconValue=d),"data-source":l.fetchAutocompleteData,placeholder:"Enter your text","loading-message":"Loading...","empty-result-message":"No matching results.","icon-clickable":"",onIconClick:l.onClick},{icon:o(()=>[rn]),_:1},8,["modelValue","data-source","onIconClick"])]),_:1})],64)}var bn=g(sn,[["render",pn]]),vn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bn});const hn={name:"demo-component-button"},fn=n("h2",null,"Button",-1),gn=n("p",null,"Simple button.",-1),kn=n("h3",null,"Basic Usage",-1),yn=b("Default"),xn=b("Secondary"),$n=n("h3",null,"Disabled Button",-1),Cn=b("Default"),wn=b("Secondary");function Sn(u,i,r,l,_,p){const t=c("v-button"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[fn,gn,kn,e(d,null,{code:o(()=>[e(s,{name:"button_basic_usage_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,null,{default:o(()=>[yn]),_:1}),e(t,{secondary:""},{default:o(()=>[xn]),_:1})]),_:1})]),_:1}),$n,e(d,null,{code:o(()=>[e(s,{name:"button_disabled_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,{disabled:""},{default:o(()=>[Cn]),_:1}),e(t,{disabled:"",secondary:""},{default:o(()=>[wn]),_:1})]),_:1})]),_:1})],64)}var jn=g(hn,[["render",Sn]]),On=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jn});const Tn={name:"demo-component-checkbox",setup(){const u=x(!0),i=x(!1),r=x(!0),l=x(!1);return{checked:u,unchecked:i,disabledChecked:r,disabledUnchecked:l}}},In=n("h2",null,"Checkbox",-1),Vn=n("h3",null,"Basic Usage",-1),zn=b("Checked"),En=b("Unchecked"),An=n("h3",null,"Disabled State",-1),Mn=b("Checked"),Ln=b("Unchecked");function Dn(u,i,r,l,_,p){const t=c("v-checkbox"),a=c("v-label"),s=c("v-layout"),d=c("demo-code"),m=c("demo-block");return h(),f(k,null,[In,Vn,e(m,null,{code:o(()=>[e(d,{name:"checkbox_basic_usage_html"})]),default:o(()=>[e(s,{gutter:"",wrap:""},{default:o(()=>[e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_1",modelValue:l.checked,"onUpdate:modelValue":i[0]||(i[0]=v=>l.checked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_1"},{default:o(()=>[zn]),_:1})]),_:1}),e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_2",modelValue:l.unchecked,"onUpdate:modelValue":i[1]||(i[1]=v=>l.unchecked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_2"},{default:o(()=>[En]),_:1})]),_:1})]),_:1})]),_:1}),An,e(m,null,{code:o(()=>[e(d,{name:"checkbox_disabled_html"})]),default:o(()=>[e(s,{gutter:"",wrap:""},{default:o(()=>[e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_3",modelValue:l.disabledChecked,"onUpdate:modelValue":i[2]||(i[2]=v=>l.disabledChecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_3"},{default:o(()=>[Mn]),_:1})]),_:1}),e(s,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_4",modelValue:l.disabledUnchecked,"onUpdate:modelValue":i[3]||(i[3]=v=>l.disabledUnchecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_4"},{default:o(()=>[Ln]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Bn=g(Tn,[["render",Dn]]),Un=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bn});const Fn={name:"demo-component-content"},qn=n("h2",null,"Content",-1),Pn=n("h3",null,"Basic Usage",-1),Rn={class:"demo-cube demo-cube-h52"},Nn=n("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Wn=n("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),Hn=n("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),Kn=n("div",{class:"demo-cube demo-cube-d demo-cube-h14"},null,-1);function Gn(u,i,r,l,_,p){const t=c("v-content"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[qn,Pn,e(s,null,{code:o(()=>[e(a,{name:"content_basic_usage_html"})]),default:o(()=>[n("div",Rn,[e(t,{"h-full":"",scroll:"",padding:"md"},{default:o(()=>[Nn,Wn,Hn,Kn]),_:1})])]),_:1})],64)}var Qn=g(Fn,[["render",Gn]]),Jn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qn});const Xn={name:"demo-component-draggable",setup(){return{onClick:()=>{}}}},Yn=n("h2",null,"Draggable",-1),Zn=n("h3",null,"Basic Usage",-1),el=n("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),ol=n("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),tl=n("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),nl=n("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),ll=n("h3",null,"Draggable With Hint",-1),cl=n("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),al=n("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),il=n("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),sl=n("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),dl=n("h3",null,"Fixed Draggable",-1),_l=n("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),ul=n("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),ml=n("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),rl=n("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),pl=n("h3",null,"Disabled Draggable",-1),bl=n("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),vl=n("h3",null,"Draggable Actions",-1);function hl(u,i,r,l,_,p){const t=c("v-draggable"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block"),m=c("v-action-item"),v=c("v-action-list");return h(),f(k,null,[Yn,Zn,e(d,null,{code:o(()=>[e(s,{name:"draggable_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,null,{default:o(()=>[el]),_:1}),e(t,null,{default:o(()=>[ol]),_:1}),e(t,null,{default:o(()=>[tl]),_:1}),e(t,null,{default:o(()=>[nl]),_:1})]),_:1})]),_:1}),ll,e(d,null,{code:o(()=>[e(s,{name:"draggable_with_hint_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{hint:""},{default:o(()=>[cl]),_:1}),e(t,{hint:""},{default:o(()=>[al]),_:1}),e(t,{hint:""},{default:o(()=>[il]),_:1}),e(t,{hint:""},{default:o(()=>[sl]),_:1})]),_:1})]),_:1}),dl,e(d,null,{code:o(()=>[e(s,{name:"draggable_fixed_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{fixed:""},{default:o(()=>[_l]),_:1}),e(t,{fixed:""},{default:o(()=>[ul]),_:1}),e(t,{fixed:""},{default:o(()=>[ml]),_:1}),e(t,{fixed:""},{default:o(()=>[rl]),_:1})]),_:1})]),_:1}),pl,e(d,null,{code:o(()=>[e(s,{name:"draggable_disabled_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{disabled:""},{default:o(()=>[bl]),_:1})]),_:1})]),_:1}),vl,e(d,null,{code:o(()=>[e(s,{name:"draggable_actions_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(t,null,{default:o(()=>[e(m,{title:"Add",icon:"add",onClick:l.onClick},null,8,["onClick"])]),_:1}),e(t,null,{default:o(()=>[e(m,{title:"Edit",icon:"edit",onClick:l.onClick},null,8,["onClick"])]),_:1}),e(t,{hint:""},{default:o(()=>[e(m,{title:"Remove",icon:"trash",onClick:l.onClick},null,8,["onClick"])]),_:1}),e(t,{hint:""},{default:o(()=>[e(m,{title:"Choose Folder",icon:"folder",onClick:l.onClick},null,8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var fl=g(Xn,[["render",hl]]),gl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fl});const kl={name:"demo-component-dropdown",setup(){return{dropdownOpen:x(!1),items:x([{id:1,text:"Item 1",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:2,text:"Item 2",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:3,text:"Item 3",icon:"v-icon-doc-text",iconColor:"#B69E24"}])}}},yl=n("h2",null,"Dropdown",-1),xl=n("h3",null,"Basic Usage",-1),$l=b(" Toggle Dropdown ");function Cl(u,i,r,l,_,p){const t=c("v-button"),a=c("v-list"),s=c("v-content"),d=c("v-dropdown"),m=c("demo-code"),v=c("demo-block");return h(),f(k,null,[yl,xl,e(v,null,{code:o(()=>[e(m,{name:"dropdown_basic_usage_html"})]),default:o(()=>[e(t,{id:"button-1",onClick:i[0]||(i[0]=y=>l.dropdownOpen=!l.dropdownOpen)},{default:o(()=>[$l]),_:1}),e(d,{visible:l.dropdownOpen,"onUpdate:visible":i[2]||(i[2]=y=>l.dropdownOpen=y),anchor:"button-1","anchor-constraint":"","offset-y":4},{default:o(()=>[e(s,{fill:""},{default:o(()=>[e(a,{items:l.items,"onUpdate:selected":i[1]||(i[1]=y=>l.dropdownOpen=!1)},null,8,["items"])]),_:1})]),_:1},8,["visible"])]),_:1})],64)}var wl=g(kl,[["render",Cl]]),Sl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wl});const jl={name:"demo-component-fieldset"},Ol=n("h2",null,"Fieldset",-1),Tl=n("h3",null,"Basic Usage",-1),Il=b("Label 1"),Vl=b("Label 2"),zl=n("h3",null,"Vertical Field Layout",-1),El=b("Label 1"),Al=b("Label 2"),Ml=n("h3",null,"Fieldset Title Actions",-1),Ll=b("Label 1");function Dl(u,i,r,l,_,p){const t=c("v-label"),a=c("v-input"),s=c("v-field-layout"),d=c("v-fieldset"),m=c("demo-code"),v=c("demo-block"),y=c("v-action-item"),$=c("v-action-list");return h(),f(k,null,[Ol,Tl,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(m,{name:"fieldset_basic_usage_html"})]),default:o(()=>[e(d,{label:"Title"},{default:o(()=>[e(s,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Il]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(s,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Vl]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),zl,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(m,{name:"fieldset_vertical_field_layout_html"})]),default:o(()=>[e(d,{label:"Title"},{default:o(()=>[e(s,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[El]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(s,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Al]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),Ml,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(m,{name:"fieldset_title_actions_html"})]),default:o(()=>[e(d,{label:"Title"},{"label-actions":o(()=>[e($,null,{default:o(()=>[e(y,{icon:"add",title:"Add"}),e(y,{icon:"history",title:"History"}),e(y,{icon:"trash",title:"Remove"})]),_:1})]),default:o(()=>[e(s,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Ll]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1})],64)}var Bl=g(jl,[["render",Dl]]),Ul=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bl});const Fl={name:"demo-component-floating-toolbar"},ql=n("h2",null,"FloatingToolbar",-1),Pl=n("h3",null,"Basic Usage",-1),Rl={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Nl=n("h3",null,"Vertical Floating Toolbar",-1),Wl={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Hl=n("h3",null,"Fixed Floating Toolbar",-1),Kl={class:"demo-cube demo-cube-c demo-cube-h14"},Gl=n("h3",null,"Floating Toolbar With Labels",-1),Ql={class:"demo-cube demo-cube-b demo-cube-h52 demo-cube-relative"},Jl=b("Add Item"),Xl=b("History"),Yl=b("Choose Folder"),Zl={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},ec=b("Add Item"),oc=b("History"),tc=b("Choose Folder"),nc=b("Play"),lc=b("Stop");function cc(u,i,r,l,_,p){const t=c("v-action-item"),a=c("v-action-list"),s=c("v-floating-toolbar"),d=c("demo-code"),m=c("demo-block"),v=c("v-layout");return h(),f(k,null,[ql,Pl,e(m,null,{code:o(()=>[e(d,{name:"floating_toolbar_basic_usage_html"})]),default:o(()=>[n("div",Rl,[e(s,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Nl,e(m,null,{code:o(()=>[e(d,{name:"floating_toolbar_vertical_html"})]),default:o(()=>[n("div",Wl,[e(s,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Hl,e(m,null,{code:o(()=>[e(d,{name:"floating_toolbar_fixed_html"})]),default:o(()=>[n("div",Kl,[e(s,{fixed:"",x:300,y:6},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Gl,e(m,null,{code:o(()=>[e(d,{name:"floating_toolbar_with_labels_usage_html"})]),default:o(()=>[e(v,{"h-full":"","w-full":""},{default:o(()=>[e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[n("div",Ql,[e(s,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[Jl]),_:1}),e(t,{icon:"history"},{default:o(()=>[Xl]),_:1}),e(t,{icon:"folder"},{default:o(()=>[Yl]),_:1})]),_:1})]),_:1})])]),_:1}),e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[n("div",Zl,[e(s,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[ec]),_:1}),e(t,{icon:"history"},{default:o(()=>[oc]),_:1}),e(t,{icon:"folder"},{default:o(()=>[tc]),_:1}),e(t,{icon:"play",disabled:""},{default:o(()=>[nc]),_:1}),e(t,{icon:"debug-stop"},{default:o(()=>[lc]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})],64)}var ac=g(Fl,[["render",cc]]),ic=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ac});const sc={name:"demo-component-space"},dc=n("h2",null,"Icon",-1),_c=n("p",null,"Library provides some svg icons.",-1),uc=n("h3",null,"Built-in Icons",-1),mc=n("h3",null,"Codicons",-1),rc=n("p",null,[b(" The "),n("a",{href:"https://github.com/microsoft/vscode-codicons",class:"demo-external-link",target:"_blank"},"Codicon library"),b(" contains all the icons used in VS Code. "),n("a",{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",class:"demo-external-link",target:"_blank"},"All list of icons"),b(". ")],-1),pc=n("i",{class:"codicon codicon-account"},null,-1),bc=n("i",{class:"codicon codicon-activate-breakpoints"},null,-1),vc=n("i",{class:"codicon codicon-add"},null,-1),hc=n("i",{class:"codicon codicon-alert"},null,-1),fc=n("i",{class:"codicon codicon-archive"},null,-1),gc=n("i",{class:"codicon codicon-array"},null,-1);function kc(u,i,r,l,_,p){const t=c("v-icon-book"),a=c("v-icon-checkmark"),s=c("v-icon-chevron-down"),d=c("v-icon-circle"),m=c("v-icon-close"),v=c("v-icon-doc-text"),y=c("v-icon-file-menu"),$=c("v-icon-folder"),C=c("v-icon-play"),ue=c("v-icon-stop"),me=c("v-icon-plus-bold"),re=c("v-icon-plus"),pe=c("v-icon-script"),be=c("v-icon-sidebar-left"),ve=c("v-icon-sidebar-right"),I=c("v-layout"),V=c("demo-code"),z=c("demo-block");return h(),f(k,null,[dc,_c,uc,e(z,null,{code:o(()=>[e(V,{name:"icon_basic_usage_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[e(t),e(a),e(s),e(d),e(m),e(v),e(y),e($),e(C),e(ue),e(me),e(re),e(pe),e(be),e(ve)]),_:1})]),_:1}),mc,rc,e(z,null,{code:o(()=>[e(V,{name:"codicons_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[pc,bc,vc,hc,fc,gc]),_:1})]),_:1})],64)}var yc=g(sc,[["render",kc]]),xc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yc});const $c={name:"demo-component-button",setup(){return{input:x(""),disabledInput:x(""),inputWithIcon:x(""),inputWithMessage:x("")}}},Cc=n("h2",null,"Input",-1),wc=n("h3",null,"Basic Usage",-1),Sc=n("h3",null,"Disabled Input",-1),jc=n("h3",null,"Input with icon",-1),Oc=n("i",{class:"codicon codicon-file-add"},null,-1),Tc=n("h3",null,"Input message",-1);function Ic(u,i,r,l,_,p){const t=c("v-input"),a=c("demo-code"),s=c("demo-block"),d=c("v-icon-file-menu");return h(),f(k,null,[Cc,wc,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:l.input,"onUpdate:modelValue":i[0]||(i[0]=m=>l.input=m),placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),Sc,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_disabled_html"})]),default:o(()=>[e(t,{modelValue:l.disabledInput,"onUpdate:modelValue":i[1]||(i[1]=m=>l.disabledInput=m),disabled:"",placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),jc,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_with_icon_html"})]),default:o(()=>[e(t,{modelValue:l.inputWithIcon,"onUpdate:modelValue":i[2]||(i[2]=m=>l.inputWithIcon=m),placeholder:"Enter your text"},{icon:o(()=>[e(d)]),_:1},8,["modelValue"]),e(t,{modelValue:l.inputWithIcon,"onUpdate:modelValue":i[3]||(i[3]=m=>l.inputWithIcon=m),placeholder:"Enter your text"},{icon:o(()=>[Oc]),_:1},8,["modelValue"])]),_:1}),Tc,e(s,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_message_html"})]),default:o(()=>[e(t,{modelValue:l.inputWithMessage,"onUpdate:modelValue":i[4]||(i[4]=m=>l.inputWithMessage=m),placeholder:"Error message",error:"",message:"Some error message"},null,8,["modelValue"]),e(t,{modelValue:l.inputWithMessage,"onUpdate:modelValue":i[5]||(i[5]=m=>l.inputWithMessage=m),placeholder:"Warning message",warning:"",message:"Some warning message"},null,8,["modelValue"]),e(t,{modelValue:l.inputWithMessage,"onUpdate:modelValue":i[6]||(i[6]=m=>l.inputWithMessage=m),placeholder:"Info message",info:"",message:"Some info message"},null,8,["modelValue"])]),_:1})],64)}var Vc=g($c,[["render",Ic]]),zc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vc});const Ec={name:"demo-component-installation"},Ac=n("h2",null,"Installation",-1),Mc=n("h3",null,"npm",-1),Lc=n("p",null,"Add codicons (optional)",-1),Dc=n("p",null,"In your code",-1),Bc=n("h3",null,"Usage",-1),Uc=n("p",null,"In your templates",-1);function Fc(u,i,r,l,_,p){const t=c("demo-code");return h(),f(k,null,[Ac,Mc,e(t,{lang:"shell",code:"npm install @ruleenginejs/ui"}),Lc,e(t,{lang:"shell",code:"npm install @vscode/codicons"}),Dc,e(t,{lang:"javascript",code:'import "@vscode/codicons/dist/codicon.css"'}),Bc,e(t,{name:"installation_usage_js"}),Uc,e(t,{name:"installation_usage_html"})],64)}var qc=g(Ec,[["render",Fc]]),Pc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qc});const Rc={name:"demo-component-keybinding-label"},Nc=n("h2",null,"KeybindingLabel",-1),Wc=n("h3",null,"Basic Usage",-1),Hc=n("br",null,null,-1),Kc=n("h3",null,"Mac Separator",-1),Gc=n("br",null,null,-1);function Qc(u,i,r,l,_,p){const t=c("v-keybinding-label"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Nc,Wc,e(s,null,{code:o(()=>[e(a,{name:"keybindinglabel_basic_usage_html"})]),default:o(()=>[e(t,{value:"Ctrl+A"}),Hc,e(t,{value:"Ctrl+C"})]),_:1}),Kc,e(s,null,{code:o(()=>[e(a,{name:"keybindinglabel_other_separator_usage_html"})]),default:o(()=>[e(t,{value:"Cmd+A",separator:null}),Gc,e(t,{value:"Cmd+C",separator:null})]),_:1})],64)}var Jc=g(Rc,[["render",Qc]]),Xc=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jc});const Yc={name:"demo-component-keyboard-shortcuts",setup(){return{shortcuts:j([{title:"Copy",key:"Ctrl+C"},{title:"Paste",key:"Ctrl+V"}])}}},Zc=n("h2",null,"KeyboardShortcuts",-1),ea=n("h3",null,"Basic Usage",-1);function oa(u,i,r,l,_,p){const t=c("v-keyboard-shortcuts"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Zc,ea,e(s,null,{code:o(()=>[e(a,{name:"keyboard_shortcuts_basic_usage_html"})]),default:o(()=>[e(t,{value:l.shortcuts},null,8,["value"])]),_:1})],64)}var ta=g(Yc,[["render",oa]]),na=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ta});const la={name:"demo-component-label",setup(){return{value:x(!1)}}},ca=n("h2",null,"Label",-1),aa=n("h3",null,"Basic Usage",-1),ia=b("Label 1"),sa=b("Label 2");function da(u,i,r,l,_,p){const t=c("v-label"),a=c("v-input"),s=c("v-field-layout"),d=c("v-checkbox"),m=c("v-fieldset"),v=c("demo-code"),y=c("demo-block");return h(),f(k,null,[ca,aa,e(y,{class:"demo-label-block"},{code:o(()=>[e(v,{name:"label_basic_usage_html"})]),default:o(()=>[e(m,null,{default:o(()=>[e(s,null,{label:o(()=>[e(t,{truncate:"",for:"input1"},{default:o(()=>[ia]),_:1})]),value:o(()=>[e(a,{id:"input1",placeholder:"Enter your text"})]),_:1}),e(s,null,{label:o(()=>[e(t,{truncate:"",for:"checkbox1"},{default:o(()=>[sa]),_:1})]),value:o(()=>[e(d,{id:"checkbox1",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=$=>l.value=$)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)}var _a=g(la,[["render",da]]),ua=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_a});const ma={name:"demo-component-layout"},ra=n("h2",null,"Layout",-1),pa=n("p",null,"Quickly create layouts with no styling on flex.",-1),ba=n("h3",null,"Basic layout",-1),va={class:"demo-cube demo-cube-h60"},ha=n("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),fa=n("div",{class:"demo-cube demo-cube-b demo-cube-w52"},null,-1),ga=n("div",{class:"demo-cube demo-cube-c"},null,-1);function ka(u,i,r,l,_,p){const t=c("v-layout"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[ra,pa,ba,e(s,null,{code:o(()=>[e(a,{name:"layout_basic_html"})]),default:o(()=>[n("div",va,[e(t,{"h-full":"","w-full":"",vertical:""},{default:o(()=>[e(t,{"not-shrink":""},{default:o(()=>[ha]),_:1}),e(t,{"all-distr":"","h-full":""},{default:o(()=>[e(t,{"h-full":"","not-shrink":""},{default:o(()=>[fa]),_:1}),e(t,{"h-full":"","all-distr":""},{default:o(()=>[ga]),_:1})]),_:1})]),_:1})])]),_:1})],64)}var ya=g(ma,[["render",ka]]),xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ya});const $a={name:"demo-component-list",setup(){const u=j([]),i=x({id:1}),r=x({id:1});for(let l=0;l<15;l++)u.push({id:l+1,text:`Item ${l+1}`,icon:"v-icon-doc-text"});return{items:u,selectedItem:i,focusableSelectedItem:r}}},Ca=n("h2",null,"List",-1),wa=n("p",null,"Display a set of data with flat list.",-1),Sa=n("h3",null,"Basic Usage",-1),ja={class:"demo-cube demo-cube-h52"},Oa=n("h3",null,"Focusable",-1),Ta={class:"demo-cube demo-cube-h52"};function Ia(u,i,r,l,_,p){const t=c("v-list"),a=c("v-content"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Ca,wa,Sa,e(d,null,{code:o(()=>[e(s,{name:"list_basic_usage_html"})]),default:o(()=>[n("div",ja,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{items:l.items,selected:l.selectedItem,"onUpdate:selected":i[0]||(i[0]=m=>l.selectedItem=m)},null,8,["items","selected"])]),_:1})])]),_:1}),Oa,e(d,null,{code:o(()=>[e(s,{name:"list_focusable_html"})]),default:o(()=>[n("div",Ta,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{"tab-index":0,items:l.items,selected:l.focusableSelectedItem,"onUpdate:selected":i[1]||(i[1]=m=>l.focusableSelectedItem=m)},null,8,["items","selected"])]),_:1})])]),_:1})],64)}var Va=g($a,[["render",Ia]]),za=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Va});const Ea={name:"demo-component-node-graph"},Aa=n("h2",null,"Node Graph",-1),Ma=n("p",null,"Graph of nodes connected via ports using connectors.",-1),La=n("h3",null,"Basic Usage",-1),Da={class:"demo-cube demo-cube-h60"},Ba=b(" in port "),Ua=b(" out port ");function Fa(u,i,r,l,_,p){const t=c("v-graph-port"),a=c("v-graph-circle-node"),s=c("v-icon-doc-text"),d=c("v-icon-script"),m=c("v-graph-node"),v=c("v-graph-connection"),y=c("v-graph-canvas"),$=c("demo-code"),C=c("demo-block");return h(),f(k,null,[Aa,Ma,La,e(C,null,{code:o(()=>[e($,{name:"node_graph_basic_usage_html"})]),default:o(()=>[n("div",Da,[e(y,null,{node:o(()=>[e(a,{id:1,x:100,y:100,title:"s"},{port:o(()=>[e(t,{id:"start_port"})]),_:1}),e(a,{id:3,x:650,y:100,title:"e"},{port:o(()=>[e(t,{id:"end_port"})]),_:1}),e(m,{id:2,x:300,y:10,title:"Simple Node"},{"header-left-icon":o(()=>[e(s)]),"header-right-icon":o(()=>[e(d)]),left:o(()=>[e(t,{id:"in_port",direction:"left"},{default:o(()=>[Ba]),_:1})]),right:o(()=>[e(t,{id:"out_port",direction:"right"},{default:o(()=>[Ua]),_:1})]),_:1})]),connection:o(()=>[e(v,{from:{nodeId:1,portId:"start_port"},to:{nodeId:2,portId:"in_port"}}),e(v,{from:{nodeId:2,portId:"out_port"},to:{nodeId:3,portId:"end_port"}})]),_:1})])]),_:1})],64)}var qa=g(Ea,[["render",Fa]]),Pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qa});const Ra={name:"demo-component-scrollbar"},Na=n("h2",null,"Scrollbar",-1),Wa=n("h3",null,"Basic Usage",-1),Ha={class:"scrollbar",style:{height:"260px",overflow:"auto"}},Ka=n("h3",null,"Horizontal Scroll",-1),Ga={class:"scrollbar",style:{height:"70px",overflow:"auto"}};function Qa(u,i,r,l,_,p){const t=c("v-layout"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Na,Wa,e(s,null,{code:o(()=>[e(a,{name:"scrollbar_basic_usage_html"})]),default:o(()=>[n("div",Ha,[e(t,{gutter:"",wrap:""},{default:o(()=>[(h(),f(k,null,M(10,d=>n("div",{key:d,class:"demo-cube demo-cube-num demo-cube-h14"},L(d),1)),64))]),_:1})])]),_:1}),Ka,e(s,null,{code:o(()=>[e(a,{name:"scrollbar_horizontal_scroll_html"})]),default:o(()=>[n("div",Ga,[e(t,{gutter:""},{default:o(()=>[(h(),f(k,null,M(20,d=>n("div",{key:d,class:"demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink"},L(d),1)),64))]),_:1})])]),_:1})],64)}var Ja=g(Ra,[["render",Qa]]),Xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ja});const Ya={name:"demo-component-selectbox",setup(){const u=x("Option 1"),i=j([{text:"Option 1",value:"Option 1"},{text:"Option 2",value:"Option 2"},{text:"Option 3",value:"Option 3"},{text:"Option 4",value:"Option 4"},{text:"Option 5",value:"Option 5"}]),r=x("Option 1");return{options:i,value:u,disabledValue:r}}},Za=n("h2",null,"SelectBox",-1),ei=n("h3",null,"Basic Usage",-1),oi=n("h3",null,"Disabled Select",-1);function ti(u,i,r,l,_,p){const t=c("v-select-box"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[Za,ei,e(s,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=d=>l.value=d),items:l.options},null,8,["modelValue","items"])]),_:1}),oi,e(s,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_disabled_usage_html"})]),default:o(()=>[e(t,{modelValue:l.disabledValue,"onUpdate:modelValue":i[1]||(i[1]=d=>l.disabledValue=d),items:l.options,disabled:""},null,8,["modelValue","items"])]),_:1})],64)}var ni=g(Ya,[["render",ti]]),li=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ni});const ci={name:"demo-component-sidebar"},ai=n("h2",null,"Sidebar",-1),ii=n("h3",null,"Basic Usage",-1),si={class:"demo-cube demo-cube-h60"},di=n("div",{class:"demo-cube demo-cube-a"},null,-1),_i=n("h3",null,"Sidebar Section",-1),ui={class:"demo-cube demo-cube-h60"},mi=n("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),ri=n("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),pi=n("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),bi=n("div",{class:"demo-cube demo-cube-d"},null,-1);function vi(u,i,r,l,_,p){const t=c("v-sidebar"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block"),m=c("v-sidebar-section"),v=c("v-content");return h(),f(k,null,[ai,ii,e(d,null,{code:o(()=>[e(s,{name:"sidebar_basic_usage_html"})]),default:o(()=>[n("div",si,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":""})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[di]),_:1})]),_:1})])]),_:1}),_i,e(d,null,{code:o(()=>[e(s,{name:"sidebar_section_html"})]),default:o(()=>[n("div",ui,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":"","lt-border":"","rt-border":""},{default:o(()=>[e(v,{"w-full":"","h-full":"",scroll:""},{default:o(()=>[e(m,{title:"Section A"},{default:o(()=>[mi]),_:1}),e(m,{title:"Section B"},{default:o(()=>[ri]),_:1}),e(m,{title:"Section C","bottom-border":!1},{default:o(()=>[pi]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[bi]),_:1})]),_:1})])]),_:1})],64)}var hi=g(ci,[["render",vi]]),fi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hi});const gi={name:"demo-component-space"},ki=n("h2",null,"Space",-1),yi=n("p",null,"Space between two elements.",-1),xi=n("h3",null,"Basic Usage",-1),$i=n("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),Ci=n("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),wi=n("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),Si=n("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1);function ji(u,i,r,l,_,p){const t=c("v-space"),a=c("v-layout"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[ki,yi,xi,e(d,null,{code:o(()=>[e(s,{name:"space_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[$i,e(t),Ci,e(t),wi,e(t),Si]),_:1})]),_:1})],64)}var Oi=g(gi,[["render",ji]]),Ti=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oi});const Ii={name:"demo-component-splitview"},Vi=n("h2",null,"SplitView",-1),zi=n("h3",null,"Basic Usage",-1),Ei={class:"demo-cube demo-cube-h60"},Ai=n("div",{class:"demo-cube demo-cube-a"},null,-1),Mi=n("div",{class:"demo-cube demo-cube-b"},null,-1),Li=n("div",{class:"demo-cube demo-cube-c"},null,-1),Di=n("h3",null,"Horizontal SplitView",-1),Bi={class:"demo-cube demo-cube-h60"},Ui=n("div",{class:"demo-cube demo-cube-a"},null,-1),Fi=n("div",{class:"demo-cube demo-cube-b"},null,-1),qi=n("div",{class:"demo-cube demo-cube-c"},null,-1);function Pi(u,i,r,l,_,p){const t=c("v-split-pane"),a=c("v-split-view"),s=c("demo-code"),d=c("demo-block");return h(),f(k,null,[Vi,zi,e(d,null,{code:o(()=>[e(s,{name:"splitview_basic_usage_html"})]),default:o(()=>[n("div",Ei,[e(a,{"snap-offset":30},{default:o(()=>[e(t,{size:"200px","min-size":40},{default:o(()=>[Ai]),_:1}),e(t,{"min-size":150},{default:o(()=>[Mi]),_:1}),e(t,{size:"20%"},{default:o(()=>[Li]),_:1})]),_:1})])]),_:1}),Di,e(d,null,{code:o(()=>[e(s,{name:"splitview_horizontal_usage_html"})]),default:o(()=>[n("div",Bi,[e(a,{horizontal:"","snap-offset":30},{default:o(()=>[e(t,null,{default:o(()=>[Ui]),_:1}),e(t,null,{default:o(()=>[Fi]),_:1}),e(t,null,{default:o(()=>[qi]),_:1})]),_:1})])]),_:1})],64)}var Ri=g(Ii,[["render",Pi]]),Ni=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ri});const Wi={name:"demo-component-suggest",setup(){const u=x(!1),i=x(""),r=x([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),l=a=>a?r.value.filter(s=>s.text.toLowerCase().includes(a.toLowerCase())):r.value;return{suggestOpen:u,queryText:i,fetchData:(a,s,d)=>new Promise(m=>{const v=setTimeout(()=>{m(l(a))},100);d.onCancellationRequested(()=>{clearTimeout(v),m()})}),onError:()=>{},onSuggestionSelected:a=>{i.value=a.text,u.value=!1}}}},Hi=n("h2",null,"Suggest",-1),Ki=n("h3",null,"Basic Usage",-1),Gi=b("Toggle Suggest");function Qi(u,i,r,l,_,p){const t=c("v-button"),a=c("v-input"),s=c("v-suggest"),d=c("v-layout"),m=c("demo-code"),v=c("demo-block");return h(),f(k,null,[Hi,Ki,e(v,{class:"demo-suggest-block"},{code:o(()=>[e(m,{name:"suggest_basic_usage_html"})]),default:o(()=>[e(d,{gutter:""},{default:o(()=>[e(t,{onClick:i[0]||(i[0]=y=>l.suggestOpen=!l.suggestOpen)},{default:o(()=>[Gi]),_:1}),e(a,{modelValue:l.queryText,"onUpdate:modelValue":i[1]||(i[1]=y=>l.queryText=y),placeholder:"Enter your text",id:"input-1"},null,8,["modelValue"]),e(s,{visible:l.suggestOpen,"onUpdate:visible":i[2]||(i[2]=y=>l.suggestOpen=y),anchor:"input-1","anchor-constraint":!1,"search-query":l.queryText,"data-source":l.fetchData,"action-on-parent-scrolling":"update","loading-message":"Loading...","empty-result-message":"No suggestions.","max-item-count":20,"clear-on-invisible":"",onError:l.onError,onSelect:l.onSuggestionSelected},null,8,["visible","search-query","data-source","onError","onSelect"])]),_:1})]),_:1})],64)}var Ji=g(Wi,[["render",Qi]]),Xi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ji});const Yi={name:"demo-component-tabs",setup(){return{selectedTab:x(null)}}},Zi=n("h2",null,"Tabs",-1),es=n("h3",null,"Basic Usage",-1),os=b(" File 1.txt "),ts=b(" File 2.txt "),ns=b(" File 3.txt "),ls=b(" File 4.txt "),cs=b(" File 5.txt "),as=b(" File 6.txt ");function is(u,i,r,l,_,p){const t=c("v-icon-book"),a=c("v-tab"),s=c("v-tabs"),d=c("demo-code"),m=c("demo-block");return h(),f(k,null,[Zi,es,e(m,null,{code:o(()=>[e(d,{name:"tabs_basic_usage_html"})]),default:o(()=>[e(s,{modelValue:l.selectedTab,"onUpdate:modelValue":i[0]||(i[0]=v=>l.selectedTab=v)},{default:o(()=>[e(a,{"icon-color":"#B69E24",modified:""},{icon:o(()=>[e(t)]),default:o(()=>[os]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[ts]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[ns]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[ls]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[cs]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[as]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var ss=g(Yi,[["render",is]]),ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ss});const _s={name:"demo-component-treeview",setup(){return{items:j([{id:1,name:"Root folder",expanded:!0,selected:!1,children:[{id:2,name:"Folder 1",expanded:!1,selected:!1,icon:"v-icon-folder",children:[{id:3,name:"File 1",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:4,name:"File 2",icon:"v-icon-doc-text",expanded:!1,selected:!1}]},{id:5,name:"File 3",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:6,name:"Folder 2",icon:"v-icon-folder",expanded:!1,selected:!1,children:[]}]}])}}},us=n("h2",null,"Treeview",-1),ms=n("p",null,"Display a set of data with hierarchies.",-1),rs=n("h3",null,"Basic Usage",-1);function ps(u,i,r,l,_,p){const t=c("v-treeview"),a=c("demo-code"),s=c("demo-block");return h(),f(k,null,[us,ms,rs,e(s,null,{code:o(()=>[e(a,{name:"treeview_basic_usage_html"})]),default:o(()=>[e(t,{items:l.items},null,8,["items"])]),_:1})],64)}var bs=g(_s,[["render",ps]]),vs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bs});const hs={"../components/demo-block.vue":He,"../components/demo-code.vue":Tt,"../components/demo-component-action-bar.vue":Pt,"../components/demo-component-action-list.vue":an,"../components/demo-component-autocomplete.vue":vn,"../components/demo-component-button.vue":On,"../components/demo-component-checkbox.vue":Un,"../components/demo-component-content.vue":Jn,"../components/demo-component-draggable.vue":gl,"../components/demo-component-dropdown.vue":Sl,"../components/demo-component-fieldset.vue":Ul,"../components/demo-component-floating-toolbar.vue":ic,"../components/demo-component-icon.vue":xc,"../components/demo-component-input.vue":zc,"../components/demo-component-installation.vue":Pc,"../components/demo-component-keybinding-label.vue":Xc,"../components/demo-component-keyboard-shortcuts.vue":na,"../components/demo-component-label.vue":ua,"../components/demo-component-layout.vue":xa,"../components/demo-component-list.vue":za,"../components/demo-component-node-graph.vue":Pa,"../components/demo-component-scrollbar.vue":Xa,"../components/demo-component-selectbox.vue":li,"../components/demo-component-sidebar.vue":fi,"../components/demo-component-space.vue":Ti,"../components/demo-component-splitview.vue":Ni,"../components/demo-component-suggest.vue":Xi,"../components/demo-component-tabs.vue":ds,"../components/demo-component-treeview.vue":vs,"../components/demo-codes/component-action-bar.js":B,"../components/demo-codes/component-action-list.js":U,"../components/demo-codes/component-autocomplete.js":F,"../components/demo-codes/component-button.js":q,"../components/demo-codes/component-checkbox.js":P,"../components/demo-codes/component-content.js":R,"../components/demo-codes/component-draggable.js":N,"../components/demo-codes/component-dropdown.js":W,"../components/demo-codes/component-fieldset.js":H,"../components/demo-codes/component-floating-toolbar.js":K,"../components/demo-codes/component-icon.js":G,"../components/demo-codes/component-input.js":Q,"../components/demo-codes/component-installation.js":J,"../components/demo-codes/component-keybinding-label.js":X,"../components/demo-codes/component-keyboard-shortcuts.js":Y,"../components/demo-codes/component-label.js":Z,"../components/demo-codes/component-layout.js":ee,"../components/demo-codes/component-list.js":oe,"../components/demo-codes/component-node-graph.js":te,"../components/demo-codes/component-scrollbar.js":ne,"../components/demo-codes/component-selectbox.js":le,"../components/demo-codes/component-sidebar.js":ce,"../components/demo-codes/component-space.js":ae,"../components/demo-codes/component-splitview.js":ie,"../components/demo-codes/component-suggest.js":se,"../components/demo-codes/component-tabs.js":de,"../components/demo-codes/component-treeview.js":_e,"../components/demo-codes/index.js":wt};var fs={install:u=>{for(const[i,r]of Object.entries(hs)){const l=ye(i.split("/").pop().replace(/\.\w+$/,""));u.component(l,r.default||r)}}};const S=xe(Oe);S.use(Ue);S.use($e);S.use(fs);S.use(Ce);S.mount("#app");export{g as _};
