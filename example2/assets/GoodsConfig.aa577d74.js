import{d as a,x as e,z as s,h as l,a as o,o as i,b as n,e as t,w as d,B as r}from"./index.44837868.js";import{_ as m}from"./PCard.c58f7886.js";import{_ as c,P as p}from"./PTable.410e58a1.js";import{_ as f}from"./PInput.b9269c14.js";import{_ as u}from"./PPagination.97f75c6b.js";import{_ as P}from"./PScroll.834b28d9.js";import"./vendor.d9d03746.js";import"./PSelect.bda7179c.js";/* empty css              */import"./PInputNumber.6e2e901e.js";var b=a({name:"GoodsConfig",components:{PInput:f,PDivider:c,PTable:p,PCard:m,PButton:e,PPagination:u,PScroll:P},setup(){const a=l();return{tableColumns:s([{key:"id",label:"商品ID"},{key:"name",label:"商品名称"},{key:"operate",label:"操作"}]),list:s([{id:"1",name:"腾讯大王卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"},{id:"2",name:"懂我卡"}]),handleDetail:e=>{a.push({path:"/goodsConfig/"+e})}}}});const g={class:"goods_config flc"},_={class:"goods_config-search fl fl-j-se"},h={class:"goods_config-search-item fl fl-a-c"},j=t("span",null,"商品名称：",-1),v={class:"goods_config-search-item fl fl-a-c"},C=t("span",null,"商品ID：",-1),k=t("div",{style:{height:"30px"}},null,-1),D=r("查询"),I=r("查看详情");b.render=function(a,e,s,l,r,m){const c=o("p-input"),p=o("p-button"),f=o("p-table"),u=o("p-scroll"),P=o("p-pagination");return i(),n("div",g,[t("div",_,[t("div",h,[j,t(c,{class:"fl-1"})]),t("div",v,[C,t(c,{class:"fl-1",placeholder:"支持模糊搜索"})])]),k,t(u,{class:"fl-1"},{default:d((()=>[t(f,{title:"商品列表",list:a.list,columns:a.tableColumns},{operate:d((()=>[t(p,null,{default:d((()=>[D])),_:1})])),"column-operate":d((({data:e})=>[t(p,{usePadding:"",onClick:s=>a.handleDetail(e.id)},{default:d((()=>[I])),_:2},1032,["onClick"])])),_:1},8,["list","columns"])])),_:1}),t(P,{pageNum:1,total:1})])};export default b;
