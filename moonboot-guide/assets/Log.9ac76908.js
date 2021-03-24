import{d as e,u as t,r as a,o as l,c as o,a as r,t as s,w as g,l as n}from"./index.dbf0a5d0.js";import{H as p,_ as d}from"./NextStep.d5835485.js";var m=e({name:"Log",components:{Hljs:p,NextStep:d},setup(){const{t:e}=t();return{t:e}}});const i={class:"flc",style:{gap:"5px"}},f={style:{margin:"16px 0"}},u=r("h3",{style:{"margin-top":"16px"},id:"api"},"Api",-1),c=r("h4",{style:{"margin-top":"16px"}},"getLogger",-1),b={style:{margin:"16px 0"}},x=n("false");m.render=function(e,t,p,d,m,_){const h=a("el-form-item"),y=a("hljs"),L=a("el-form"),j=a("next-step");return l(),o("div",i,[r("h2",{id:e.t("headers.log")},s(e.t("headers.log")),9,["id"]),r("p",f,s(e.t("log.p1")),1),u,c,r("p",b,s(e.t("log.getLogger.remark")),1),r(L,{"label-width":"80px"},{default:g((()=>[r(h,{label:e.t("params")},{default:g((()=>[n(s(e.t("log.getLogger.params")),1)])),_:1},8,["label"]),r(h,{label:e.t("returns")},{default:g((()=>[n(s(e.t("log.getLogger.returns")),1)])),_:1},8,["label"]),r(h,{label:e.t("async")},{default:g((()=>[x])),_:1},8,["label"]),r(h,{label:e.t("example")},{default:g((()=>[r(y,{language:"typescript",code:"import { getLogger } from 'moon-boot'\nconst log = getLogger(__filename)\nlog.info('abc')\n"},null,8,["code"])])),_:1},8,["label"])])),_:1}),r(j)])};export default m;
