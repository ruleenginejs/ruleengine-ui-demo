import{_ as u}from"./index.3ac7d38f.js";import{k as i,r as o,c as m,w as e,o as f,g as s,e as t,j as n}from"./vendor.dd3fe342.js";var p="/ruleengine-ui-demo/assets/vscode-logo.d3a96494.svg";const h={name:"demo-home",setup(){return{logo:i(p)}}},v=["src"],g=t("h1",null,"UI Toolkit for VS Code",-1),b=t("p",{class:"demo-text-center"}," Vue 3.0 based component library for developers of custom editors in Visual Studio Code. ",-1),k={class:"demo-home__buttons"},x=n("Get Started"),V=n("GitHub");function j(c,y,C,a,w,B){const r=o("router-link"),l=o("v-button"),d=o("v-layout"),_=o("v-content");return f(),m(_,{class:"demo-content demo-home","w-full":"","h-full":"",scroll:"",fill:""},{default:e(()=>[s(d,{"h-center":"",vertical:""},{default:e(()=>[t("img",{class:"demo-home__logo",src:a.logo,alt:""},null,8,v),g,b,t("div",k,[s(r,{to:{name:"component"},class:"v-button v-button--default"},{default:e(()=>[x]),_:1}),s(l,{target:"_blank",href:"https://github.com/ruleenginejs/ruleengine-ui",secondary:""},{default:e(()=>[V]),_:1})])]),_:1})]),_:1})}var $=u(h,[["render",j]]);export{$ as default};