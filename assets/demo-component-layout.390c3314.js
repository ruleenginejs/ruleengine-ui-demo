import{_ as v,r,o as n,f as l,F as _,i as y,g as k,t as b,a as o,w as a,h as $,c as f,b as S,j as x}from"./index.d69ddab8.js";const C={name:"demo-sidebar-nav",props:{items:{type:Array,default:()=>[]}}},B={class:"demo-sidebar__nav"},L={class:"demo-sidebar__nav__group v-fieldset__label"},N={key:1,class:"demo-sidebar__nav__item"};function D(c,u,m,d,g,h){const s=r("router-link");return n(),l("ul",B,[(n(!0),l(_,null,y(m.items,e=>(n(),l(_,{key:e.title},[e.items?(n(),l(_,{key:0},[k("li",L,b(e.title),1),(n(!0),l(_,null,y(e.items,i=>(n(),l("li",{key:`${e.title}${i.title}`,class:"demo-sidebar__nav__item"},[o(s,{to:i.route},{default:a(()=>[$(b(i.title),1)]),_:2},1032,["to"])]))),128))],64)):(n(),l("li",N,[o(s,{to:e.route},{default:a(()=>[$(b(e.title),1)]),_:2},1032,["to"])]))],64))),128))])}const F=v(C,[["render",D]]);function t(c){return{name:"component-content",params:{id:c}}}const V={gettingStarted:[{title:"Installation",route:t("installation")}],components:[{title:"Basic",items:[{title:"Layout",route:t("layout")},{title:"Content",route:t("content")},{title:"Button",route:t("button")},{title:"Space",route:t("space")},{title:"Icon",route:t("icon")},{title:"Scrollbar",route:t("scrollbar")}]},{title:"Form",items:[{title:"Input",route:t("input")},{title:"Checkbox",route:t("checkbox")},{title:"Select",route:t("selectbox")},{title:"Autocomplete",route:t("autocomplete")},{title:"Fieldset",route:t("fieldset")},{title:"Label",route:t("label")}]},{title:"Data",items:[{title:"List",route:t("list")},{title:"Treeview",route:t("treeview")}]},{title:"Navigation",items:[{title:"Sidebar",route:t("sidebar")},{title:"Tabs",route:t("tabs")},{title:"ActionBar",route:t("action-bar")},{title:"ActionList",route:t("action-list")},{title:"Dropdown",route:t("dropdown")},{title:"FloatingToolbar",route:t("floating-toolbar")}]},{title:"Graph",items:[{title:"Node Graph",route:t("node-graph")}]},{title:"Others",items:[{title:"SplitView",route:t("splitview")},{title:"Draggable",route:t("draggable")},{title:"Suggest",route:t("suggest")},{title:"KeybindingLabel",route:t("keybinding-label")},{title:"KeyboardShortcuts",route:t("keyboard-shortcuts")}]}]},A={name:"demo-sidebar",components:{DemoSidebarNav:F},data(){return V}};function T(c,u,m,d,g,h){const s=r("demo-sidebar-nav"),e=r("v-sidebar-section"),i=r("v-content"),p=r("v-sidebar");return n(),f(p,{"w-full":"","h-full":"",class:"demo-sidebar"},{default:a(()=>[o(i,{"w-full":"","h-full":"",scroll:"sm","scroll-on-hover":""},{default:a(()=>[o(e,{"header-compact":"",expand:"",title:"Getting Started"},{default:a(()=>[o(s,{items:c.gettingStarted},null,8,["items"])]),_:1}),o(e,{"header-compact":"",expand:"","bottom-border":!1,title:"Components"},{default:a(()=>[o(s,{items:c.components},null,8,["items"])]),_:1})]),_:1})]),_:1})}const G=v(A,[["render",T]]),I={name:"demo-component-layout",components:{DemoSidebar:G},setup(){return{created:S(!1)}}};function z(c,u,m,d,g,h){const s=r("demo-sidebar"),e=r("v-split-pane"),i=r("router-view"),p=r("v-content"),w=r("v-split-view");return n(),f(w,{"snap-offset":30,onCreated:u[0]||(u[0]=K=>d.created=!0)},{default:a(()=>[o(e,{size:"290px"},{default:a(()=>[o(s)]),_:1}),o(e,{"min-size":200},{default:a(()=>[d.created?(n(),f(p,{key:0,class:"demo-content","w-full":"","h-full":"",scroll:"",fill:""},{default:a(()=>[o(i)]),_:1})):x("",!0)]),_:1})]),_:1})}const E=v(I,[["render",z]]);export{E as default};