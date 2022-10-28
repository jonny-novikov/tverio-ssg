import{_ as B}from"./vue.5f830a1e.js";import{_ as N}from"./SrcLink.3b07b093.js";import{_ as L}from"./pineapple.b78267b5.js";import{o as d,c as g,b as t,U as S,p as x,l as k,V as v,W as D,X as H,Y,Z,$ as j,a0 as R,d as U,f as w,w as f,a as u,u as r,a1 as z,h as K,Q as F,t as M,g as O,F as Q,j as p,A as V,a2 as W}from"./app.b24c2a19.js";import{_ as E}from"./AppPage.f7a9bb81.js";import{_ as P}from"./TextInput.500e5ad6.js";import"./AppBreadcrumb.eb989f68.js";import"./home.cd74b42d.js";const X={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},q=t("path",{fill:"currentColor",d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"},null,-1),G=[q];function I(o,e){return d(),g("svg",X,G)}var J={name:"mdi-trash-can-outline",render:I};const ee={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=t("path",{fill:"currentColor",d:"M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),se=[te];function oe(o,e){return d(),g("svg",ee,se)}var ie={name:"mdi-checkbox-blank-circle-outline",render:oe};const ne={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=t("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"},null,-1),le=[ae];function re(o,e){return d(),g("svg",ne,le)}var de={name:"mdi-check-circle",render:re};const ce=S("todos",()=>{const o=x([]),e=x(""),c=x("all"),_=x(),a=k(()=>o.value.filter(s=>s.isFinished)),m=k(()=>o.value.filter(s=>!s.isFinished)),T=k(()=>c.value=="finished"?a.value:c.value=="unfinished"?m.value:o.value),h=async s=>{var n;_.value=s;const l=await v.api(new D);l.succeeded&&(o.value=(n=l.response.results)!=null?n:[])};return{error:_,newTodo:e,filter:c,finishedTodos:a,unfinishedTodos:m,filteredTodos:T,refreshTodos:h,addTodo:async()=>{o.value.push(new H({text:e.value}));let s=await v.api(new Y({text:e.value}));s.succeeded&&(e.value=""),await h(s.error)},removeTodo:async s=>{o.value=o.value.filter(n=>n.id!=s);let l=await v.api(new Z({id:s}));await h(l.error)},removeFinishedTodos:async()=>{let s=o.value.filter(n=>n.isFinished).map(n=>n.id);if(s.length==0)return;o.value=o.value.filter(n=>!n.isFinished);let l=await v.api(new j({ids:s}));await h(l.error)},toggleTodo:async s=>{const l=o.value.find(A=>A.id==s);l.isFinished=!l.isFinished;let n=await v.api(new R(l));await h(n.error)},changeFilter:s=>c.value=s}}),ue={class:"mb-3"},he={class:"bg-white shadow overflow-hidden rounded-md"},_e={role:"list",class:"divide-y divide-gray-200"},me=["onClick"],fe={class:"flex items-center h-6"},pe={class:"ml-3 flex-grow"},ve={class:"mt-4 flex justify-between"},ge={class:"text-gray-400 leading-8 mr-4"},xe=t("span",{class:"hidden sm:inline"},"item(s)",-1),we=p(" left "),Te={class:"inline-flex shadow-sm rounded-md"},be=p(" All "),ke=p(" Active "),ye=p(" Completed "),Ce={class:"leading-8 ml-4"},$e=p(" clear "),Fe=t("span",{class:"hidden sm:inline"},"completed",-1),Me=[$e,Fe],Ve={class:"mt-4 text-center text-gray-400 flex justify-center -ml-6"},Ze=U({setup(o){const e=ce();e.refreshTodos();const c=(_,a)=>W("a",{href:"#",class:`border-gray-200 text-sm font-medium px-4 py-2 hover:bg-gray-100 
      focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 
      dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white
      ${_.filter==e.filter?"text-blue-700 dark:bg-blue-600":"text-gray-900 hover:text-blue-700 dark:bg-gray-700"}`,onClick:m=>{m.preventDefault(),e.changeFilter(_.filter)}},a.slots);return(_,a)=>{const m=de,T=ie,h=J,y=L,b=N,C=B;return d(),w(E,{title:"Todos Application",class:"max-w-xl"},{default:f(()=>[t("div",ue,[u(P,{status:r(e).error,id:"Text",modelValue:r(e).newTodo,"onUpdate:modelValue":a[0]||(a[0]=i=>r(e).newTodo=i),placeholder:"What needs to be done?",label:"",onKeyup:a[1]||(a[1]=z(V(i=>r(e).addTodo(),["stop"]),["enter"]))},null,8,["status","modelValue"])]),t("div",he,[t("ul",_e,[(d(!0),g(Q,null,K(r(e).filteredTodos,i=>(d(),g("li",{key:i.id,class:"px-6 py-4"},[t("div",{class:"relative flex items-start",onClick:$=>r(e).toggleTodo(i.id)},[t("div",fe,[i.isFinished?(d(),w(m,{key:0,class:"text-green-600"})):(d(),w(T,{key:1}))]),t("div",pe,[t("label",{class:F({"line-through":i.isFinished})},M(i.text),3)]),t("div",null,[i.isFinished?(d(),w(h,{key:0,class:"cursor-pointer",onClick:$=>r(e).removeTodo(i.id)},null,8,["onClick"])):O("",!0)])],8,me)]))),128))])]),t("div",ve,[t("div",ge,[p(M(r(e).unfinishedTodos.length)+" ",1),xe,we]),t("div",Te,[u(c,{class:"rounded-l-lg border",filter:"all"},{default:f(()=>[be]),_:1}),u(c,{class:"border-t border-b",filter:"unfinished"},{default:f(()=>[ke]),_:1}),u(c,{class:"rounded-r-md border",filter:"finished"},{default:f(()=>[ye]),_:1})]),t("div",Ce,[t("a",{href:"#",class:F({invisible:r(e).finishedTodos.length===0}),onClick:a[2]||(a[2]=V(i=>r(e).removeFinishedTodos(),["prevent"]))},Me,2)])]),t("div",Ve,[u(b,{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts"},{default:f(()=>[u(y,{class:"w-5 h-5 inline-flex"})]),_:1}),u(b,{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue"},{default:f(()=>[u(C,{class:"w-4 h-4 inline-flex"})]),_:1})])]),_:1})}}});export{Ze as default};