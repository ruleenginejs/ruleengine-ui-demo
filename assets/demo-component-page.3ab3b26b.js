import{_ as r}from"./index.e83ed0b3.js";import{o as m,d as c,F as p,e as a,t as u,h as d,x as l,y as s}from"./vendor.a36de39b.js";const f={name:"demo-component-not-found"},i=a("h2",null,"Not Found",-1),_=a("p",null,"The component you are looking for was not found.",-1);function h(e,n,t,o,g,y){return m(),c(p,null,[i,_],64)}var $=r(f,[["render",h]]);const F={name:"demo-component-page",props:{id:{type:String,default:null}},setup(e){const{id:n}=u(e),t=d(()=>`demo-component-${n.value}`);return()=>{let o=l(t.value);return typeof o=="string"?s($):s(o)}}};export{F as default};