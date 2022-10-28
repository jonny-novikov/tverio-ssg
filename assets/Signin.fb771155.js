import{d as x,E as _,p as m,G as y,I as v,o as w,f as h,w as l,b as s,a as i,i as $,J as k,A as V,j as c,e as N,K as C,L as z,M,N as E,O as S}from"./app.b24c2a19.js";import{_ as T}from"./AppPage.f7a9bb81.js";import{_ as U}from"./ErrorSummary.162c609a.js";import{_ as u}from"./TextInput.500e5ad6.js";import{_ as j,a as B}from"./FormLoading.a7893322.js";import"./AppBreadcrumb.eb989f68.js";import"./home.cd74b42d.js";const L=["onSubmit"],O={class:"shadow overflow-hidden sm:rounded-md"},R={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},A={class:"flex flex-col gap-y-4"},I={class:"pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6"},G={class:"flex justify-end"},J=c("Register New User"),K=c("Login"),Q={class:"flex mt-8"},q=s("h3",{class:"hidden xs:block mr-4 leading-8 text-gray-500"},"Quick Links",-1),D={class:"relative z-0 inline-flex shadow-sm rounded-md"},oe=x({setup(F){const p=_(),a=m(""),n=m(""),d=y();let f=v(()=>{var t;N.value&&(d.push((t=C(d))!=null?t:"/"),z(()=>f()))});const r=t=>{a.value=t,n.value="p@55wOrd"},g=async t=>{const{userName:e,password:o,rememberMe:b}=M.serializeToObject(t.currentTarget);(await p.api(new E({provider:"credentials",userName:e,password:o,rememberMe:b}))).succeeded&&await S()};return(t,e)=>(w(),h(T,{title:"Sign In",class:"max-w-xl"},{default:l(()=>[s("form",{onSubmit:V(g,["prevent"])},[s("div",O,[i(U,{except:"userName,password,rememberMe"}),s("div",R,[s("div",A,[i(u,{id:"userName",placeholder:"Email",help:"Email you signed up with",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o)},null,8,["modelValue"]),i(u,{id:"password",type:"password",help:"6 characters or more",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=o=>n.value=o)},null,8,["modelValue"]),i(j,{id:"rememberMe"})])]),s("div",I,[s("div",G,[i(B,{class:"flex-1"}),i($,{href:"/signup"},{default:l(()=>[J]),_:1}),i(k,{class:"ml-3"},{default:l(()=>[K]),_:1})])])])],40,L),s("div",Q,[q,s("span",D,[s("button",{type:"button",onClick:e[2]||(e[2]=o=>r("admin@email.com")),class:"relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"}," admin@email.com "),s("button",{type:"button",onClick:e[3]||(e[3]=o=>r("manager@email.com")),class:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"}," manager@email.com "),s("button",{type:"button",onClick:e[4]||(e[4]=o=>r("employee@email.com")),class:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"}," employee@email.com "),s("button",{type:"button",onClick:e[5]||(e[5]=o=>r("new@user.com")),class:"-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"}," new@user.com ")])])]),_:1}))}});export{oe as default};