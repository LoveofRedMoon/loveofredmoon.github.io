import{_ as a}from"./PTabs.736140ee.js";import{_ as e}from"./PCard.c58f7886.js";import{_ as s,P as t}from"./PTable.410e58a1.js";import{_ as r}from"./PScroll.834b28d9.js";import{_ as l}from"./ReadComponent.f0b84223.js";import{d as o,z as p,A as n,a as d,o as i,b as m,e as b,w as c}from"./index.44837868.js";import"./vendor.d9d03746.js";var f=o({components:{PScroll:r,PDivider:s,PCard:e,PTabs:a,PTable:t,ReadComponent:l},name:"Tabs",setup:()=>({values:p([!1,!1,!1,!1,!0]),PTabs:n(a)})});const u={class:"fl-1",style:{padding:"10px"}},P={style:{gap:"5px"}},v=b("h1",null,"PTabs 选项页",-1),T=b("h5",null,"该组件为自定义样式",-1),y=b("div",{style:{padding:"24px"}},[b("pre",null,[b("code",null,'<p-tabs :tabs="tabs" :defaultActiveKey="\'alert\'" class="fl-1">\r\n   <template v-slot="{ activeTabKey: key }">\r\n     <router-view></router-view>\r\n   </template>\r\n </p-tabs>')])],-1);f.render=function(a,e,s,t,r,l){const o=d("p-card"),p=d("read-component"),n=d("p-scroll");return i(),m("div",u,[b(n,{style:{height:"100%"}},{default:c((()=>[b("div",P,[v,T,b(o,{style:{"margin-top":"20px"}},{default:c((()=>[y])),_:1}),b(p,{p:a.PTabs},null,8,["p"])])])),_:1})])};export default f;
