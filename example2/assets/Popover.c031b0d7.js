import{d as e,n as t,c as n,f as l,q as o,o as r,b as a,e as p,j as u,S as s,F as i,x as d,y as c,z as v,A as m,a as f,w as b,B as y,k as P}from"./index.44837868.js";import{_ as g}from"./PCard.c58f7886.js";import{P as x,_}from"./PTable.410e58a1.js";import{_ as h}from"./PInput.b9269c14.js";import{_ as j}from"./PScroll.834b28d9.js";import{_ as A}from"./ReadComponent.f0b84223.js";import"./vendor.d9d03746.js";var k=e({name:"PPopover",props:{direction:{type:String,typeStr:"string",mark:"方向, auto时自动监测下左右上, 无满足条件时为下",default:"auto"},useArrow:{type:Boolean,typeStr:"boolean",mark:"是否显示三角箭头",default:!1}},setup(e,r){const{value:a}=t(),{value:p}=t();n((()=>{var t;return null!=(t=e.direction.split("-")[0])?t:"auto"})),n((()=>{var t;return null!=(t=e.direction.split("-")[1])?t:"center"})),l(0);return o((()=>{if(!a.value||!p.value)return;const e=a.value.children[0],t=p.value.children[0];console.log(e,t),e&&t&&(e.getBoundingClientRect(),t.getBoundingClientRect(),document.body.clientWidth,document.body.clientHeight)})),{popover:a,popoverUp:p}}});const C={class:"p-popover",ref:"popover"},S={class:"p-popover-up",ref:"popoverUp"};k.render=function(e,t,n,l,o,d){return r(),a(i,null,[p("div",C,[u(e.$slots,"default")],512),(r(),a(s,{to:"body"},[p("div",S,[u(e.$slots,"over",{direction:e.finnalyDirection})],512)]))],64)};var B=e({name:"Alert",components:{PScroll:j,PTable:x,PButton:d,PAlert:c,PDivider:_,PCard:g,PInput:h,ReadComponent:A,PPopover:k},setup:()=>({values:v(Array(10).fill(!1)),PAlert:m(c)})});const R={class:"fl-1",style:{padding:"10px"}},U={style:{gap:"5px"}},V=p("h1",null,"PAlert 弹出框",-1),w=p("h5",null," 该组件支持按规范弹出提示框或内容框, 弹出框会选染至body, 注意样式 ",-1),D=y("用例"),I={style:{padding:"24px"}},T=p("div",null,"123",-1),$=p("span",{style:{display:"none"}},"456",-1),q=p("pre",null,[p("code",null,P('<p-button @click="values[0] = true">提交成功</p-button>\n<p-alert\n  v-model="values[0]"\n  text="提示信息提示信息提示信息提示信息提示信息"\n  title="提交成功"\n></p-alert>\n<p-button\n  usePadding\n  @click="values[1] = true"\n  style="margin-top: 5px"\n  >提交失败</p-button\n>\n<p-alert\n  type="error"\n  v-model="values[1]"\n  text="提示信息提示信息提示信息提示信息提示信息"\n  title="提交失败"\n></p-alert>'))],-1),z={style:{padding:"24px"}},F=y("内容框"),H=y("取消"),W=y("确定"),E=p("pre",null,[p("code",null,'<p-button @click="values[2] = true">内容框</p-button>\r\n<p-alert v-model="values[2]">\r\n  <p-input></p-input>\r\n  <template #button>\r\n    <p-button :importance="2">取消</p-button>\r\n    <p-button>确定</p-button>\r\n  </template>\r\n</p-alert>')],-1);B.render=function(e,t,n,l,o,u){const s=f("p-popover"),i=f("p-card"),d=f("p-button"),c=f("p-input"),v=f("p-alert"),m=f("p-divider"),y=f("read-component"),P=f("p-scroll");return r(),a("div",R,[p(P,{style:{height:"100%"}},{default:b((()=>[p("div",U,[V,w,p(i,{style:{"margin-top":"20px"}},{title:b((()=>[D])),default:b((()=>[p("div",I,[p(s,null,{over:b((()=>[$])),default:b((()=>[T])),_:1}),q])])),_:1}),p(i,{style:{"margin-top":"20px"}},{default:b((()=>[p("div",z,[p(d,{onClick:t[1]||(t[1]=t=>e.values[2]=!0)},{default:b((()=>[F])),_:1}),p(v,{modelValue:e.values[2],"onUpdate:modelValue":t[2]||(t[2]=t=>e.values[2]=t)},{button:b((()=>[p(d,{importance:2},{default:b((()=>[H])),_:1}),p(d,null,{default:b((()=>[W])),_:1})])),default:b((()=>[p(c)])),_:1},8,["modelValue"]),p(m,{style:{margin:"10px 0"}}),E])])),_:1}),p(y,{p:e.PAlert},null,8,["p"])])])),_:1})])};export default B;
