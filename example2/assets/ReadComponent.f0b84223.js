import{_ as e}from"./PCard.c58f7886.js";import{P as l}from"./PTable.410e58a1.js";import{d as a,c as r,a as t,o as n,b as s,e as p,w as u,B as i,k as o,N as m,F as k}from"./index.44837868.js";var y=a({components:{PCard:e,PTable:l},name:"ReadComponent",inheritAttrs:!1,props:{p:{type:null}},setup:e=>({properties:r((()=>{var l,a;return Object.entries(null!=(a=null==(l=e.p)?void 0:l.props)?a:{}).map((([e,l])=>{var a,r;return{key:e,type:null!=(a=null==l?void 0:l.typeStr)?a:"",required:(null==l?void 0:l.required)?"是":"",mark:null!=(r=null==l?void 0:l.mark)?r:"",default:void 0===(null==l?void 0:l.default)?"":"number"==typeof l.default?String(l.default):JSON.stringify(l.default)}}))}))})});y.render=function(e,l,a,r,y,d){const b=t("p-table"),f=t("p-card");return n(),s(k,null,[p(f,m({style:{"margin-top":"20px"}},e.$attrs),{title:u((()=>[i(o(e.p.name)+"属性",1)])),default:u((()=>[p(b,{list:e.properties,columns:[{key:"key",label:"属性名"},{key:"type",label:"类型"},{key:"required",label:"是否必传"},{key:"mark",label:"描述"},{key:"default",label:"默认值"}]},null,8,["list"])])),_:1},16),p(f,{style:{"margin-top":"20px"}},{title:u((()=>[i(o(e.p.name)+"方法",1)])),default:u((()=>{var l;return[p(b,{list:null!=(l=e.p.emitsMark)?l:[],columns:[{key:"key",label:"方法名"},{key:"when",label:"触发时机"},{key:"param",label:"参数"},{key:"paramRemark",label:"参数说明"}]},null,8,["list"])]})),_:1}),p(f,{style:{"margin-top":"20px"}},{title:u((()=>[i(o(e.p.name)+"插槽",1)])),default:u((()=>{var l;return[p(b,{list:null!=(l=e.p.slotsMark)?l:[],columns:[{key:"key",label:"插槽名"},{key:"default",label:"默认插槽"},{key:"param",label:"插槽参数"},{key:"paramRemark",label:"参数说明"},{key:"remark",label:"说明"}]},null,8,["list"])]})),_:1})],64)};export{y as _};