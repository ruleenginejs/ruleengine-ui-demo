import{_ as l}from"./index.c4d3fbf9.js";import{k as f,l as g,v as k,r as c,o as i,d as w,e,g as t,c as x,w as a,j as r}from"./vendor.208fbc23.js";const $={name:"demo-theme-switcher",setup(){const d=f("vscode-dark"),n=g([{text:"Dark+ (default dark)",value:"vscode-dark"},{text:"Light+ (default light)",value:"vscode-light"}]);return k(d,(_,o)=>{document.documentElement.classList.remove(o),document.documentElement.classList.add(_)}),{selectedItem:d,themes:n}}},b={class:"demo-theme-switcher"},V=e("div",{class:"demo-theme-switcher__label"},"Theme",-1),j={class:"demo-theme-switcher__select"};function B(d,n,_,o,h,u){const s=c("v-select-box");return i(),w("div",b,[V,e("div",j,[t(s,{modelValue:o.selectedItem,"onUpdate:modelValue":n[0]||(n[0]=m=>o.selectedItem=m),items:o.themes},null,8,["modelValue","items"])])])}var D=l($,[["render",B]]),E="/ruleengine-ui-demo/logo.png";const I={name:"demo-header",components:{DemoThemeSwitcher:D}},L={class:"demo-header__logo-image"},C=e("img",{alt:"Logo",src:E,width:"24",height:"24"},null,-1),N={class:"demo-header__logo"},T=r("Rule Engine UI"),y={class:"demo-header__nav"},G=r("Guide"),H=r("Components"),U=e("a",{href:"https://github.com/ruleenginejs/ruleengine-ui",class:"demo-external-link",target:"_blank"},"GitHub",-1);function R(d,n,_,o,h,u){const s=c("router-link"),m=c("v-space"),p=c("demo-theme-switcher"),v=c("v-layout");return i(),x(v,{"w-full":"","h-center":"",class:"demo-header"},{default:a(()=>[e("div",L,[t(s,{to:{name:"home"}},{default:a(()=>[C]),_:1})]),e("div",N,[t(s,{to:{name:"home"}},{default:a(()=>[T]),_:1})]),t(m),t(p),e("div",y,[t(s,{to:{name:"component"}},{default:a(()=>[G]),_:1}),t(s,{to:{name:"component"}},{default:a(()=>[H]),_:1}),U])]),_:1})}var z=l(I,[["render",R]]);export{z as D};
