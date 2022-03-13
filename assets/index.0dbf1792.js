import{c as L,r as c,o as h,a as he,b as fe,d as f,e as l,f as z,g as e,w as o,t as ge,h as T,i as ye,F as y,j as b,k as x,l as O,m as E,n as A,p as ke,q as xe,s as $e,u as Ce}from"./vendor.3718d49c.js";const je=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))n(_);new MutationObserver(_=>{for(const p of _)if(p.type==="childList")for(const t of p.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function r(_){const p={};return _.integrity&&(p.integrity=_.integrity),_.referrerpolicy&&(p.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?p.credentials="include":_.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(_){if(_.ep)return;_.ep=!0;const p=r(_);fetch(_.href,p)}};je();var g=(u,i)=>{const r=u.__vccOpts||u;for(const[n,_]of i)r[n]=_;return r};const Se={name:"App"};function we(u,i,r,n,_,p){const t=c("router-view");return h(),L(t)}var Oe=g(Se,[["render",we]]);const Te="modulepreload",M={},Ie="/ruleengine-ui-demo/",j=function(i,r){return!r||r.length===0?i():Promise.all(r.map(n=>{if(n=`${Ie}${n}`,n in M)return;M[n]=!0;const _=n.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${p}`))return;const t=document.createElement("link");if(t.rel=_?"stylesheet":Te,_||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),_)return new Promise((a,d)=>{t.addEventListener("load",a),t.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>i())},Pe=()=>j(()=>import("./demo-component-layout.f1cda98d.js"),["assets/demo-component-layout.f1cda98d.js","assets/vendor.3718d49c.js"]),Ve=()=>j(()=>import("./demo-component-page.a32c06b6.js"),["assets/demo-component-page.a32c06b6.js","assets/vendor.3718d49c.js"]);var ze=[{path:"component",redirect:"/component/installation",name:"component",component:Pe,children:[{path:":id",name:"component-content",props:!0,component:Ve}]}];const Ee=()=>j(()=>import("./demo-layout.c3208f4a.js"),["assets/demo-layout.c3208f4a.js","assets/demo-header.06bbb8ba.js","assets/vendor.3718d49c.js"]),Ae=()=>j(()=>import("./demo-home.7b7fee55.js"),["assets/demo-home.7b7fee55.js","assets/vendor.3718d49c.js"]);var Me=[{path:"/",component:Ee,children:[{path:"",name:"home",component:Ae},...ze]}];const Le=()=>j(()=>import("./demo-not-found.0d0c0453.js"),["assets/demo-not-found.0d0c0453.js","assets/demo-header.06bbb8ba.js","assets/vendor.3718d49c.js"]);var De=[{path:"/:pathMatch(.*)",name:"not-found",component:Le}];const Be=he({history:fe(),routes:[...Me,...De]}),Ue={name:"demo-block"},Fe={class:"demo-block"},qe={class:"demo-block__source"},Re={class:"demo-block__code"};function Ne(u,i,r,n,_,p){const t=c("v-sidebar-section");return h(),f("div",Fe,[l("div",qe,[z(u.$slots,"default")]),l("div",Re,[e(t,{"bottom-border":!1,"header-border":!1,title:"Code"},{default:o(()=>[z(u.$slots,"code")]),_:3})])])}var We=g(Ue,[["render",Ne]]),He=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"}));const Ke=`
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
`;var Je=[{name:"actionbar_basic_usage_html",code:Ke,lang:"html"},{name:"actionbar_disabled_action_usage_html",code:Ge,lang:"html"},{name:"actionbar_grouping_action_usage_html",code:Qe,lang:"html"}],D=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"}));const Xe=`
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
`;var to=[{name:"actionlist_basic_usage_html",code:Xe,lang:"html"},{name:"actionlist_disabled_action_usage_html",code:Ye,lang:"html"},{name:"actionlist_vertical_action_list_usage_html",code:Ze,lang:"html"},{name:"actionlist_action_with_label_usage_html",code:eo,lang:"html"},{name:"actionlist_vertical_action_with_label_usage_html",code:oo,lang:"html"}],B=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"}));const lo=`
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
`,no=`
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
`;var ao=[{name:"autocomplete_basic_usage_html",code:lo,lang:"html"},{name:"autocomplete_disabled_usage_html",code:no,lang:"html"},{name:"autocomplete_with_icon_usage_html",code:co,lang:"html"}],U=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"}));const io=`
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
`;var _o=[{name:"button_basic_usage_html",code:io,lang:"html"},{name:"button_disabled_html",code:so,lang:"html"}],F=Object.freeze(Object.defineProperty({__proto__:null,default:_o},Symbol.toStringTag,{value:"Module"}));const uo=`
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
`;var ro=[{name:"checkbox_basic_usage_html",code:uo,lang:"html"},{name:"checkbox_disabled_html",code:mo,lang:"html"}],q=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"}));const po=`
<template>
  <v-content h-full scroll padding="md">
    <div class="demo-cube demo-cube-a demo-cube-h14" />
    <div class="demo-cube demo-cube-b demo-cube-h14" />
    <div class="demo-cube demo-cube-c demo-cube-h14" />
    <div class="demo-cube demo-cube-d demo-cube-h14" />
  </v-content>
</template>
`;var bo=[{name:"content_basic_usage_html",code:po,lang:"html"}],R=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));const vo=`
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
`,yo=`
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
`;var ko=[{name:"draggable_basic_usage_html",code:vo,lang:"html"},{name:"draggable_with_hint_html",code:ho,lang:"html"},{name:"draggable_fixed_html",code:fo,lang:"html"},{name:"draggable_disabled_html",code:go,lang:"html"},{name:"draggable_actions_html",code:yo,lang:"html"}],N=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"}));const xo=`
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
`;var $o=[{name:"dropdown_basic_usage_html",code:xo,lang:"html"}],W=Object.freeze(Object.defineProperty({__proto__:null,default:$o},Symbol.toStringTag,{value:"Module"}));const Co=`
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
`,jo=`
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
`;var wo=[{name:"fieldset_basic_usage_html",code:Co,lang:"html"},{name:"fieldset_vertical_field_layout_html",code:jo,lang:"html"},{name:"fieldset_title_actions_html",code:So,lang:"html"}],H=Object.freeze(Object.defineProperty({__proto__:null,default:wo},Symbol.toStringTag,{value:"Module"}));const Oo=`
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
`,Po=`
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
`;var Vo=[{name:"floating_toolbar_basic_usage_html",code:Oo,lang:"html"},{name:"floating_toolbar_vertical_html",code:To,lang:"html"},{name:"floating_toolbar_fixed_html",code:Io,lang:"html"},{name:"floating_toolbar_with_labels_usage_html",code:Po,lang:"html"}],K=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"}));const zo=`
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
`,Eo=`
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
`;var Ao=[{name:"icon_basic_usage_html",code:zo,lang:"html"},{name:"codicons_html",code:Eo,lang:"html"}],G=Object.freeze(Object.defineProperty({__proto__:null,default:Ao},Symbol.toStringTag,{value:"Module"}));const Mo=`
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
`,Lo=`
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
`,Do=`
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
`,Bo=`
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
`;var Uo=[{name:"input_basic_usage_html",code:Mo,lang:"html"},{name:"input_disabled_html",code:Lo,lang:"html"},{name:"input_with_icon_html",code:Do,lang:"html"},{name:"input_message_html",code:Bo,lang:"html"}],Q=Object.freeze(Object.defineProperty({__proto__:null,default:Uo},Symbol.toStringTag,{value:"Module"}));const Fo=`
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
`,qo=`
<v-action-bar>
  <v-action @click="onClick">
    <v-icon-play />
  </v-action>
</v-action-bar>
`;var Ro=[{name:"installation_usage_js",code:Fo,lang:"javascript"},{name:"installation_usage_html",code:qo,lang:"html"}],J=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"}));const No=`
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
`;var Ho=[{name:"keybindinglabel_basic_usage_html",code:No,lang:"html"},{name:"keybindinglabel_other_separator_usage_html",code:Wo,lang:"html"}],X=Object.freeze(Object.defineProperty({__proto__:null,default:Ho},Symbol.toStringTag,{value:"Module"}));const Ko=`
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
`;var Go=[{name:"keyboard_shortcuts_basic_usage_html",code:Ko,lang:"html"}],Y=Object.freeze(Object.defineProperty({__proto__:null,default:Go},Symbol.toStringTag,{value:"Module"}));const Qo=`
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
`;var Jo=[{name:"label_basic_usage_html",code:Qo,lang:"html"}],Z=Object.freeze(Object.defineProperty({__proto__:null,default:Jo},Symbol.toStringTag,{value:"Module"}));const Xo=`
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
`;var Yo=[{name:"layout_basic_html",code:Xo,lang:"html"}],ee=Object.freeze(Object.defineProperty({__proto__:null,default:Yo},Symbol.toStringTag,{value:"Module"}));const Zo=`
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
`;var ot=[{name:"list_basic_usage_html",code:Zo,lang:"html"},{name:"list_focusable_html",code:et,lang:"html"}],oe=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));const tt=`
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
`;var lt=[{name:"node_graph_basic_usage_html",code:tt,lang:"html"}],te=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));const nt=`
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
`;var at=[{name:"scrollbar_basic_usage_html",code:nt,lang:"html"},{name:"scrollbar_horizontal_scroll_html",code:ct,lang:"html"}],le=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));const it=`
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
`,dt=`
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
`;var st=[{name:"selectbox_basic_usage_html",code:it,lang:"html"},{name:"selectbox_disabled_usage_html",code:dt,lang:"html"}],ne=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));const _t=`
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
`;var mt=[{name:"sidebar_basic_usage_html",code:_t,lang:"html"},{name:"sidebar_section_html",code:ut,lang:"html"}],ce=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));const rt=`
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
`;var pt=[{name:"space_basic_usage_html",code:rt,lang:"html"}],ae=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));const bt=`
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
`;var ht=[{name:"splitview_basic_usage_html",code:bt,lang:"html"},{name:"splitview_horizontal_usage_html",code:vt,lang:"html"}],ie=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));const ft=`
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
`;var gt=[{name:"suggest_basic_usage_html",code:ft,lang:"html"}],de=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"}));const yt=`
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
`;var kt=[{name:"tabs_basic_usage_html",code:yt,lang:"html"}],se=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"}));const xt=`
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
`;var $t=[{name:"treeview_basic_usage_html",code:xt,lang:"html"}],_e=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"}));const Ct={"./component-action-bar.js":D,"./component-action-list.js":B,"./component-autocomplete.js":U,"./component-button.js":F,"./component-checkbox.js":q,"./component-content.js":R,"./component-draggable.js":N,"./component-dropdown.js":W,"./component-fieldset.js":H,"./component-floating-toolbar.js":K,"./component-icon.js":G,"./component-input.js":Q,"./component-installation.js":J,"./component-keybinding-label.js":X,"./component-keyboard-shortcuts.js":Y,"./component-label.js":Z,"./component-layout.js":ee,"./component-list.js":oe,"./component-node-graph.js":te,"./component-scrollbar.js":le,"./component-selectbox.js":ne,"./component-sidebar.js":ce,"./component-space.js":ae,"./component-splitview.js":ie,"./component-suggest.js":de,"./component-tabs.js":se,"./component-treeview.js":_e},w=[];for(const[,u]of Object.entries(Ct))w.push.apply(w,u.default);var jt=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));const St={name:"demo-code",props:{lang:{type:String,default:null},code:{type:String,default:null},name:{type:String,default:null}},setup(u){const{lang:i,code:r,name:n}=ge(u),_=T(()=>w.find(a=>a.name===n.value)),p=T(()=>{var a;return r.value||((a=_.value)==null?void 0:a.code.trim())}),t=T(()=>{var a;return i.value||((a=_.value)==null?void 0:a.lang)});return{content:p,language:t}}};function wt(u,i,r,n,_,p){const t=c("highlightjs");return n.content?(h(),L(t,{key:0,autodetect:!1,language:n.language,code:n.content},null,8,["language","code"])):ye("",!0)}var Ot=g(St,[["render",wt]]),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));const It={name:"demo-component-action-bar",setup(){return{onClick:()=>{}}}},Pt=l("h2",null,"ActionBar",-1),Vt=l("h3",null,"Basic Usage",-1),zt=l("h3",null,"Disabled Action",-1),Et=l("h3",null,"Grouping Action",-1),At=l("span",{class:"codicon codicon-play"},null,-1),Mt=l("span",{class:"codicon codicon-stop"},null,-1),Lt=l("span",{class:"codicon codicon-plus"},null,-1),Dt=l("span",{class:"codicon codicon-zoom-in"},null,-1),Bt=l("span",{class:"codicon codicon-zoom-out"},null,-1);function Ut(u,i,r,n,_,p){const t=c("v-icon-play"),a=c("v-action"),d=c("v-icon-stop"),s=c("v-icon-plus"),m=c("v-icon-folder"),v=c("v-action-bar"),k=c("demo-code"),$=c("demo-block"),C=c("v-action-group");return h(),f(y,null,[Pt,Vt,e($,null,{code:o(()=>[e(k,{name:"actionbar_basic_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[e(s)]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[e(m)]),_:1},8,["onClick"])]),_:1})]),_:1}),zt,e($,null,{code:o(()=>[e(k,{name:"actionbar_disabled_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[e(t)]),_:1},8,["onClick"]),e(a,{disabled:"",onClick:n.onClick},{default:o(()=>[e(d)]),_:1},8,["onClick"])]),_:1})]),_:1}),Et,e($,null,{code:o(()=>[e(k,{name:"actionbar_grouping_action_usage_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(C,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[At]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[Mt]),_:1},8,["onClick"])]),_:1}),e(a,{onClick:n.onClick},{default:o(()=>[Lt]),_:1},8,["onClick"]),e(C,null,{default:o(()=>[e(a,{onClick:n.onClick},{default:o(()=>[Dt]),_:1},8,["onClick"]),e(a,{onClick:n.onClick},{default:o(()=>[Bt]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var Ft=g(It,[["render",Ut]]),qt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"}));const Rt={name:"demo-component-action-list",setup(){return{onClick:()=>{}}}},Nt=l("h2",null,"ActionList",-1),Wt=l("h3",null,"Basic Usage",-1),Ht=l("h3",null,"Disabled Action Item",-1),Kt=l("h3",null,"Vertical Action List",-1),Gt=l("h3",null,"Action With Label",-1),Qt=b("Play"),Jt=b("Stop"),Xt=b("Add Item"),Yt=b("Choose Folder"),Zt=l("h3",null,"Vertcal Action With Label",-1),el=b("Play"),ol=b("Stop"),tl=b("Add Item"),ll=b("Choose Folder");function nl(u,i,r,n,_,p){const t=c("v-action-item"),a=c("v-action-list"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[Nt,Wt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{title:"Play",icon:"play",onClick:n.onClick},null,8,["onClick"]),e(t,{title:"Stop",icon:"debug-stop",onClick:n.onClick},null,8,["onClick"]),e(t,{title:"Add Item",icon:"plus",onClick:n.onClick},null,8,["onClick"]),e(t,{title:"Choose Folder",icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1}),Ht,e(s,null,{code:o(()=>[e(d,{name:"actionlist_disabled_action_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"plus",onClick:n.onClick},null,8,["onClick"]),e(t,{disabled:"",icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1}),Kt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_vertical_action_list_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"plus",onClick:n.onClick},null,8,["onClick"]),e(t,{icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1}),Gt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_action_with_label_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},{default:o(()=>[Qt]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},{default:o(()=>[Jt]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:n.onClick},{default:o(()=>[Xt]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:n.onClick},{default:o(()=>[Yt]),_:1},8,["onClick"])]),_:1})]),_:1}),Zt,e(s,null,{code:o(()=>[e(d,{name:"actionlist_vertical_action_with_label_usage_html"})]),default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"play",onClick:n.onClick},{default:o(()=>[el]),_:1},8,["onClick"]),e(t,{icon:"debug-stop",onClick:n.onClick},{default:o(()=>[ol]),_:1},8,["onClick"]),e(t,{icon:"plus",onClick:n.onClick},{default:o(()=>[tl]),_:1},8,["onClick"]),e(t,{icon:"folder",onClick:n.onClick},{default:o(()=>[ll]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var cl=g(Rt,[["render",nl]]),al=Object.freeze(Object.defineProperty({__proto__:null,default:cl},Symbol.toStringTag,{value:"Module"}));const il={name:"demo-component-autocomplete",setup(){const u=x(""),i=x([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),r=_=>_?i.value.filter(p=>p.text.toLowerCase().includes(_.toLowerCase())):i.value,n=(_,p,t)=>new Promise(a=>{const d=setTimeout(()=>{a(r(_))},100);t.onCancellationRequested(()=>{clearTimeout(d),a()})});return{value:u,withIconValue:x(""),fetchAutocompleteData:n,onClick:()=>{}}}},dl=l("h2",null,"Autocomplete",-1),sl=l("h3",null,"Basic Usage",-1),_l=l("h3",null,"Disabled Autocomplete",-1),ul=l("h3",null,"Autocomplete With Icon",-1),ml=l("span",{class:"codicon codicon-file-code"},null,-1);function rl(u,i,r,n,_,p){const t=c("v-autocomplete"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[dl,sl,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=s=>n.value=s),"data-source":n.fetchAutocompleteData,placeholder:"Enter your text","loading-message":"Loading...","empty-result-message":"No matching results."},null,8,["modelValue","data-source"])]),_:1}),_l,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_disabled_usage_html"})]),default:o(()=>[e(t,{placeholder:"Enter your text",disabled:""})]),_:1}),ul,e(d,{class:"demo-autocomplete-block"},{code:o(()=>[e(a,{name:"autocomplete_with_icon_usage_html"})]),default:o(()=>[e(t,{modelValue:n.withIconValue,"onUpdate:modelValue":i[1]||(i[1]=s=>n.withIconValue=s),"data-source":n.fetchAutocompleteData,placeholder:"Enter your text","loading-message":"Loading...","empty-result-message":"No matching results.","icon-clickable":"",onIconClick:n.onClick},{icon:o(()=>[ml]),_:1},8,["modelValue","data-source","onIconClick"])]),_:1})],64)}var pl=g(il,[["render",rl]]),bl=Object.freeze(Object.defineProperty({__proto__:null,default:pl},Symbol.toStringTag,{value:"Module"}));const vl={name:"demo-component-button"},hl=l("h2",null,"Button",-1),fl=l("p",null,"Simple button.",-1),gl=l("h3",null,"Basic Usage",-1),yl=b("Default"),kl=b("Secondary"),xl=l("h3",null,"Disabled Button",-1),$l=b("Default"),Cl=b("Secondary");function jl(u,i,r,n,_,p){const t=c("v-button"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[hl,fl,gl,e(s,null,{code:o(()=>[e(d,{name:"button_basic_usage_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,null,{default:o(()=>[yl]),_:1}),e(t,{secondary:""},{default:o(()=>[kl]),_:1})]),_:1})]),_:1}),xl,e(s,null,{code:o(()=>[e(d,{name:"button_disabled_html"})]),default:o(()=>[e(a,{gutter:""},{default:o(()=>[e(t,{disabled:""},{default:o(()=>[$l]),_:1}),e(t,{disabled:"",secondary:""},{default:o(()=>[Cl]),_:1})]),_:1})]),_:1})],64)}var Sl=g(vl,[["render",jl]]),wl=Object.freeze(Object.defineProperty({__proto__:null,default:Sl},Symbol.toStringTag,{value:"Module"}));const Ol={name:"demo-component-checkbox",setup(){const u=x(!0),i=x(!1),r=x(!0),n=x(!1);return{checked:u,unchecked:i,disabledChecked:r,disabledUnchecked:n}}},Tl=l("h2",null,"Checkbox",-1),Il=l("h3",null,"Basic Usage",-1),Pl=b("Checked"),Vl=b("Unchecked"),zl=l("h3",null,"Disabled State",-1),El=b("Checked"),Al=b("Unchecked");function Ml(u,i,r,n,_,p){const t=c("v-checkbox"),a=c("v-label"),d=c("v-layout"),s=c("demo-code"),m=c("demo-block");return h(),f(y,null,[Tl,Il,e(m,null,{code:o(()=>[e(s,{name:"checkbox_basic_usage_html"})]),default:o(()=>[e(d,{gutter:"",wrap:""},{default:o(()=>[e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_1",modelValue:n.checked,"onUpdate:modelValue":i[0]||(i[0]=v=>n.checked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_1"},{default:o(()=>[Pl]),_:1})]),_:1}),e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_2",modelValue:n.unchecked,"onUpdate:modelValue":i[1]||(i[1]=v=>n.unchecked=v)},null,8,["modelValue"]),e(a,{for:"checkbox_2"},{default:o(()=>[Vl]),_:1})]),_:1})]),_:1})]),_:1}),zl,e(m,null,{code:o(()=>[e(s,{name:"checkbox_disabled_html"})]),default:o(()=>[e(d,{gutter:"",wrap:""},{default:o(()=>[e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_3",modelValue:n.disabledChecked,"onUpdate:modelValue":i[2]||(i[2]=v=>n.disabledChecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_3"},{default:o(()=>[El]),_:1})]),_:1}),e(d,{gutter:"","w-full":"","h-center":""},{default:o(()=>[e(t,{id:"checkbox_4",modelValue:n.disabledUnchecked,"onUpdate:modelValue":i[3]||(i[3]=v=>n.disabledUnchecked=v),disabled:""},null,8,["modelValue"]),e(a,{for:"checkbox_4"},{default:o(()=>[Al]),_:1})]),_:1})]),_:1})]),_:1})],64)}var Ll=g(Ol,[["render",Ml]]),Dl=Object.freeze(Object.defineProperty({__proto__:null,default:Ll},Symbol.toStringTag,{value:"Module"}));const Bl={name:"demo-component-content"},Ul=l("h2",null,"Content",-1),Fl=l("h3",null,"Basic Usage",-1),ql={class:"demo-cube demo-cube-h52"},Rl=l("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),Nl=l("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),Wl=l("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),Hl=l("div",{class:"demo-cube demo-cube-d demo-cube-h14"},null,-1);function Kl(u,i,r,n,_,p){const t=c("v-content"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Ul,Fl,e(d,null,{code:o(()=>[e(a,{name:"content_basic_usage_html"})]),default:o(()=>[l("div",ql,[e(t,{"h-full":"",scroll:"",padding:"md"},{default:o(()=>[Rl,Nl,Wl,Hl]),_:1})])]),_:1})],64)}var Gl=g(Bl,[["render",Kl]]),Ql=Object.freeze(Object.defineProperty({__proto__:null,default:Gl},Symbol.toStringTag,{value:"Module"}));const Jl={name:"demo-component-draggable",setup(){return{onClick:()=>{}}}},Xl=l("h2",null,"Draggable",-1),Yl=l("h3",null,"Basic Usage",-1),Zl=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),en=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),on=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),tn=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),ln=l("h3",null,"Draggable With Hint",-1),nn=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),cn=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),an=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),dn=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),sn=l("h3",null,"Fixed Draggable",-1),_n=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),un=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),mn=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),rn=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1),pn=l("h3",null,"Disabled Draggable",-1),bn=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),vn=l("h3",null,"Draggable Actions",-1);function hn(u,i,r,n,_,p){const t=c("v-draggable"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block"),m=c("v-action-item"),v=c("v-action-list");return h(),f(y,null,[Xl,Yl,e(s,null,{code:o(()=>[e(d,{name:"draggable_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,null,{default:o(()=>[Zl]),_:1}),e(t,null,{default:o(()=>[en]),_:1}),e(t,null,{default:o(()=>[on]),_:1}),e(t,null,{default:o(()=>[tn]),_:1})]),_:1})]),_:1}),ln,e(s,null,{code:o(()=>[e(d,{name:"draggable_with_hint_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{hint:""},{default:o(()=>[nn]),_:1}),e(t,{hint:""},{default:o(()=>[cn]),_:1}),e(t,{hint:""},{default:o(()=>[an]),_:1}),e(t,{hint:""},{default:o(()=>[dn]),_:1})]),_:1})]),_:1}),sn,e(s,null,{code:o(()=>[e(d,{name:"draggable_fixed_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{fixed:""},{default:o(()=>[_n]),_:1}),e(t,{fixed:""},{default:o(()=>[un]),_:1}),e(t,{fixed:""},{default:o(()=>[mn]),_:1}),e(t,{fixed:""},{default:o(()=>[rn]),_:1})]),_:1})]),_:1}),pn,e(s,null,{code:o(()=>[e(d,{name:"draggable_disabled_html"})]),default:o(()=>[e(a,null,{default:o(()=>[e(t,{disabled:""},{default:o(()=>[bn]),_:1})]),_:1})]),_:1}),vn,e(s,null,{code:o(()=>[e(d,{name:"draggable_actions_html"})]),default:o(()=>[e(v,null,{default:o(()=>[e(t,null,{default:o(()=>[e(m,{title:"Add",icon:"add",onClick:n.onClick},null,8,["onClick"])]),_:1}),e(t,null,{default:o(()=>[e(m,{title:"Edit",icon:"edit",onClick:n.onClick},null,8,["onClick"])]),_:1}),e(t,{hint:""},{default:o(()=>[e(m,{title:"Remove",icon:"trash",onClick:n.onClick},null,8,["onClick"])]),_:1}),e(t,{hint:""},{default:o(()=>[e(m,{title:"Choose Folder",icon:"folder",onClick:n.onClick},null,8,["onClick"])]),_:1})]),_:1})]),_:1})],64)}var fn=g(Jl,[["render",hn]]),gn=Object.freeze(Object.defineProperty({__proto__:null,default:fn},Symbol.toStringTag,{value:"Module"}));const yn={name:"demo-component-dropdown",setup(){return{dropdownOpen:x(!1),items:x([{id:1,text:"Item 1",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:2,text:"Item 2",icon:"v-icon-doc-text",iconColor:"#B69E24"},{id:3,text:"Item 3",icon:"v-icon-doc-text",iconColor:"#B69E24"}])}}},kn=l("h2",null,"Dropdown",-1),xn=l("h3",null,"Basic Usage",-1),$n=b(" Toggle Dropdown ");function Cn(u,i,r,n,_,p){const t=c("v-button"),a=c("v-list"),d=c("v-content"),s=c("v-dropdown"),m=c("demo-code"),v=c("demo-block");return h(),f(y,null,[kn,xn,e(v,null,{code:o(()=>[e(m,{name:"dropdown_basic_usage_html"})]),default:o(()=>[e(t,{id:"button-1",onClick:i[0]||(i[0]=k=>n.dropdownOpen=!n.dropdownOpen)},{default:o(()=>[$n]),_:1}),e(s,{visible:n.dropdownOpen,"onUpdate:visible":i[2]||(i[2]=k=>n.dropdownOpen=k),anchor:"button-1","anchor-constraint":"","offset-y":4},{default:o(()=>[e(d,{fill:""},{default:o(()=>[e(a,{items:n.items,"onUpdate:selected":i[1]||(i[1]=k=>n.dropdownOpen=!1)},null,8,["items"])]),_:1})]),_:1},8,["visible"])]),_:1})],64)}var jn=g(yn,[["render",Cn]]),Sn=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"}));const wn={name:"demo-component-fieldset"},On=l("h2",null,"Fieldset",-1),Tn=l("h3",null,"Basic Usage",-1),In=b("Label 1"),Pn=b("Label 2"),Vn=l("h3",null,"Vertical Field Layout",-1),zn=b("Label 1"),En=b("Label 2"),An=l("h3",null,"Fieldset Title Actions",-1),Mn=b("Label 1");function Ln(u,i,r,n,_,p){const t=c("v-label"),a=c("v-input"),d=c("v-field-layout"),s=c("v-fieldset"),m=c("demo-code"),v=c("demo-block"),k=c("v-action-item"),$=c("v-action-list");return h(),f(y,null,[On,Tn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(m,{name:"fieldset_basic_usage_html"})]),default:o(()=>[e(s,{label:"Title"},{default:o(()=>[e(d,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[In]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(d,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Pn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),Vn,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(m,{name:"fieldset_vertical_field_layout_html"})]),default:o(()=>[e(s,{label:"Title"},{default:o(()=>[e(d,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[zn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1}),e(d,{vertical:""},{label:o(()=>[e(t,{truncate:""},{default:o(()=>[En]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1}),An,e(v,{class:"demo-fieldset-block"},{code:o(()=>[e(m,{name:"fieldset_title_actions_html"})]),default:o(()=>[e(s,{label:"Title"},{"label-actions":o(()=>[e($,null,{default:o(()=>[e(k,{icon:"add",title:"Add"}),e(k,{icon:"history",title:"History"}),e(k,{icon:"trash",title:"Remove"})]),_:1})]),default:o(()=>[e(d,null,{label:o(()=>[e(t,{truncate:""},{default:o(()=>[Mn]),_:1})]),value:o(()=>[e(a,{placeholder:"Enter your text"})]),_:1})]),_:1})]),_:1})],64)}var Dn=g(wn,[["render",Ln]]),Bn=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"}));const Un={name:"demo-component-floating-toolbar"},Fn=l("h2",null,"FloatingToolbar",-1),qn=l("h3",null,"Basic Usage",-1),Rn={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Nn=l("h3",null,"Vertical Floating Toolbar",-1),Wn={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},Hn=l("h3",null,"Fixed Floating Toolbar",-1),Kn={class:"demo-cube demo-cube-c demo-cube-h14"},Gn=l("h3",null,"Floating Toolbar With Labels",-1),Qn={class:"demo-cube demo-cube-b demo-cube-h52 demo-cube-relative"},Jn=b("Add Item"),Xn=b("History"),Yn=b("Choose Folder"),Zn={class:"demo-cube demo-cube-c demo-cube-h52 demo-cube-relative"},ec=b("Add Item"),oc=b("History"),tc=b("Choose Folder"),lc=b("Play"),nc=b("Stop");function cc(u,i,r,n,_,p){const t=c("v-action-item"),a=c("v-action-list"),d=c("v-floating-toolbar"),s=c("demo-code"),m=c("demo-block"),v=c("v-layout");return h(),f(y,null,[Fn,qn,e(m,null,{code:o(()=>[e(s,{name:"floating_toolbar_basic_usage_html"})]),default:o(()=>[l("div",Rn,[e(d,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Nn,e(m,null,{code:o(()=>[e(s,{name:"floating_toolbar_vertical_html"})]),default:o(()=>[l("div",Wn,[e(d,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Hn,e(m,null,{code:o(()=>[e(s,{name:"floating_toolbar_fixed_html"})]),default:o(()=>[l("div",Kn,[e(d,{fixed:"",x:300,y:6},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"}),e(t,{icon:"history"}),e(t,{icon:"folder"}),e(t,{icon:"play",disabled:""}),e(t,{icon:"debug-stop",disabled:""})]),_:1})]),_:1})])]),_:1}),Gn,e(m,null,{code:o(()=>[e(s,{name:"floating_toolbar_with_labels_usage_html"})]),default:o(()=>[e(v,{"h-full":"","w-full":""},{default:o(()=>[e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[l("div",Qn,[e(d,{x:10,y:10},{default:o(()=>[e(a,null,{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[Jn]),_:1}),e(t,{icon:"history"},{default:o(()=>[Xn]),_:1}),e(t,{icon:"folder"},{default:o(()=>[Yn]),_:1})]),_:1})]),_:1})])]),_:1}),e(v,{"h-full":"",class:"demo-cube-w50p"},{default:o(()=>[l("div",Zn,[e(d,{vertical:"",x:10,y:10},{default:o(()=>[e(a,{vertical:""},{default:o(()=>[e(t,{icon:"add"},{default:o(()=>[ec]),_:1}),e(t,{icon:"history"},{default:o(()=>[oc]),_:1}),e(t,{icon:"folder"},{default:o(()=>[tc]),_:1}),e(t,{icon:"play",disabled:""},{default:o(()=>[lc]),_:1}),e(t,{icon:"debug-stop"},{default:o(()=>[nc]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})],64)}var ac=g(Un,[["render",cc]]),ic=Object.freeze(Object.defineProperty({__proto__:null,default:ac},Symbol.toStringTag,{value:"Module"}));const dc={name:"demo-component-space"},sc=l("h2",null,"Icon",-1),_c=l("p",null,"Library provides some svg icons.",-1),uc=l("h3",null,"Built-in Icons",-1),mc=l("h3",null,"Codicons",-1),rc=l("p",null,[b(" The "),l("a",{href:"https://github.com/microsoft/vscode-codicons",class:"demo-external-link",target:"_blank"},"Codicon library"),b(" contains all the icons used in VS Code. "),l("a",{href:"https://code.visualstudio.com/api/references/icons-in-labels#icon-listing",class:"demo-external-link",target:"_blank"},"All list of icons"),b(". ")],-1),pc=l("i",{class:"codicon codicon-account"},null,-1),bc=l("i",{class:"codicon codicon-activate-breakpoints"},null,-1),vc=l("i",{class:"codicon codicon-add"},null,-1),hc=l("i",{class:"codicon codicon-alert"},null,-1),fc=l("i",{class:"codicon codicon-archive"},null,-1),gc=l("i",{class:"codicon codicon-array"},null,-1);function yc(u,i,r,n,_,p){const t=c("v-icon-book"),a=c("v-icon-checkmark"),d=c("v-icon-chevron-down"),s=c("v-icon-circle"),m=c("v-icon-close"),v=c("v-icon-doc-text"),k=c("v-icon-file-menu"),$=c("v-icon-folder"),C=c("v-icon-play"),ue=c("v-icon-stop"),me=c("v-icon-plus-bold"),re=c("v-icon-plus"),pe=c("v-icon-script"),be=c("v-icon-sidebar-left"),ve=c("v-icon-sidebar-right"),I=c("v-layout"),P=c("demo-code"),V=c("demo-block");return h(),f(y,null,[sc,_c,uc,e(V,null,{code:o(()=>[e(P,{name:"icon_basic_usage_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[e(t),e(a),e(d),e(s),e(m),e(v),e(k),e($),e(C),e(ue),e(me),e(re),e(pe),e(be),e(ve)]),_:1})]),_:1}),mc,rc,e(V,null,{code:o(()=>[e(P,{name:"codicons_html"})]),default:o(()=>[e(I,{gutter:"",wrap:""},{default:o(()=>[pc,bc,vc,hc,fc,gc]),_:1})]),_:1})],64)}var kc=g(dc,[["render",yc]]),xc=Object.freeze(Object.defineProperty({__proto__:null,default:kc},Symbol.toStringTag,{value:"Module"}));const $c={name:"demo-component-button",setup(){return{input:x(""),disabledInput:x(""),inputWithIcon:x(""),inputWithMessage:x("")}}},Cc=l("h2",null,"Input",-1),jc=l("h3",null,"Basic Usage",-1),Sc=l("h3",null,"Disabled Input",-1),wc=l("h3",null,"Input with icon",-1),Oc=l("i",{class:"codicon codicon-file-add"},null,-1),Tc=l("h3",null,"Input message",-1);function Ic(u,i,r,n,_,p){const t=c("v-input"),a=c("demo-code"),d=c("demo-block"),s=c("v-icon-file-menu");return h(),f(y,null,[Cc,jc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:n.input,"onUpdate:modelValue":i[0]||(i[0]=m=>n.input=m),placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),Sc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_disabled_html"})]),default:o(()=>[e(t,{modelValue:n.disabledInput,"onUpdate:modelValue":i[1]||(i[1]=m=>n.disabledInput=m),disabled:"",placeholder:"Enter your text"},null,8,["modelValue"])]),_:1}),wc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_with_icon_html"})]),default:o(()=>[e(t,{modelValue:n.inputWithIcon,"onUpdate:modelValue":i[2]||(i[2]=m=>n.inputWithIcon=m),placeholder:"Enter your text"},{icon:o(()=>[e(s)]),_:1},8,["modelValue"]),e(t,{modelValue:n.inputWithIcon,"onUpdate:modelValue":i[3]||(i[3]=m=>n.inputWithIcon=m),placeholder:"Enter your text"},{icon:o(()=>[Oc]),_:1},8,["modelValue"])]),_:1}),Tc,e(d,{class:"demo-input-block"},{code:o(()=>[e(a,{name:"input_message_html"})]),default:o(()=>[e(t,{modelValue:n.inputWithMessage,"onUpdate:modelValue":i[4]||(i[4]=m=>n.inputWithMessage=m),placeholder:"Error message",error:"",message:"Some error message"},null,8,["modelValue"]),e(t,{modelValue:n.inputWithMessage,"onUpdate:modelValue":i[5]||(i[5]=m=>n.inputWithMessage=m),placeholder:"Warning message",warning:"",message:"Some warning message"},null,8,["modelValue"]),e(t,{modelValue:n.inputWithMessage,"onUpdate:modelValue":i[6]||(i[6]=m=>n.inputWithMessage=m),placeholder:"Info message",info:"",message:"Some info message"},null,8,["modelValue"])]),_:1})],64)}var Pc=g($c,[["render",Ic]]),Vc=Object.freeze(Object.defineProperty({__proto__:null,default:Pc},Symbol.toStringTag,{value:"Module"}));const zc={name:"demo-component-installation"},Ec=l("h2",null,"Installation",-1),Ac=l("h3",null,"npm",-1),Mc=l("p",null,"Add codicons (optional)",-1),Lc=l("p",null,"In your code",-1),Dc=l("h3",null,"Usage",-1),Bc=l("p",null,"In your templates",-1);function Uc(u,i,r,n,_,p){const t=c("demo-code");return h(),f(y,null,[Ec,Ac,e(t,{lang:"shell",code:"npm install @ruleenginejs/ui"}),Mc,e(t,{lang:"shell",code:"npm install @vscode/codicons"}),Lc,e(t,{lang:"javascript",code:'import "@vscode/codicons/dist/codicon.css"'}),Dc,e(t,{name:"installation_usage_js"}),Bc,e(t,{name:"installation_usage_html"})],64)}var Fc=g(zc,[["render",Uc]]),qc=Object.freeze(Object.defineProperty({__proto__:null,default:Fc},Symbol.toStringTag,{value:"Module"}));const Rc={name:"demo-component-keybinding-label"},Nc=l("h2",null,"KeybindingLabel",-1),Wc=l("h3",null,"Basic Usage",-1),Hc=l("br",null,null,-1),Kc=l("h3",null,"Mac Separator",-1),Gc=l("br",null,null,-1);function Qc(u,i,r,n,_,p){const t=c("v-keybinding-label"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Nc,Wc,e(d,null,{code:o(()=>[e(a,{name:"keybindinglabel_basic_usage_html"})]),default:o(()=>[e(t,{value:"Ctrl+A"}),Hc,e(t,{value:"Ctrl+C"})]),_:1}),Kc,e(d,null,{code:o(()=>[e(a,{name:"keybindinglabel_other_separator_usage_html"})]),default:o(()=>[e(t,{value:"Cmd+A",separator:null}),Gc,e(t,{value:"Cmd+C",separator:null})]),_:1})],64)}var Jc=g(Rc,[["render",Qc]]),Xc=Object.freeze(Object.defineProperty({__proto__:null,default:Jc},Symbol.toStringTag,{value:"Module"}));const Yc={name:"demo-component-keyboard-shortcuts",setup(){return{shortcuts:O([{title:"Copy",key:"Ctrl+C"},{title:"Paste",key:"Ctrl+V"}])}}},Zc=l("h2",null,"KeyboardShortcuts",-1),ea=l("h3",null,"Basic Usage",-1);function oa(u,i,r,n,_,p){const t=c("v-keyboard-shortcuts"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Zc,ea,e(d,null,{code:o(()=>[e(a,{name:"keyboard_shortcuts_basic_usage_html"})]),default:o(()=>[e(t,{value:n.shortcuts},null,8,["value"])]),_:1})],64)}var ta=g(Yc,[["render",oa]]),la=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"}));const na={name:"demo-component-label",setup(){return{value:x(!1)}}},ca=l("h2",null,"Label",-1),aa=l("h3",null,"Basic Usage",-1),ia=b("Label 1"),da=b("Label 2");function sa(u,i,r,n,_,p){const t=c("v-label"),a=c("v-input"),d=c("v-field-layout"),s=c("v-checkbox"),m=c("v-fieldset"),v=c("demo-code"),k=c("demo-block");return h(),f(y,null,[ca,aa,e(k,{class:"demo-label-block"},{code:o(()=>[e(v,{name:"label_basic_usage_html"})]),default:o(()=>[e(m,null,{default:o(()=>[e(d,null,{label:o(()=>[e(t,{truncate:"",for:"input1"},{default:o(()=>[ia]),_:1})]),value:o(()=>[e(a,{id:"input1",placeholder:"Enter your text"})]),_:1}),e(d,null,{label:o(()=>[e(t,{truncate:"",for:"checkbox1"},{default:o(()=>[da]),_:1})]),value:o(()=>[e(s,{id:"checkbox1",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=$=>n.value=$)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)}var _a=g(na,[["render",sa]]),ua=Object.freeze(Object.defineProperty({__proto__:null,default:_a},Symbol.toStringTag,{value:"Module"}));const ma={name:"demo-component-layout"},ra=l("h2",null,"Layout",-1),pa=l("p",null,"Quickly create layouts with no styling on flex.",-1),ba=l("h3",null,"Basic layout",-1),va={class:"demo-cube demo-cube-h60"},ha=l("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),fa=l("div",{class:"demo-cube demo-cube-b demo-cube-w52"},null,-1),ga=l("div",{class:"demo-cube demo-cube-c"},null,-1);function ya(u,i,r,n,_,p){const t=c("v-layout"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[ra,pa,ba,e(d,null,{code:o(()=>[e(a,{name:"layout_basic_html"})]),default:o(()=>[l("div",va,[e(t,{"h-full":"","w-full":"",vertical:""},{default:o(()=>[e(t,{"not-shrink":""},{default:o(()=>[ha]),_:1}),e(t,{"all-distr":"","h-full":""},{default:o(()=>[e(t,{"h-full":"","not-shrink":""},{default:o(()=>[fa]),_:1}),e(t,{"h-full":"","all-distr":""},{default:o(()=>[ga]),_:1})]),_:1})]),_:1})])]),_:1})],64)}var ka=g(ma,[["render",ya]]),xa=Object.freeze(Object.defineProperty({__proto__:null,default:ka},Symbol.toStringTag,{value:"Module"}));const $a={name:"demo-component-list",setup(){const u=O([]),i=x({id:1}),r=x({id:1});for(let n=0;n<15;n++)u.push({id:n+1,text:`Item ${n+1}`,icon:"v-icon-doc-text"});return{items:u,selectedItem:i,focusableSelectedItem:r}}},Ca=l("h2",null,"List",-1),ja=l("p",null,"Display a set of data with flat list.",-1),Sa=l("h3",null,"Basic Usage",-1),wa={class:"demo-cube demo-cube-h52"},Oa=l("h3",null,"Focusable",-1),Ta={class:"demo-cube demo-cube-h52"};function Ia(u,i,r,n,_,p){const t=c("v-list"),a=c("v-content"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[Ca,ja,Sa,e(s,null,{code:o(()=>[e(d,{name:"list_basic_usage_html"})]),default:o(()=>[l("div",wa,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{items:n.items,selected:n.selectedItem,"onUpdate:selected":i[0]||(i[0]=m=>n.selectedItem=m)},null,8,["items","selected"])]),_:1})])]),_:1}),Oa,e(s,null,{code:o(()=>[e(d,{name:"list_focusable_html"})]),default:o(()=>[l("div",Ta,[e(a,{"h-full":"",scroll:""},{default:o(()=>[e(t,{"tab-index":0,items:n.items,selected:n.focusableSelectedItem,"onUpdate:selected":i[1]||(i[1]=m=>n.focusableSelectedItem=m)},null,8,["items","selected"])]),_:1})])]),_:1})],64)}var Pa=g($a,[["render",Ia]]),Va=Object.freeze(Object.defineProperty({__proto__:null,default:Pa},Symbol.toStringTag,{value:"Module"}));const za={name:"demo-component-node-graph"},Ea=l("h2",null,"Node Graph",-1),Aa=l("p",null,"Graph of nodes connected via ports using connectors.",-1),Ma=l("h3",null,"Basic Usage",-1),La={class:"demo-cube demo-cube-h60"},Da=b(" in port "),Ba=b(" out port ");function Ua(u,i,r,n,_,p){const t=c("v-graph-port"),a=c("v-graph-circle-node"),d=c("v-icon-doc-text"),s=c("v-icon-script"),m=c("v-graph-node"),v=c("v-graph-connection"),k=c("v-graph-canvas"),$=c("demo-code"),C=c("demo-block");return h(),f(y,null,[Ea,Aa,Ma,e(C,null,{code:o(()=>[e($,{name:"node_graph_basic_usage_html"})]),default:o(()=>[l("div",La,[e(k,null,{node:o(()=>[e(a,{id:1,x:100,y:100,title:"s"},{port:o(()=>[e(t,{id:"start_port"})]),_:1}),e(a,{id:3,x:650,y:100,title:"e"},{port:o(()=>[e(t,{id:"end_port"})]),_:1}),e(m,{id:2,x:300,y:10,title:"Simple Node"},{"header-left-icon":o(()=>[e(d)]),"header-right-icon":o(()=>[e(s)]),left:o(()=>[e(t,{id:"in_port",direction:"left"},{default:o(()=>[Da]),_:1})]),right:o(()=>[e(t,{id:"out_port",direction:"right"},{default:o(()=>[Ba]),_:1})]),_:1})]),connection:o(()=>[e(v,{from:{nodeId:1,portId:"start_port"},to:{nodeId:2,portId:"in_port"}}),e(v,{from:{nodeId:2,portId:"out_port"},to:{nodeId:3,portId:"end_port"}})]),_:1})])]),_:1})],64)}var Fa=g(za,[["render",Ua]]),qa=Object.freeze(Object.defineProperty({__proto__:null,default:Fa},Symbol.toStringTag,{value:"Module"}));const Ra={name:"demo-component-scrollbar"},Na=l("h2",null,"Scrollbar",-1),Wa=l("h3",null,"Basic Usage",-1),Ha={class:"scrollbar",style:{height:"260px",overflow:"auto"}},Ka=l("h3",null,"Horizontal Scroll",-1),Ga={class:"scrollbar",style:{height:"70px",overflow:"auto"}};function Qa(u,i,r,n,_,p){const t=c("v-layout"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Na,Wa,e(d,null,{code:o(()=>[e(a,{name:"scrollbar_basic_usage_html"})]),default:o(()=>[l("div",Ha,[e(t,{gutter:"",wrap:""},{default:o(()=>[(h(),f(y,null,E(10,s=>l("div",{key:s,class:"demo-cube demo-cube-num demo-cube-h14"},A(s),1)),64))]),_:1})])]),_:1}),Ka,e(d,null,{code:o(()=>[e(a,{name:"scrollbar_horizontal_scroll_html"})]),default:o(()=>[l("div",Ga,[e(t,{gutter:""},{default:o(()=>[(h(),f(y,null,E(20,s=>l("div",{key:s,class:"demo-cube demo-cube-num demo-cube-h14 demo-cube-w24 demo-cube-no-shrink"},A(s),1)),64))]),_:1})])]),_:1})],64)}var Ja=g(Ra,[["render",Qa]]),Xa=Object.freeze(Object.defineProperty({__proto__:null,default:Ja},Symbol.toStringTag,{value:"Module"}));const Ya={name:"demo-component-selectbox",setup(){const u=x("Option 1"),i=O([{text:"Option 1",value:"Option 1"},{text:"Option 2",value:"Option 2"},{text:"Option 3",value:"Option 3"},{text:"Option 4",value:"Option 4"},{text:"Option 5",value:"Option 5"}]),r=x("Option 1");return{options:i,value:u,disabledValue:r}}},Za=l("h2",null,"SelectBox",-1),ei=l("h3",null,"Basic Usage",-1),oi=l("h3",null,"Disabled Select",-1);function ti(u,i,r,n,_,p){const t=c("v-select-box"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[Za,ei,e(d,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_basic_usage_html"})]),default:o(()=>[e(t,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=s=>n.value=s),items:n.options},null,8,["modelValue","items"])]),_:1}),oi,e(d,{class:"demo-select-block"},{code:o(()=>[e(a,{name:"selectbox_disabled_usage_html"})]),default:o(()=>[e(t,{modelValue:n.disabledValue,"onUpdate:modelValue":i[1]||(i[1]=s=>n.disabledValue=s),items:n.options,disabled:""},null,8,["modelValue","items"])]),_:1})],64)}var li=g(Ya,[["render",ti]]),ni=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"}));const ci={name:"demo-component-sidebar"},ai=l("h2",null,"Sidebar",-1),ii=l("h3",null,"Basic Usage",-1),di={class:"demo-cube demo-cube-h60"},si=l("div",{class:"demo-cube demo-cube-a"},null,-1),_i=l("h3",null,"Sidebar Section",-1),ui={class:"demo-cube demo-cube-h60"},mi=l("div",{class:"demo-cube demo-cube-a demo-cube-h14"},null,-1),ri=l("div",{class:"demo-cube demo-cube-b demo-cube-h14"},null,-1),pi=l("div",{class:"demo-cube demo-cube-c demo-cube-h14"},null,-1),bi=l("div",{class:"demo-cube demo-cube-d"},null,-1);function vi(u,i,r,n,_,p){const t=c("v-sidebar"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block"),m=c("v-sidebar-section"),v=c("v-content");return h(),f(y,null,[ai,ii,e(s,null,{code:o(()=>[e(d,{name:"sidebar_basic_usage_html"})]),default:o(()=>[l("div",di,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":""})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[si]),_:1})]),_:1})])]),_:1}),_i,e(s,null,{code:o(()=>[e(d,{name:"sidebar_section_html"})]),default:o(()=>[l("div",ui,[e(a,{"h-full":"","w-full":""},{default:o(()=>[e(a,{"not-shrink":"",class:"demo-cube-w52"},{default:o(()=>[e(t,{"w-full":"","h-full":"","lt-border":"","rt-border":""},{default:o(()=>[e(v,{"w-full":"","h-full":"",scroll:""},{default:o(()=>[e(m,{title:"Section A"},{default:o(()=>[mi]),_:1}),e(m,{title:"Section B"},{default:o(()=>[ri]),_:1}),e(m,{title:"Section C","bottom-border":!1},{default:o(()=>[pi]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{"all-distr":"","h-full":""},{default:o(()=>[bi]),_:1})]),_:1})])]),_:1})],64)}var hi=g(ci,[["render",vi]]),fi=Object.freeze(Object.defineProperty({__proto__:null,default:hi},Symbol.toStringTag,{value:"Module"}));const gi={name:"demo-component-space"},yi=l("h2",null,"Space",-1),ki=l("p",null,"Space between two elements.",-1),xi=l("h3",null,"Basic Usage",-1),$i=l("div",{class:"demo-cube demo-cube-a demo-cube-w14 demo-cube-h14"},null,-1),Ci=l("div",{class:"demo-cube demo-cube-b demo-cube-w14 demo-cube-h14"},null,-1),ji=l("div",{class:"demo-cube demo-cube-c demo-cube-w14 demo-cube-h14"},null,-1),Si=l("div",{class:"demo-cube demo-cube-d demo-cube-w14 demo-cube-h14"},null,-1);function wi(u,i,r,n,_,p){const t=c("v-space"),a=c("v-layout"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[yi,ki,xi,e(s,null,{code:o(()=>[e(d,{name:"space_basic_usage_html"})]),default:o(()=>[e(a,null,{default:o(()=>[$i,e(t),Ci,e(t),ji,e(t),Si]),_:1})]),_:1})],64)}var Oi=g(gi,[["render",wi]]),Ti=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"}));const Ii={name:"demo-component-splitview"},Pi=l("h2",null,"SplitView",-1),Vi=l("h3",null,"Basic Usage",-1),zi={class:"demo-cube demo-cube-h60"},Ei=l("div",{class:"demo-cube demo-cube-a"},null,-1),Ai=l("div",{class:"demo-cube demo-cube-b"},null,-1),Mi=l("div",{class:"demo-cube demo-cube-c"},null,-1),Li=l("h3",null,"Horizontal SplitView",-1),Di={class:"demo-cube demo-cube-h60"},Bi=l("div",{class:"demo-cube demo-cube-a"},null,-1),Ui=l("div",{class:"demo-cube demo-cube-b"},null,-1),Fi=l("div",{class:"demo-cube demo-cube-c"},null,-1);function qi(u,i,r,n,_,p){const t=c("v-split-pane"),a=c("v-split-view"),d=c("demo-code"),s=c("demo-block");return h(),f(y,null,[Pi,Vi,e(s,null,{code:o(()=>[e(d,{name:"splitview_basic_usage_html"})]),default:o(()=>[l("div",zi,[e(a,{"snap-offset":30},{default:o(()=>[e(t,{size:"200px","min-size":40},{default:o(()=>[Ei]),_:1}),e(t,{"min-size":150},{default:o(()=>[Ai]),_:1}),e(t,{size:"20%"},{default:o(()=>[Mi]),_:1})]),_:1})])]),_:1}),Li,e(s,null,{code:o(()=>[e(d,{name:"splitview_horizontal_usage_html"})]),default:o(()=>[l("div",Di,[e(a,{horizontal:"","snap-offset":30},{default:o(()=>[e(t,null,{default:o(()=>[Bi]),_:1}),e(t,null,{default:o(()=>[Ui]),_:1}),e(t,null,{default:o(()=>[Fi]),_:1})]),_:1})])]),_:1})],64)}var Ri=g(Ii,[["render",qi]]),Ni=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"}));const Wi={name:"demo-component-suggest",setup(){const u=x(!1),i=x(""),r=x([{text:"Vue.js"},{text:"React"},{text:"Angular"},{text:"Ember.js"},{text:"Meteor"},{text:"Polymer"},{text:"Backbone.js"}]),n=a=>a?r.value.filter(d=>d.text.toLowerCase().includes(a.toLowerCase())):r.value;return{suggestOpen:u,queryText:i,fetchData:(a,d,s)=>new Promise(m=>{const v=setTimeout(()=>{m(n(a))},100);s.onCancellationRequested(()=>{clearTimeout(v),m()})}),onError:()=>{},onSuggestionSelected:a=>{i.value=a.text,u.value=!1}}}},Hi=l("h2",null,"Suggest",-1),Ki=l("h3",null,"Basic Usage",-1),Gi=b("Toggle Suggest");function Qi(u,i,r,n,_,p){const t=c("v-button"),a=c("v-input"),d=c("v-suggest"),s=c("v-layout"),m=c("demo-code"),v=c("demo-block");return h(),f(y,null,[Hi,Ki,e(v,{class:"demo-suggest-block"},{code:o(()=>[e(m,{name:"suggest_basic_usage_html"})]),default:o(()=>[e(s,{gutter:""},{default:o(()=>[e(t,{onClick:i[0]||(i[0]=k=>n.suggestOpen=!n.suggestOpen)},{default:o(()=>[Gi]),_:1}),e(a,{modelValue:n.queryText,"onUpdate:modelValue":i[1]||(i[1]=k=>n.queryText=k),placeholder:"Enter your text",id:"input-1"},null,8,["modelValue"]),e(d,{visible:n.suggestOpen,"onUpdate:visible":i[2]||(i[2]=k=>n.suggestOpen=k),anchor:"input-1","anchor-constraint":!1,"search-query":n.queryText,"data-source":n.fetchData,"action-on-parent-scrolling":"update","loading-message":"Loading...","empty-result-message":"No suggestions.","max-item-count":20,"clear-on-invisible":"",onError:n.onError,onSelect:n.onSuggestionSelected},null,8,["visible","search-query","data-source","onError","onSelect"])]),_:1})]),_:1})],64)}var Ji=g(Wi,[["render",Qi]]),Xi=Object.freeze(Object.defineProperty({__proto__:null,default:Ji},Symbol.toStringTag,{value:"Module"}));const Yi={name:"demo-component-tabs",setup(){return{selectedTab:x(null)}}},Zi=l("h2",null,"Tabs",-1),ed=l("h3",null,"Basic Usage",-1),od=b(" File 1.txt "),td=b(" File 2.txt "),ld=b(" File 3.txt "),nd=b(" File 4.txt "),cd=b(" File 5.txt "),ad=b(" File 6.txt ");function id(u,i,r,n,_,p){const t=c("v-icon-book"),a=c("v-tab"),d=c("v-tabs"),s=c("demo-code"),m=c("demo-block");return h(),f(y,null,[Zi,ed,e(m,null,{code:o(()=>[e(s,{name:"tabs_basic_usage_html"})]),default:o(()=>[e(d,{modelValue:n.selectedTab,"onUpdate:modelValue":i[0]||(i[0]=v=>n.selectedTab=v)},{default:o(()=>[e(a,{"icon-color":"#B69E24",modified:""},{icon:o(()=>[e(t)]),default:o(()=>[od]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[td]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[ld]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[nd]),_:1}),e(a,null,{icon:o(()=>[e(t)]),default:o(()=>[cd]),_:1}),e(a,{"icon-color":"#B69E24"},{icon:o(()=>[e(t)]),default:o(()=>[ad]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}var dd=g(Yi,[["render",id]]),sd=Object.freeze(Object.defineProperty({__proto__:null,default:dd},Symbol.toStringTag,{value:"Module"}));const _d={name:"demo-component-treeview",setup(){return{items:O([{id:1,name:"Root folder",expanded:!0,selected:!1,children:[{id:2,name:"Folder 1",expanded:!1,selected:!1,icon:"v-icon-folder",children:[{id:3,name:"File 1",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:4,name:"File 2",icon:"v-icon-doc-text",expanded:!1,selected:!1}]},{id:5,name:"File 3",icon:"v-icon-doc-text",expanded:!1,selected:!1},{id:6,name:"Folder 2",icon:"v-icon-folder",expanded:!1,selected:!1,children:[]}]}])}}},ud=l("h2",null,"Treeview",-1),md=l("p",null,"Display a set of data with hierarchies.",-1),rd=l("h3",null,"Basic Usage",-1);function pd(u,i,r,n,_,p){const t=c("v-treeview"),a=c("demo-code"),d=c("demo-block");return h(),f(y,null,[ud,md,rd,e(d,null,{code:o(()=>[e(a,{name:"treeview_basic_usage_html"})]),default:o(()=>[e(t,{items:n.items},null,8,["items"])]),_:1})],64)}var bd=g(_d,[["render",pd]]),vd=Object.freeze(Object.defineProperty({__proto__:null,default:bd},Symbol.toStringTag,{value:"Module"}));const hd={"../components/demo-block.vue":He,"../components/demo-code.vue":Tt,"../components/demo-component-action-bar.vue":qt,"../components/demo-component-action-list.vue":al,"../components/demo-component-autocomplete.vue":bl,"../components/demo-component-button.vue":wl,"../components/demo-component-checkbox.vue":Dl,"../components/demo-component-content.vue":Ql,"../components/demo-component-draggable.vue":gn,"../components/demo-component-dropdown.vue":Sn,"../components/demo-component-fieldset.vue":Bn,"../components/demo-component-floating-toolbar.vue":ic,"../components/demo-component-icon.vue":xc,"../components/demo-component-input.vue":Vc,"../components/demo-component-installation.vue":qc,"../components/demo-component-keybinding-label.vue":Xc,"../components/demo-component-keyboard-shortcuts.vue":la,"../components/demo-component-label.vue":ua,"../components/demo-component-layout.vue":xa,"../components/demo-component-list.vue":Va,"../components/demo-component-node-graph.vue":qa,"../components/demo-component-scrollbar.vue":Xa,"../components/demo-component-selectbox.vue":ni,"../components/demo-component-sidebar.vue":fi,"../components/demo-component-space.vue":Ti,"../components/demo-component-splitview.vue":Ni,"../components/demo-component-suggest.vue":Xi,"../components/demo-component-tabs.vue":sd,"../components/demo-component-treeview.vue":vd,"../components/demo-codes/component-action-bar.js":D,"../components/demo-codes/component-action-list.js":B,"../components/demo-codes/component-autocomplete.js":U,"../components/demo-codes/component-button.js":F,"../components/demo-codes/component-checkbox.js":q,"../components/demo-codes/component-content.js":R,"../components/demo-codes/component-draggable.js":N,"../components/demo-codes/component-dropdown.js":W,"../components/demo-codes/component-fieldset.js":H,"../components/demo-codes/component-floating-toolbar.js":K,"../components/demo-codes/component-icon.js":G,"../components/demo-codes/component-input.js":Q,"../components/demo-codes/component-installation.js":J,"../components/demo-codes/component-keybinding-label.js":X,"../components/demo-codes/component-keyboard-shortcuts.js":Y,"../components/demo-codes/component-label.js":Z,"../components/demo-codes/component-layout.js":ee,"../components/demo-codes/component-list.js":oe,"../components/demo-codes/component-node-graph.js":te,"../components/demo-codes/component-scrollbar.js":le,"../components/demo-codes/component-selectbox.js":ne,"../components/demo-codes/component-sidebar.js":ce,"../components/demo-codes/component-space.js":ae,"../components/demo-codes/component-splitview.js":ie,"../components/demo-codes/component-suggest.js":de,"../components/demo-codes/component-tabs.js":se,"../components/demo-codes/component-treeview.js":_e,"../components/demo-codes/index.js":jt};var fd={install:u=>{for(const[i,r]of Object.entries(hd)){const n=ke(i.split("/").pop().replace(/\.\w+$/,""));u.component(n,r.default||r)}}};const S=xe(Oe);S.use(Be);S.use($e);S.use(fd);S.use(Ce);S.mount("#app");export{g as _};
