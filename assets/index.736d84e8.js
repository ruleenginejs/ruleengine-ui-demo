import{c as L,r as c,o as h,a as N,b as W,d as f,e as l,f as z,g as e,w as o,t as H,h as j,i as K,F as y,j as b,k as x,l as O,m as E,n as A,p as G,q as Q,s as J,u as X}from"./vendor.abcb148d.js";const Y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))n(_);new MutationObserver(_=>{for(const p of _)if(p.type==="childList")for(const t of p.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function m(_){const p={};return _.integrity&&(p.integrity=_.integrity),_.referrerpolicy&&(p.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?p.credentials="include":_.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(_){if(_.ep)return;_.ep=!0;const p=m(_);fetch(_.href,p)}};Y();var g=(u,i)=>{const m=u.__vccOpts||u;for(const[n,_]of i)m[n]=_;return m};const Z={name:"App"};function ee(u,i,m,n,_,p){const t=c("router-view");return h(),L(t)}var oe=g(Z,[["render",ee]]);const te="modulepreload",M={},le="/ruleengine-ui-demo/",S=function(i,m){return!m||m.length===0?i():Promise.all(m.map(n=>{if(n=`${le}${n}`,n in M)return;M[n]=!0;const _=n.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${p}`))return;const t=document.createElement("link");if(t.rel=_?"stylesheet":te,_||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),_)return new Promise((a,d)=>{t.addEventListener("load",a),t.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>i())},ne=()=>S(()=>import("./demo-component-layout.f0692d58.js"),["assets/demo-component-layout.f0692d58.js","assets/vendor.abcb148d.js"]),ce=()=>S(()=>import("./demo-component-page.39609124.js"),["assets/demo-component-page.39609124.js","assets/vendor.abcb148d.js"]);var ae=[{path:"component",redirect:"/component/installation",name:"component",component:ne,children:[{path:":id",name:"component-content",props:!0,component:ce}]}];const ie=()=>S(()=>import("./demo-layout.71cbb4a3.js"),["assets/demo-layout.71cbb4a3.js","assets/demo-header.dd12773e.js","assets/vendor.abcb148d.js"]),de=()=>S(()=>import("./demo-home.19e8c3be.js"),["assets/demo-home.19e8c3be.js","assets/vendor.abcb148d.js"]);var se=[{path:"/",component:ie,children:[{path:"",name:"home",component:de},...ae]}];const _e=()=>S(()=>import("./demo-not-found.f9e371b6.js"),["assets/demo-not-found.f9e371b6.js","assets/demo-header.dd12773e.js","assets/vendor.abcb148d.js"]);var ue=[{path:"/:pathMatch(.*)",name:"not-found",component:_e}];const re=N({history:W(),routes:[...se,...ue]}),me={name:"demo-block"},pe={class:"demo-block"},be={class:"demo-block__source"},ve={class:"demo-block__code"};function he(u,i,m,n,_,p){const t=c("v-sidebar-section");return h(),f("div",pe,[l("div",be,[z(u.$slots,"default")]),l("div",ve,[e(t,{"bottom-border":!1,"header-border":!1,title:"Code"},{default:o(()=>[z(u.$slots,"code")]),_:3})])])}var fe=g(me,[["render",he]]),ge=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));const ye=`
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
`,ke=`
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
`,xe=`
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
`;var $e=[{name:"actionbar_basic_usage_html",code:ye,lang:"html"},{name:"actionbar_disabled_action_usage_html",code:ke,lang:"html"},{name:"actionbar_grouping_action_usage_html",code:xe,lang:"html"}],Ce=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"}));const Se=`
<template>
  <v-action-list>
    <v-action-item title="Play" icon="play" @click="onClick" />
    <v-action-item title="Stop" icon="debug-stop" @click="onClick" />
    <v-action-item title="Add Item" icon="plus" @click="onClick" />
    <v-action-item title="Choose Folder" icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,we=`
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item disabled icon="plus" @click="onClick" />
    <v-action-item disabled icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,Oe=`
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick" />
    <v-action-item icon="debug-stop" @click="onClick" />
    <v-action-item icon="plus" @click="onClick" />
    <v-action-item icon="folder" @click="onClick" />
  </v-action-list>
</template>
`,je=`
<template>
  <v-action-list>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`,Te=`
<template>
  <v-action-list vertical>
    <v-action-item icon="play" @click="onClick">Play</v-action-item>
    <v-action-item icon="debug-stop" @click="onClick">Stop</v-action-item>
    <v-action-item icon="plus" @click="onClick">Add Item</v-action-item>
    <v-action-item icon="folder" @click="onClick">Choose Folder</v-action-item>
  </v-action-list>
</template>
`;var Ie=[{name:"actionlist_basic_usage_html",code:Se,lang:"html"},{name:"actionlist_disabled_action_usage_html",code:we,lang:"html"},{name:"actionlist_vertical_action_list_usage_html",code:Oe,lang:"html"},{name:"actionlist_action_with_label_usage_html",code:je,lang:"html"},{name:"actionlist_vertical_action_with_label_usage_html",code:Te,lang:"html"}],Pe=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"}));const Ve=`
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
`,ze=`
<template>
  <v-autocomplete placeholder="Enter your text" disabled />
</template>
`,Ee=`
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
`;var Ae=[{name:"autocomplete_basic_usage_html",code:Ve,lang:"html"},{name:"autocomplete_disabled_usage_html",code:ze,lang:"html"},{name:"autocomplete_with_icon_usage_html",code:Ee,lang:"html"}],Me=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"}));const Le=`
<template>
  <v-layout gutter>
    <v-button>Default</v-button>
    <v-button secondary>Secondary</v-button>
  </v-layout>
</template>
`,De=`
<template>
  <v-layout gutter>
    <v-button disabled>Default</v-button>
    <v-button disabled secondary>Secondary</v-button>
  </v-layout>
</template>
`;var Be=[{name:"button_basic_usage_html",code:Le,lang:"html"},{name:"button_disabled_html",code:De,lang:"html"}],Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));const Fe=`
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
`,qe=`
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
`;var Re=[{name:"checkbox_basic_usage_html",code:Fe,lang:"html"},{name:"checkbox_disabled_html",code:qe,lang:"html"}],Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"}));const We=`
<template>
  <v-content h-full scroll padding="md">
    <div class="demo-cube demo-cube-a demo-cube-h14" />
    <div class="demo-cube demo-cube-b demo-cube-h14" />
    <div class="demo-cube demo-cube-c demo-cube-h14" />
    <div class="demo-cube demo-cube-d demo-cube-h14" />
  </v-content>
</template>
`;var He=[{name:"content_basic_usage_html",code:We,lang:"html"}],Ke=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"}));const Ge=`
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
`,Qe=`
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
`,Je=`
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
`,Xe=`
<template>
  <v-layout>
    <v-draggable disabled>
      <div class="demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"></div>
    </v-draggable>
  </v-layout>
</template>
`,Ye=`
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
`;var Ze=[{name:"draggable_basic_usage_html",code:Ge,lang:"html"},{name:"draggable_with_hint_html",code:Qe,lang:"html"},{name:"draggable_fixed_html",code:Je,lang:"html"},{name:"draggable_disabled_html",code:Xe,lang:"html"},{name:"draggable_actions_html",code:Ye,lang:"html"}],eo=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));const oo=`
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
`;var to=[{name:"dropdown_basic_usage_html",code:oo,lang:"html"}],lo=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"}));const no=`
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
`,co=`
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
`,ao=`
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
`;var io=[{name:"fieldset_basic_usage_html",code:no,lang:"html"},{name:"fieldset_vertical_field_layout_html",code:co,lang:"html"},{name:"fieldset_title_actions_html",code:ao,lang:"html"}],so=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"}));const _o=`
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
`,uo=`
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
`,ro=`
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
`,mo=`
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
`;var po=[{name:"floating_toolbar_basic_usage_html",code:_o,lang:"html"},{name:"floating_toolbar_vertical_html",code:uo,lang:"html"},{name:"floating_toolbar_fixed_html",code:ro,lang:"html"},{name:"floating_toolbar_with_labels_usage_html",code:mo,lang:"html"}],bo=Object.freeze(Object.defineProperty({__proto__:null,default:po},Symbol.toStringTag,{value:"Module"}));const vo=`
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
`,ho=`
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
`;var fo=[{name:"icon_basic_usage_html",code:vo,lang:"html"},{name:"codicons_html",code:ho,lang:"html"}],go=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"}));const yo=`
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
`,ko=`
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
`,xo=`
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
`,$o=`
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
`;var Co=[{name:"input_basic_usage_html",code:yo,lang:"html"},{name:"input_disabled_html",code:ko,lang:"html"},{name:"input_with_icon_html",code:xo,lang:"html"},{name:"input_message_html",code:$o,lang:"html"}],So=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"}));const wo=`
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
`,Oo=`
<v-action-bar>
  <v-action @click="onClick">
    <v-icon-play />
  </v-action>
</v-action-bar>
`;var jo=[{name:"installation_usage_js",code:wo,lang:"javascript"},{name:"installation_usage_html",code:Oo,lang:"html"}],To=Object.freeze(Object.defineProperty({__proto__:null,default:jo},Symbol.toStringTag,{value:"Module"}));const Io=`
<template>
  <v-keybinding-label value="Ctrl+A" />
  <br />
  <v-keybinding-label value="Ctrl+C" />
</template>
`,Po=`
<template>
  <v-keybinding-label value="Cmd+A" :separator="null" />
  <br />
  <v-keybinding-label value="Cmd+C" :separator="null" />
</template>
`;var Vo=[{name:"keybindinglabel_basic_usage_html",code:Io,lang:"html"},{name:"keybindinglabel_other_separator_usage_html",code:Po,lang:"html"}],zo=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"}));const Eo=`
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
`;var Ao=[{name:"keyboard_shortcuts_basic_usage_html",code:Eo,lang:"html"}],Mo=Object.freeze(Object.defineProperty({__proto__:null,default:Ao},Symbol.toStringTag,{value:"Module"}));const Lo=`
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
`;var Do=[{name:"label_basic_usage_html",code:Lo,lang:"html"}],Bo=Object.freeze(Object.defineProperty({__proto__:null,default:Do},Symbol.toStringTag,{value:"Module"}));const Uo=`
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
`;var Fo=[{name:"layout_basic_html",code:Uo,lang:"html"}],qo=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"}));const Ro=`
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
`,No=`
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
`;var Wo=[{name:"list_basic_usage_html",code:Ro,lang:"html"},{name:"list_focusable_html",code:No,lang:"html"}],Ho=Object.freeze(Object.defineProperty({__proto__:null,default:Wo},Symbol.toStringTag,{value:"Module"}));const Ko=`
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
`;var Go=[{name:"node_graph_basic_usage_html",code:Ko,lang:"html"}],Qo=Object.freeze(Object.defineProperty({__proto__:null,default:Go},Symbol.toStringTag,{value:"Module"}));const Jo=`
<template>
  <div class="scrollbar" style="height: 260px; overflow: auto">
    <v-layout gutter wrap>
      <div v-for="item in 10" :key="item" class="demo-cube demo-cube-num demo-cube-h14">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`,Xo=`
<template>
  <div class="scrollbar" style="height: 70px; overflow: auto">
    <v-layout gutter>
      <div v-for="item in 20" :key="item" class="demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink">
        {{ item }}
      </div>
    </v-layout>
  </div>
</template>
`;var Yo=[{name:"scrollbar_basic_usage_html",code:Jo,lang:"html"},{name:"scrollbar_horizontal_scroll_html",code:Xo,lang:"html"}],Zo=Object.freeze(Object.defineProperty({__proto__:null,default:Yo},Symbol.toStringTag,{value:"Module"}));const et=`
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
`,ot=`
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
`;var tt=[{name:"selectbox_basic_usage_html",code:et,lang:"html"},{name:"selectbox_disabled_usage_html",code:ot,lang:"html"}],lt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));const nt=`
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
`,ct=`
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
`;var at=[{name:"sidebar_basic_usage_html",code:nt,lang:"html"},{name:"sidebar_section_html",code:ct,lang:"html"}],it=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));const dt=`
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
`;var st=[{name:"space_basic_usage_html",code:dt,lang:"html"}],_t=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));const ut=`
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
`,rt=`
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
`;var mt=[{name:"splitview_basic_usage_html",code:ut,lang:"html"},{name:"splitview_horizontal_usage_html",code:rt,lang:"html"}],pt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));const bt=`
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
`;var vt=[{name:"suggest_basic_usage_html",code:bt,lang:"html"}],ht=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"}));const ft=`
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
`;var gt=[{name:"tabs_basic_usage_html",code:ft,lang:"html"}],yt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"}));const kt=`
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
`;var xt=[{name:"treeview_basic_usage_html",code:kt,lang:"html"}],$t=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));const Ct={"./component-action-bar.js":Ce,"./component-action-list.js":Pe,"./component-autocomplete.js":Me,"./component-button.js":Ue,"./component-checkbox.js":Ne,"./component-content.js":Ke,"./component-draggable.js":eo,"./component-dropdown.js":lo,"./component-fieldset.js":so,"./component-floating-toolbar.js":bo,"./component-icon.js":go,"./component-input.js":So,"./component-installation.js":To,"./component-keybinding-label.js":zo,"./component-keyboard-shortcuts.js":Mo,"./component-label.js":Bo,"./component-layout.js":qo,"./component-list.js":Ho,"./component-node-graph.js":Qo,"./component-scrollbar.js":Zo,"./component-selectbox.js":lt,"./component-sidebar.js":it,"./component-space.js":_t,"./component-splitview.js":pt,"./component-suggest.js":ht,"./component-tabs.js":yt,"./component-treeview.js":$t},T=[];for(const[,u]of Object.entries(Ct))T.push.apply(T,u.default);const St={name:"demo-code",props:{lang:{type:String,default:null},code:{type:String,default:null},name:{type:String,default:null}},setup(u){const{lang:i,code:m,name:n}=H(u),_=j(()=>T.find(a=>a.name===n.value)),p=j(()=>{var a;return m.value||((a=_.value)==null?void 0:a.code.trim())}),t=j(()=>{var a;return i.value||((a=_.value)==null?void 0:a.lang)});return{content:p,language:t}}};function wt(u,i,m,n,_,p){const t=c("highlightjs");return n.content?(h(),L(t,{key:0,autodetect:!1,language:n.language,code:n.content},null,8,["language","code"])):K("",!0)}var Ot=g(St,[["render",wt]]),jt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));const Tt={name:"demo-component-action-bar",setup(){return{onClick:()=>{}}}},It=l("h2",null,"ActionBar",-1),Pt=l("h3",null,"Basic Usage",-1),Vt=l("h3",null,"Disabled Action",-1),zt=l("h3",null,"Grouping Action",-1),Et=l("span",{class:"codicon codicon-play"},null,-1),At=l("span",{class:"codicon codicon-stop"},null,-1),Mt=l("span",{class:"codicon codicon-plus"},null,-1),Lt=l("span",{class:"codicon codicon-zoom-in"},null,-1),Dt=l("span",{class:"codicon codicon-zoom-out"},null,-1);function Bt(u,i,m,n,_,p){const t=c("v-icon-play"),a=c("v-action"),d=c("v-icon-stop"),s=c("v-icon-plus"),r=c("v-icon-folder"),v=c("v-action-bar"),k=c("demo-code"),$=c("demo-block"),C=c("v-action-group");return h(),f(y,null,[It,Pt,e($,null,{code:o(()=>[e(k,{name:"actionbar_basic_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[e(s)]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[e(r)]),_:1},8,["onClick"])]),_:1})]),_:1}),Vt,e($,null,{code:o(()=>[e(k,{name:"actionbar_disabled_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{disabled:"",onClick:n.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"])]),_:1})]),_:1}),zt,e($,null,{code:o(()=>[e(k,{name:"actionbar_grouping_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[Et]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[At]),_:1},8,["onClick"])]),_:1}),e(a,{onClick:n.onClick},{default:o(()=>[Mt]),_:1},8,["onClick"]),e(C,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[Lt]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[Dt]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var Ut=g(Tt,[["render",Bt]]),Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"}));const qt={name:"demo-component-action-list",setup(){return{onClick:()=>{}}}},Rt=l("h2",null,"ActionList",-1),Nt=l("h3",null,"Basic Usage",-1),Wt=l("h3",null,"Disabled Action Item",-1),Ht=l("h3",null,"Vertical Action List",-1),Kt=l("h3",null,"Action With Label",-1),Gt=b("Play"),Qt=b("Stop"),Jt=b("Add Item"),Xt=b("Choose Folder"),Yt=l("h3",null,"Vertcal Action With Label",-1),Zt=b("Play"),el=b("Stop"),ol=b("Add Item"),tl=b("Choose Folder");function ll(u,i,m,n,_,p){const t=c("v-action-item"),a=c("v-action-list"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[Rt,Nt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{title:"Play",icon:"play",onClick:n.onClick},null,8,["onClick"]),e(t,{title:"Stop",icon:"debug-stop",onClick:n.onClick},null,8,["onClick"]),e(t,{title:"Add Item",icon:"plus",onClick:n.onClick},null,8,["onClick"]),e(t,{title:"Choose Folder",icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1}),Wt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_disabled_action_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"plus",onClick:n.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1}),Ht,e(s,null,{code:o(()=>[e(d,{name:"actionlist_vertical_action_list_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"plus",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1}),Kt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_action_with_label_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},{default:o(()=>[Gt]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},{default:o(()=>[Qt]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:n.onClick},{default:o(()=>[Jt]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:n.onClick},{default:o(()=>[Xt]),_:1},8,["onClick"])]),_:1})]),_:1}),Yt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_vertical_action_with_label_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},{default:o(()=>[Zt]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},{default:o(()=>[el]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:n.onClick},{default:o(()=>[ol]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:n.onClick},{default:o(()=>[tl]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var nl=g(qt,[["render",ll]]),cl=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"}));const al={name:"demo-component-autocomplete",setup(){const u=x(""),i=x([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),m=_=>_?i.value.filter(p=>p.text.toLowerCase().includes(_.toLowerCase())):i.value,n=(_,p,t)=>new Promise(a=>{const d=setTimeout(()=>{a(m(_))},100);t.onCancellationRequested(()=>{clearTimeout(d),a()})});return{value:u,withIconValue:x(""),fetchAutocompleteData:n,onClick:()=>{}}}},il=l("h2",null,"Autocomplete",-1),dl=l("h3",null,"Basic Usage",-1),sl=l("h3",null,"Disabled Autocomplete",-1),_l=l("h3",null,"Autocomplete With Icon",-1),ul=l("span",{class:"codicon codicon-file-code"},null,-1);function rl(u,i,m,n,_,p){const t=c("v-autocomplete"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[il,dl,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=s=>n.value=s),"data-source":n.fetchAutocompleteData,placeholder:"Enter your text","loading-message":"Loading...","empty-result-message":"No matching results."},null,8,["modelValue","data-source"])]),_:1}),sl,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_disabled_usage_html"})]),default:o(()=>[e(t,{placeholder:"Enter your text",disabled:""})]),_:1}),_l,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_with_icon_usage_html"})]),default:o(()=>[e(t,{modelValue:n.withIconValue,"onUpdate:modelValue":i[1]||(i[1]=s=>n.withIconValue=s),"data-source":n.fetchAutocompleteData,placeholder:"Enter your text","loading-message":"Loading...","empty-result-message":"No matching results.","icon-clickable":"",onIconClick:n.onClick},{icon:o(()=>[ul]),_:1},8,["modelValue","data-source","onIconClick"])]),_:1})],64)}var ml=g(al,[["render",rl]]),pl=Object.freeze(Object.defineProperty({__proto__:null,default:ml},Symbol.toStringTag,{value:"Module"}));const bl={name:"demo-component-button"},vl=l("h2",null,"Button",-1),hl=l("p",null,"Simple button.",-1),fl=l("h3",null,"Basic Usage",-1),gl=b("Default"),yl=b("Secondary"),kl=l("h3",null,"Disabled Button",-1),xl=b("Default"),$l=b("Secondary");function Cl(u,i,m,n,_,p){const t=c("v-button"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[vl,hl,fl,e(s,null,{code:o(()=>[e(d,{name:"button_basic_usage_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,null,{default:o(()=>[gl]),_:1}),e(t,{secondary:""},{default:o(()=>[yl]),_:1})]),_:1})]),_:1}),kl,e(s,null,{code:o(()=>[e(d,{name:"button_disabled_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,{disabled:""},{default:o(()=>[xl]),_:1}),e(t,{disabled:"",secondary:""},{default:o(()=>[$l]),_:1})]),_:1})]),_:1})],64)}var Sl=g(bl,[["render",Cl]]),wl=Object.freeze(Object.defineProperty({__proto__:null,default:Sl},Symbol.toStringTag,{value:"Module"}));const Ol={name:"demo-component-checkbox",setup(){const u=x(!0),i=x(!1),m=x(!0),n=x(!1);return{checked:u,unchecked:i,disabledChecked:m,disabledUnchecked:n}}},jl=l("h2",null,"Checkbox",-1),Tl=l("h3",null,"Basic Usage",-1),Il=b("Checked"),Pl=b("Unchecked"),Vl=l("h3",null,"Disabled State",-1),zl=b("Checked"),El=b("Unchecked");function Al(u,i,m,n,_,p){const t=c("v-checkbox"),a=c("v-label"),d=c("v-layout"),s=c("demo-code"),r=c("demo-block");return h(),f(y,null,[jl,Tl,e(r,null,{code:o(()=>[e(s,{name:"checkbox_basic_usage_html"})]),default:o(()=>[e(d,{gutter:"",wrap:""},{default:o(()=>[e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_1",modelValue:n.checked,"onUpdate:modelValue":i[0]||(i[0]=v=>n.checked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_1"},{default:o(()=>[Il]),_:1})]),_:1}),e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_2",modelValue:n.unchecked,"onUpdate:modelValue":i[1]||(i[1]=v=>n.unchecked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_2"},{default:o(()=>[Pl]),_:1})]),_:1})]),_:1})]),_:1}),Vl,e(r,null,{code:o(()=>[e(s,{name:"checkbox_disabled_html"})]),default:o(()=>[e(d,{gutter:"",wrap:""},{default:o(()=>[e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_3",modelValue:n.disabledChecked,"onUpdate:modelValue":i[2]||(i[2]=v=>n.disabledChecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_3"},{default:o(()=>[zl]),_:1})]),_:1}),e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_4",modelValue:n.disabledUnchecked,"onUpdate:modelValue":i[3]||(i[3]=v=>n.disabledUnchecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_4"},{default:o(()=>[El]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Ml=g(Ol,[["render",Al]]),Ll=Object.freeze(Object.defineProperty({__proto__:null,default:Ml},Symbol.toStringTag,{value:"Module"}));const Dl={name:"demo-component-content"},Bl=l("h2",null,"Content",-1),Ul=l("h3",null,"Basic Usage",-1),Fl={class:"demo-cube demo-cube-h52"},ql=l("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Rl=l("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),Nl=l("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),Wl=l("div",{class:"demo-cube demo-cube-d demo-cube-h14"},null,-1);function Hl(u,i,m,n,_,p){const t=c("v-content"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Bl,Ul,e(d,null,{code:o(()=>[e(a,{name:"content_basic_usage_html"})]),default:o(()=>[l("div",Fl,[e(t,{"h-full":"",scroll:"",padding:"md"},{default:o(()=>[ql,Rl,Nl,Wl]),_:1})])]),_:1})],64)}var Kl=g(Dl,[["render",Hl]]),Gl=Object.freeze(Object.defineProperty({__proto__:null,default:Kl},Symbol.toStringTag,{value:"Module"}));const Ql={name:"demo-component-draggable",setup(){return{onClick:()=>{}}}},Jl=l("h2",null,"Draggable",-1),Xl=l("h3",null,"Basic Usage",-1),Yl=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),Zl=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),en=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),on=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),tn=l("h3",null,"Draggable With Hint",-1),ln=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),nn=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),cn=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),an=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),dn=l("h3",null,"Fixed Draggable",-1),sn=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),_n=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),un=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),rn=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),mn=l("h3",null,"Disabled Draggable",-1),pn=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),bn=l("h3",null,"Draggable Actions",-1);function vn(u,i,m,n,_,p){const t=c("v-draggable"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block"),r=c("v-action-item"),v=c("v-action-list");return h(),f(y,null,[Jl,Xl,e(s,null,{code:o(()=>[e(d,{name:"draggable_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,null,{default:o(()=>[Yl]),_:1}),e(t,null,{default:o(()=>[Zl]),_:1}),e(t,null,{default:o(()=>[en]),_:1}),e(t,null,{default:o(()=>[on]),_:1})]),_:1})]),_:1}),tn,e(s,null,{code:o(()=>[e(d,{name:"draggable_with_hint_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{hint:""},{default:o(()=>[ln]),_:1}),e(t,{hint:""},{default:o(()=>[nn]),_:1}),e(t,{hint:""},{default:o(()=>[cn]),_:1}),e(t,{hint:""},{default:o(()=>[an]),_:1})]),_:1})]),_:1}),dn,e(s,null,{code:o(()=>[e(d,{name:"draggable_fixed_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{fixed:""},{default:o(()=>[sn]),_:1}),e(t,{fixed:""},{default:o(()=>[_n]),_:1}),e(t,{fixed:""},{default:o(()=>[un]),_:1}),e(t,{fixed:""},{default:o(()=>[rn]),_:1})]),_:1})]),_:1}),mn,e(s,null,{code:o(()=>[e(d,{name:"draggable_disabled_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{disabled:""},{default:o(()=>[pn]),_:1})]),_:1})]),_:1}),bn,e(s,null,{code:o(()=>[e(d,{name:"draggable_actions_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(t,null,{default:o(()=>[e(r,{title:"Add",icon:"add",onClick:n.onClick},null,8,["onClick"])]),_:1}),e(t,null,{default:o(()=>[e(r,{title:"Edit",icon:"edit",onClick:n.onClick},null,8,["onClick"])]),_:1}),e(t,{hint:""},{default:o(()=>[e(r,{title:"Remove",icon:"trash",onClick:n.onClick},null,8,["onClick"])]),_:1}),e(t,{hint:""},{default:o(()=>[e(r,{title:"Choose Folder",icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var hn=g(Ql,[["render",vn]]),fn=Object.freeze(Object.defineProperty({__proto__:null,default:hn},Symbol.toStringTag,{value:"Module"}));const gn={name:"demo-component-dropdown",setup(){return{dropdownOpen:x(!1),items:x([{id:1,text:"Item 1",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:2,text:"Item 2",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:3,text:"Item 3",icon:"v-icon-doc-text",iconColor:"#B69E24"}])}}},yn=l("h2",null,"Dropdown",-1),kn=l("h3",null,"Basic Usage",-1),xn=b(" Toggle Dropdown ");function $n(u,i,m,n,_,p){const t=c("v-button"),a=c("v-list"),d=c("v-content"),s=c("v-dropdown"),r=c("demo-code"),v=c("demo-block");return h(),f(y,null,[yn,kn,e(v,null,{code:o(()=>[e(r,{name:"dropdown_basic_usage_html"})]),default:o(()=>[e(t,{id:"button-1",onClick:i[0]||(i[0]=k=>n.dropdownOpen=!n.dropdownOpen)},{default:o(()=>[xn]),_:1}),e(s,{visible:n.dropdownOpen,"onUpdate:visible":i[2]||(i[2]=k=>n.dropdownOpen=k),anchor:"button-1","anchor-constraint":"","offset-y":4},{default:o(()=>[e(d,{fill:""},{default:o(()=>[e(a,{items:n.items,"onUpdate:selected":i[1]||(i[1]=k=>n.dropdownOpen=!1)},null,8,["items"])]),_:1})]),_:1},8,["visible"])]),_:1})],64)}var Cn=g(gn,[["render",$n]]),Sn=Object.freeze(Object.defineProperty({__proto__:null,default:Cn},Symbol.toStringTag,{value:"Module"}));const wn={name:"demo-component-fieldset"},On=l("h2",null,"Fieldset",-1),jn=l("h3",null,"Basic Usage",-1),Tn=b("Label 1"),In=b("Label 2"),Pn=l("h3",null,"Vertical Field Layout",-1),Vn=b("Label 1"),zn=b("Label 2"),En=l("h3",null,"Fieldset Title Actions",-1),An=b("Label 1");function Mn(u,i,m,n,_,p){const t=c("v-label"),a=c("v-input"),d=c("v-field-layout"),s=c("v-fieldset"),r=c("demo-code"),v=c("demo-block"),k=c("v-action-item"),$=c("v-action-list");return h(),f(y,null,[On,jn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(r,{name:"fieldset_basic_usage_html"})]),default:o(()=>[e(s,{label:"Title"},{default:o(()=>[e(d,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Tn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(d,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[In]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),Pn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(r,{name:"fieldset_vertical_field_layout_html"})]),default:o(()=>[e(s,{label:"Title"},{default:o(()=>[e(d,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Vn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(d,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[zn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),En,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(r,{name:"fieldset_title_actions_html"})]),default:o(()=>[e(s,{label:"Title"},{"label-actions":o(()=>[e($,null,{default:o(()=>[e(k,{icon:"add",title:"Add"}),e(k,{icon:"history",title:"History"}),e(k,{icon:"trash",title:"Remove"})]),_:1})]),default:o(()=>[e(d,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[An]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1})],64)}var Ln=g(wn,[["render",Mn]]),Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"}));const Bn={name:"demo-component-floating-toolbar"},Un=l("h2",null,"FloatingToolbar",-1),Fn=l("h3",null,"Basic Usage",-1),qn={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Rn=l("h3",null,"Vertical Floating Toolbar",-1),Nn={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Wn=l("h3",null,"Fixed Floating Toolbar",-1),Hn={class:"demo-cube demo-cube-c demo-cube-h14"},Kn=l("h3",null,"Floating Toolbar With Labels",-1),Gn={class:"demo-cube demo-cube-b demo-cube-h52 demo-cube-relative"},Qn=b("Add Item"),Jn=b("History"),Xn=b("Choose Folder"),Yn={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Zn=b("Add Item"),ec=b("History"),oc=b("Choose Folder"),tc=b("Play"),lc=b("Stop");function nc(u,i,m,n,_,p){const t=c("v-action-item"),a=c("v-action-list"),d=c("v-floating-toolbar"),s=c("demo-code"),r=c("demo-block"),v=c("v-layout");return h(),f(y,null,[Un,Fn,e(r,null,{code:o(()=>[e(s,{name:"floating_toolbar_basic_usage_html"})]),default:o(()=>[l("div",qn,[e(d,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Rn,e(r,null,{code:o(()=>[e(s,{name:"floating_toolbar_vertical_html"})]),default:o(()=>[l("div",Nn,[e(d,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Wn,e(r,null,{code:o(()=>[e(s,{name:"floating_toolbar_fixed_html"})]),default:o(()=>[l("div",Hn,[e(d,{fixed:"",x:300,y:6},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Kn,e(r,null,{code:o(()=>[e(s,{name:"floating_toolbar_with_labels_usage_html"})]),default:o(()=>[e(v,{"h-full":"","w-full":""},{default:o(()=>[e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[l("div",Gn,[e(d,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[Qn]),_:1}),e(t,{icon:"history"},{default:o(()=>[Jn]),_:1}),e(t,{icon:"folder"},{default:o(()=>[Xn]),_:1})]),_:1})]),_:1})])]),_:1}),e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[l("div",Yn,[e(d,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[Zn]),_:1}),e(t,{icon:"history"},{default:o(()=>[ec]),_:1}),e(t,{icon:"folder"},{default:o(()=>[oc]),_:1}),e(t,{icon:"play",disabled:""},{default:o(()=>[tc]),_:1}),e(t,{icon:"debug-stop"},{default:o(()=>[lc]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})],64)}var cc=g(Bn,[["render",nc]]),ac=Object.freeze(Object.defineProperty({__proto__:null,default:cc},Symbol.toStringTag,{value:"Module"}));const ic={name:"demo-component-space"},dc=l("h2",null,"Icon",-1),sc=l("p",null,"Library provides some svg icons.",-1),_c=l("h3",null,"Built-in Icons",-1),uc=l("h3",null,"Codicons",-1),rc=l("p",null,[b(" The "),l("a",{href:"https://github.com/microsoft/vscode-codicons",class:"demo-external-link",target:"_blank"},"Codicon library"),b(" contains all the icons used in VS Code. "),l("a",{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",class:"demo-external-link",target:"_blank"},"All list of icons"),b(". ")],-1),mc=l("i",{class:"codicon codicon-account"},null,-1),pc=l("i",{class:"codicon codicon-activate-breakpoints"},null,-1),bc=l("i",{class:"codicon codicon-add"},null,-1),vc=l("i",{class:"codicon codicon-alert"},null,-1),hc=l("i",{class:"codicon codicon-archive"},null,-1),fc=l("i",{class:"codicon codicon-array"},null,-1);function gc(u,i,m,n,_,p){const t=c("v-icon-book"),a=c("v-icon-checkmark"),d=c("v-icon-chevron-down"),s=c("v-icon-circle"),r=c("v-icon-close"),v=c("v-icon-doc-text"),k=c("v-icon-file-menu"),$=c("v-icon-folder"),C=c("v-icon-play"),D=c("v-icon-stop"),B=c("v-icon-plus-bold"),U=c("v-icon-plus"),F=c("v-icon-script"),q=c("v-icon-sidebar-left"),R=c("v-icon-sidebar-right"),I=c("v-layout"),P=c("demo-code"),V=c("demo-block");return h(),f(y,null,[dc,sc,_c,e(V,null,{code:o(()=>[e(P,{name:"icon_basic_usage_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[e(t),e(a),e(d),e(s),e(r),e(v),e(k),e($),e(C),e(D),e(B),e(U),e(F),e(q),e(R)]),_:1})]),_:1}),uc,rc,e(V,null,{code:o(()=>[e(P,{name:"codicons_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[mc,pc,bc,vc,hc,fc]),_:1})]),_:1})],64)}var yc=g(ic,[["render",gc]]),kc=Object.freeze(Object.defineProperty({__proto__:null,default:yc},Symbol.toStringTag,{value:"Module"}));const xc={name:"demo-component-button",setup(){return{input:x(""),disabledInput:x(""),inputWithIcon:x(""),inputWithMessage:x("")}}},$c=l("h2",null,"Input",-1),Cc=l("h3",null,"Basic Usage",-1),Sc=l("h3",null,"Disabled Input",-1),wc=l("h3",null,"Input with icon",-1),Oc=l("i",{class:"codicon codicon-file-add"},null,-1),jc=l("h3",null,"Input message",-1);function Tc(u,i,m,n,_,p){const t=c("v-input"),a=c("demo-code"),d=c("demo-block"),s=c("v-icon-file-menu");return h(),f(y,null,[$c,Cc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:n.input,"onUpdate:modelValue":i[0]||(i[0]=r=>n.input=r),placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),Sc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_disabled_html"})]),default:o(()=>[e(t,{modelValue:n.disabledInput,"onUpdate:modelValue":i[1]||(i[1]=r=>n.disabledInput=r),disabled:"",placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),wc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_with_icon_html"})]),default:o(()=>[e(t,{modelValue:n.inputWithIcon,"onUpdate:modelValue":i[2]||(i[2]=r=>n.inputWithIcon=r),placeholder:"Enter your text"},{icon:o(()=>[e(s)]),_:1},8,["modelValue"]),e(t,{modelValue:n.inputWithIcon,"onUpdate:modelValue":i[3]||(i[3]=r=>n.inputWithIcon=r),placeholder:"Enter your text"},{icon:o(()=>[Oc]),_:1},8,["modelValue"])]),_:1}),jc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_message_html"})]),default:o(()=>[e(t,{modelValue:n.inputWithMessage,"onUpdate:modelValue":i[4]||(i[4]=r=>n.inputWithMessage=r),placeholder:"Error message",error:"",message:"Some error message"},null,8,["modelValue"]),e(t,{modelValue:n.inputWithMessage,"onUpdate:modelValue":i[5]||(i[5]=r=>n.inputWithMessage=r),placeholder:"Warning message",warning:"",message:"Some warning message"},null,8,["modelValue"]),e(t,{modelValue:n.inputWithMessage,"onUpdate:modelValue":i[6]||(i[6]=r=>n.inputWithMessage=r),placeholder:"Info message",info:"",message:"Some info message"},null,8,["modelValue"])]),_:1})],64)}var Ic=g(xc,[["render",Tc]]),Pc=Object.freeze(Object.defineProperty({__proto__:null,default:Ic},Symbol.toStringTag,{value:"Module"}));const Vc={name:"demo-component-installation"},zc=l("h2",null,"Installation",-1),Ec=l("h3",null,"npm",-1),Ac=l("p",null,"Add codicons (optional)",-1),Mc=l("p",null,"In your code",-1),Lc=l("h3",null,"Usage",-1),Dc=l("p",null,"In your templates",-1);function Bc(u,i,m,n,_,p){const t=c("demo-code");return h(),f(y,null,[zc,Ec,e(t,{lang:"shell",code:"npm install @ruleenginejs/ui"}),Ac,e(t,{lang:"shell",code:"npm install @vscode/codicons"}),Mc,e(t,{lang:"javascript",code:'import "@vscode/codicons/dist/codicon.css"'}),Lc,e(t,{name:"installation_usage_js"}),Dc,e(t,{name:"installation_usage_html"})],64)}var Uc=g(Vc,[["render",Bc]]),Fc=Object.freeze(Object.defineProperty({__proto__:null,default:Uc},Symbol.toStringTag,{value:"Module"}));const qc={name:"demo-component-keybinding-label"},Rc=l("h2",null,"KeybindingLabel",-1),Nc=l("h3",null,"Basic Usage",-1),Wc=l("br",null,null,-1),Hc=l("h3",null,"Mac Separator",-1),Kc=l("br",null,null,-1);function Gc(u,i,m,n,_,p){const t=c("v-keybinding-label"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Rc,Nc,e(d,null,{code:o(()=>[e(a,{name:"keybindinglabel_basic_usage_html"})]),default:o(()=>[e(t,{value:"Ctrl+A"}),Wc,e(t,{value:"Ctrl+C"})]),_:1}),Hc,e(d,null,{code:o(()=>[e(a,{name:"keybindinglabel_other_separator_usage_html"})]),default:o(()=>[e(t,{value:"Cmd+A",separator:null}),Kc,e(t,{value:"Cmd+C",separator:null})]),_:1})],64)}var Qc=g(qc,[["render",Gc]]),Jc=Object.freeze(Object.defineProperty({__proto__:null,default:Qc},Symbol.toStringTag,{value:"Module"}));const Xc={name:"demo-component-keyboard-shortcuts",setup(){return{shortcuts:O([{title:"Copy",key:"Ctrl+C"},{title:"Paste",key:"Ctrl+V"}])}}},Yc=l("h2",null,"KeyboardShortcuts",-1),Zc=l("h3",null,"Basic Usage",-1);function ea(u,i,m,n,_,p){const t=c("v-keyboard-shortcuts"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Yc,Zc,e(d,null,{code:o(()=>[e(a,{name:"keyboard_shortcuts_basic_usage_html"})]),default:o(()=>[e(t,{value:n.shortcuts},null,8,["value"])]),_:1})],64)}var oa=g(Xc,[["render",ea]]),ta=Object.freeze(Object.defineProperty({__proto__:null,default:oa},Symbol.toStringTag,{value:"Module"}));const la={name:"demo-component-label",setup(){return{value:x(!1)}}},na=l("h2",null,"Label",-1),ca=l("h3",null,"Basic Usage",-1),aa=b("Label 1"),ia=b("Label 2");function da(u,i,m,n,_,p){const t=c("v-label"),a=c("v-input"),d=c("v-field-layout"),s=c("v-checkbox"),r=c("v-fieldset"),v=c("demo-code"),k=c("demo-block");return h(),f(y,null,[na,ca,e(k,{class:"demo-label-block"},{code:o(()=>[e(v,{name:"label_basic_usage_html"})]),default:o(()=>[e(r,null,{default:o(()=>[e(d,null,{label:o(()=>[e(t,{truncate:"",for:"input1"},{default:o(()=>[aa]),_:1})]),value:o(()=>[e(a,{id:"input1",placeholder:"Enter your text"})]),_:1}),e(d,null,{label:o(()=>[e(t,{truncate:"",for:"checkbox1"},{default:o(()=>[ia]),_:1})]),value:o(()=>[e(s,{id:"checkbox1",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=$=>n.value=$)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)}var sa=g(la,[["render",da]]),_a=Object.freeze(Object.defineProperty({__proto__:null,default:sa},Symbol.toStringTag,{value:"Module"}));const ua={name:"demo-component-layout"},ra=l("h2",null,"Layout",-1),ma=l("p",null,"Quickly create layouts with no styling on flex.",-1),pa=l("h3",null,"Basic layout",-1),ba={class:"demo-cube demo-cube-h60"},va=l("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),ha=l("div",{class:"demo-cube demo-cube-b demo-cube-w52"},null,-1),fa=l("div",{class:"demo-cube demo-cube-c"},null,-1);function ga(u,i,m,n,_,p){const t=c("v-layout"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[ra,ma,pa,e(d,null,{code:o(()=>[e(a,{name:"layout_basic_html"})]),default:o(()=>[l("div",ba,[e(t,{"h-full":"","w-full":"",vertical:""},{default:o(()=>[e(t,{"not-shrink":""},{default:o(()=>[va]),_:1}),e(t,{"all-distr":"","h-full":""},{default:o(()=>[e(t,{"h-full":"","not-shrink":""},{default:o(()=>[ha]),_:1}),e(t,{"h-full":"","all-distr":""},{default:o(()=>[fa]),_:1})]),_:1})]),_:1})])]),_:1})],64)}var ya=g(ua,[["render",ga]]),ka=Object.freeze(Object.defineProperty({__proto__:null,default:ya},Symbol.toStringTag,{value:"Module"}));const xa={name:"demo-component-list",setup(){const u=O([]),i=x({id:1}),m=x({id:1});for(let n=0;n<15;n++)u.push({id:n+1,text:`Item ${n+1}`,icon:"v-icon-doc-text"});return{items:u,selectedItem:i,focusableSelectedItem:m}}},$a=l("h2",null,"List",-1),Ca=l("p",null,"Display a set of data with flat list.",-1),Sa=l("h3",null,"Basic Usage",-1),wa={class:"demo-cube demo-cube-h52"},Oa=l("h3",null,"Focusable",-1),ja={class:"demo-cube demo-cube-h52"};function Ta(u,i,m,n,_,p){const t=c("v-list"),a=c("v-content"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[$a,Ca,Sa,e(s,null,{code:o(()=>[e(d,{name:"list_basic_usage_html"})]),default:o(()=>[l("div",wa,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{items:n.items,selected:n.selectedItem,"onUpdate:selected":i[0]||(i[0]=r=>n.selectedItem=r)},null,8,["items","selected"])]),_:1})])]),_:1}),Oa,e(s,null,{code:o(()=>[e(d,{name:"list_focusable_html"})]),default:o(()=>[l("div",ja,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{"tab-index":0,items:n.items,selected:n.focusableSelectedItem,"onUpdate:selected":i[1]||(i[1]=r=>n.focusableSelectedItem=r)},null,8,["items","selected"])]),_:1})])]),_:1})],64)}var Ia=g(xa,[["render",Ta]]),Pa=Object.freeze(Object.defineProperty({__proto__:null,default:Ia},Symbol.toStringTag,{value:"Module"}));const Va={name:"demo-component-node-graph"},za=l("h2",null,"Node Graph",-1),Ea=l("p",null,"Graph of nodes connected via ports using connectors.",-1),Aa=l("h3",null,"Basic Usage",-1),Ma={class:"demo-cube demo-cube-h60"},La=b(" in port "),Da=b(" out port ");function Ba(u,i,m,n,_,p){const t=c("v-graph-port"),a=c("v-graph-circle-node"),d=c("v-icon-doc-text"),s=c("v-icon-script"),r=c("v-graph-node"),v=c("v-graph-connection"),k=c("v-graph-canvas"),$=c("demo-code"),C=c("demo-block");return h(),f(y,null,[za,Ea,Aa,e(C,null,{code:o(()=>[e($,{name:"node_graph_basic_usage_html"})]),default:o(()=>[l("div",Ma,[e(k,null,{node:o(()=>[e(a,{id:1,x:100,y:100,title:"s"},{port:o(()=>[e(t,{id:"start_port"})]),_:1}),e(a,{id:3,x:650,y:100,title:"e"},{port:o(()=>[e(t,{id:"end_port"})]),_:1}),e(r,{id:2,x:300,y:10,title:"Simple Node"},{"header-left-icon":o(()=>[e(d)]),"header-right-icon":o(()=>[e(s)]),left:o(()=>[e(t,{id:"in_port",direction:"left"},{default:o(()=>[La]),_:1})]),right:o(()=>[e(t,{id:"out_port",direction:"right"},{default:o(()=>[Da]),_:1})]),_:1})]),connection:o(()=>[e(v,{from:{nodeId:1,portId:"start_port"},to:{nodeId:2,portId:"in_port"}}),e(v,{from:{nodeId:2,portId:"out_port"},to:{nodeId:3,portId:"end_port"}})]),_:1})])]),_:1})],64)}var Ua=g(Va,[["render",Ba]]),Fa=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"}));const qa={name:"demo-component-scrollbar"},Ra=l("h2",null,"Scrollbar",-1),Na=l("h3",null,"Basic Usage",-1),Wa={class:"scrollbar",style:{height:"260px",overflow:"auto"}},Ha=l("h3",null,"Horizontal Scroll",-1),Ka={class:"scrollbar",style:{height:"70px",overflow:"auto"}};function Ga(u,i,m,n,_,p){const t=c("v-layout"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Ra,Na,e(d,null,{code:o(()=>[e(a,{name:"scrollbar_basic_usage_html"})]),default:o(()=>[l("div",Wa,[e(t,{gutter:"",wrap:""},{default:o(()=>[(h(),f(y,null,E(10,s=>l("div",{key:s,class:"demo-cube demo-cube-num demo-cube-h14"},A(s),1)),64))]),_:1})])]),_:1}),Ha,e(d,null,{code:o(()=>[e(a,{name:"scrollbar_horizontal_scroll_html"})]),default:o(()=>[l("div",Ka,[e(t,{gutter:""},{default:o(()=>[(h(),f(y,null,E(20,s=>l("div",{key:s,class:"demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink"},A(s),1)),64))]),_:1})])]),_:1})],64)}var Qa=g(qa,[["render",Ga]]),Ja=Object.freeze(Object.defineProperty({__proto__:null,default:Qa},Symbol.toStringTag,{value:"Module"}));const Xa={name:"demo-component-selectbox",setup(){const u=x("Option 1"),i=O([{text:"Option 1",value:"Option 1"},{text:"Option 2",value:"Option 2"},{text:"Option 3",value:"Option 3"},{text:"Option 4",value:"Option 4"},{text:"Option 5",value:"Option 5"}]),m=x("Option 1");return{options:i,value:u,disabledValue:m}}},Ya=l("h2",null,"SelectBox",-1),Za=l("h3",null,"Basic Usage",-1),ei=l("h3",null,"Disabled Select",-1);function oi(u,i,m,n,_,p){const t=c("v-select-box"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Ya,Za,e(d,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=s=>n.value=s),items:n.options},null,8,["modelValue","items"])]),_:1}),ei,e(d,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_disabled_usage_html"})]),default:o(()=>[e(t,{modelValue:n.disabledValue,"onUpdate:modelValue":i[1]||(i[1]=s=>n.disabledValue=s),items:n.options,disabled:""},null,8,["modelValue","items"])]),_:1})],64)}var ti=g(Xa,[["render",oi]]),li=Object.freeze(Object.defineProperty({__proto__:null,default:ti},Symbol.toStringTag,{value:"Module"}));const ni={name:"demo-component-sidebar"},ci=l("h2",null,"Sidebar",-1),ai=l("h3",null,"Basic Usage",-1),ii={class:"demo-cube demo-cube-h60"},di=l("div",{class:"demo-cube demo-cube-a"},null,-1),si=l("h3",null,"Sidebar Section",-1),_i={class:"demo-cube demo-cube-h60"},ui=l("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),ri=l("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),mi=l("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),pi=l("div",{class:"demo-cube demo-cube-d"},null,-1);function bi(u,i,m,n,_,p){const t=c("v-sidebar"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block"),r=c("v-sidebar-section"),v=c("v-content");return h(),f(y,null,[ci,ai,e(s,null,{code:o(()=>[e(d,{name:"sidebar_basic_usage_html"})]),default:o(()=>[l("div",ii,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":""})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[di]),_:1})]),_:1})])]),_:1}),si,e(s,null,{code:o(()=>[e(d,{name:"sidebar_section_html"})]),default:o(()=>[l("div",_i,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":"","lt-border":"","rt-border":""},{default:o(()=>[e(v,{"w-full":"","h-full":"",scroll:""},{default:o(()=>[e(r,{title:"Section A"},{default:o(()=>[ui]),_:1}),e(r,{title:"Section B"},{default:o(()=>[ri]),_:1}),e(r,{title:"Section C","bottom-border":!1},{default:o(()=>[mi]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[pi]),_:1})]),_:1})])]),_:1})],64)}var vi=g(ni,[["render",bi]]),hi=Object.freeze(Object.defineProperty({__proto__:null,default:vi},Symbol.toStringTag,{value:"Module"}));const fi={name:"demo-component-space"},gi=l("h2",null,"Space",-1),yi=l("p",null,"Space between two elements.",-1),ki=l("h3",null,"Basic Usage",-1),xi=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),$i=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),Ci=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),Si=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1);function wi(u,i,m,n,_,p){const t=c("v-space"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[gi,yi,ki,e(s,null,{code:o(()=>[e(d,{name:"space_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[xi,e(t),$i,e(t),Ci,e(t),Si]),_:1})]),_:1})],64)}var Oi=g(fi,[["render",wi]]),ji=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"}));const Ti={name:"demo-component-splitview"},Ii=l("h2",null,"SplitView",-1),Pi=l("h3",null,"Basic Usage",-1),Vi={class:"demo-cube demo-cube-h60"},zi=l("div",{class:"demo-cube demo-cube-a"},null,-1),Ei=l("div",{class:"demo-cube demo-cube-b"},null,-1),Ai=l("div",{class:"demo-cube demo-cube-c"},null,-1),Mi=l("h3",null,"Horizontal SplitView",-1),Li={class:"demo-cube demo-cube-h60"},Di=l("div",{class:"demo-cube demo-cube-a"},null,-1),Bi=l("div",{class:"demo-cube demo-cube-b"},null,-1),Ui=l("div",{class:"demo-cube demo-cube-c"},null,-1);function Fi(u,i,m,n,_,p){const t=c("v-split-pane"),a=c("v-split-view"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[Ii,Pi,e(s,null,{code:o(()=>[e(d,{name:"splitview_basic_usage_html"})]),default:o(()=>[l("div",Vi,[e(a,{"snap-offset":30},{default:o(()=>[e(t,{size:"200px","min-size":40},{default:o(()=>[zi]),_:1}),e(t,{"min-size":150},{default:o(()=>[Ei]),_:1}),e(t,{size:"20%"},{default:o(()=>[Ai]),_:1})]),_:1})])]),_:1}),Mi,e(s,null,{code:o(()=>[e(d,{name:"splitview_horizontal_usage_html"})]),default:o(()=>[l("div",Li,[e(a,{horizontal:"","snap-offset":30},{default:o(()=>[e(t,null,{default:o(()=>[Di]),_:1}),e(t,null,{default:o(()=>[Bi]),_:1}),e(t,null,{default:o(()=>[Ui]),_:1})]),_:1})])]),_:1})],64)}var qi=g(Ti,[["render",Fi]]),Ri=Object.freeze(Object.defineProperty({__proto__:null,default:qi},Symbol.toStringTag,{value:"Module"}));const Ni={name:"demo-component-suggest",setup(){const u=x(!1),i=x(""),m=x([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),n=a=>a?m.value.filter(d=>d.text.toLowerCase().includes(a.toLowerCase())):m.value;return{suggestOpen:u,queryText:i,fetchData:(a,d,s)=>new Promise(r=>{const v=setTimeout(()=>{r(n(a))},100);s.onCancellationRequested(()=>{clearTimeout(v),r()})}),onError:()=>{},onSuggestionSelected:a=>{i.value=a.text,u.value=!1}}}},Wi=l("h2",null,"Suggest",-1),Hi=l("h3",null,"Basic Usage",-1),Ki=b("Toggle Suggest");function Gi(u,i,m,n,_,p){const t=c("v-button"),a=c("v-input"),d=c("v-suggest"),s=c("v-layout"),r=c("demo-code"),v=c("demo-block");return h(),f(y,null,[Wi,Hi,e(v,{class:"demo-suggest-block"},{code:o(()=>[e(r,{name:"suggest_basic_usage_html"})]),default:o(()=>[e(s,{gutter:""},{default:o(()=>[e(t,{onClick:i[0]||(i[0]=k=>n.suggestOpen=!n.suggestOpen)},{default:o(()=>[Ki]),_:1}),e(a,{modelValue:n.queryText,"onUpdate:modelValue":i[1]||(i[1]=k=>n.queryText=k),placeholder:"Enter your text",id:"input-1"},null,8,["modelValue"]),e(d,{visible:n.suggestOpen,"onUpdate:visible":i[2]||(i[2]=k=>n.suggestOpen=k),anchor:"input-1","anchor-constraint":!1,"search-query":n.queryText,"data-source":n.fetchData,"action-on-parent-scrolling":"update","loading-message":"Loading...","empty-result-message":"No suggestions.","max-item-count":20,"clear-on-invisible":"",onError:n.onError,onSelect:n.onSuggestionSelected},null,8,["visible","search-query","data-source","onError","onSelect"])]),_:1})]),_:1})],64)}var Qi=g(Ni,[["render",Gi]]),Ji=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"}));const Xi={name:"demo-component-tabs",setup(){return{selectedTab:x(null)}}},Yi=l("h2",null,"Tabs",-1),Zi=l("h3",null,"Basic Usage",-1),ed=b(" File 1.txt "),od=b(" File 2.txt "),td=b(" File 3.txt "),ld=b(" File 4.txt "),nd=b(" File 5.txt "),cd=b(" File 6.txt ");function ad(u,i,m,n,_,p){const t=c("v-icon-book"),a=c("v-tab"),d=c("v-tabs"),s=c("demo-code"),r=c("demo-block");return h(),f(y,null,[Yi,Zi,e(r,null,{code:o(()=>[e(s,{name:"tabs_basic_usage_html"})]),default:o(()=>[e(d,{modelValue:n.selectedTab,"onUpdate:modelValue":i[0]||(i[0]=v=>n.selectedTab=v)},{default:o(()=>[e(a,{"icon-color":"#B69E24",modified:""},{icon:o(()=>[e(t)]),default:o(()=>[ed]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[od]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[td]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[ld]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[nd]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[cd]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var id=g(Xi,[["render",ad]]),dd=Object.freeze(Object.defineProperty({__proto__:null,default:id},Symbol.toStringTag,{value:"Module"}));const sd={name:"demo-component-treeview",setup(){return{items:O([{id:1,name:"Root folder",expanded:!0,selected:!1,children:[{id:2,name:"Folder 1",expanded:!1,selected:!1,icon:"v-icon-folder",children:[{id:3,name:"File 1",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:4,name:"File 2",icon:"v-icon-doc-text",expanded:!1,selected:!1}]},{id:5,name:"File 3",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:6,name:"Folder 2",icon:"v-icon-folder",expanded:!1,selected:!1,children:[]}]}])}}},_d=l("h2",null,"Treeview",-1),ud=l("p",null,"Display a set of data with hierarchies.",-1),rd=l("h3",null,"Basic Usage",-1);function md(u,i,m,n,_,p){const t=c("v-treeview"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[_d,ud,rd,e(d,null,{code:o(()=>[e(a,{name:"treeview_basic_usage_html"})]),default:o(()=>[e(t,{items:n.items},null,8,["items"])]),_:1})],64)}var pd=g(sd,[["render",md]]),bd=Object.freeze(Object.defineProperty({__proto__:null,default:pd},Symbol.toStringTag,{value:"Module"}));const vd={"../components/demo-block.vue":ge,"../components/demo-code.vue":jt,"../components/demo-component-action-bar.vue":Ft,"../components/demo-component-action-list.vue":cl,"../components/demo-component-autocomplete.vue":pl,"../components/demo-component-button.vue":wl,"../components/demo-component-checkbox.vue":Ll,"../components/demo-component-content.vue":Gl,"../components/demo-component-draggable.vue":fn,"../components/demo-component-dropdown.vue":Sn,"../components/demo-component-fieldset.vue":Dn,"../components/demo-component-floating-toolbar.vue":ac,"../components/demo-component-icon.vue":kc,"../components/demo-component-input.vue":Pc,"../components/demo-component-installation.vue":Fc,"../components/demo-component-keybinding-label.vue":Jc,"../components/demo-component-keyboard-shortcuts.vue":ta,"../components/demo-component-label.vue":_a,"../components/demo-component-layout.vue":ka,"../components/demo-component-list.vue":Pa,"../components/demo-component-node-graph.vue":Fa,"../components/demo-component-scrollbar.vue":Ja,"../components/demo-component-selectbox.vue":li,"../components/demo-component-sidebar.vue":hi,"../components/demo-component-space.vue":ji,"../components/demo-component-splitview.vue":Ri,"../components/demo-component-suggest.vue":Ji,"../components/demo-component-tabs.vue":dd,"../components/demo-component-treeview.vue":bd};var hd={install:u=>{for(const[i,m]of Object.entries(vd)){const n=G(i.split("/").pop().replace(/\.\w+$/,""));u.component(n,m.default||m)}}};const w=Q(oe);w.use(re);w.use(J);w.use(hd);w.use(X);w.mount("#app");export{g as _};
