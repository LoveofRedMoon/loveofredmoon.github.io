import{d as e,u as t,r as n,o as s,c as r,a,t as o,w as p}from"./index.dbf0a5d0.js";import{H as l,_ as i}from"./NextStep.d5835485.js";var d=e({name:"Env",components:{Hljs:l,NextStep:i},setup(){const{t:e}=t();return{t:e}}});const m={class:"flc",style:{gap:"5px"}},v={style:{margin:"16px 0"}},c={style:{margin:"16px 0"}},x=a("h3",{style:{"margin-top":"16px"},id:"api"},"Api",-1),g=a("h4",{style:{"margin-top":"16px"}},"env",-1),f={style:{margin:"16px 0"}},u=a("h4",{style:{"margin-top":"16px"}},"readAndSet",-1),y={style:{margin:"16px 0"}};d.render=function(e,t,l,i,d,h){const b=n("hljs"),S=n("el-form-item"),j=n("el-form"),A=n("next-step");return s(),r("div",m,[a("h2",{id:e.t("headers.env")},o(e.t("headers.env")),9,["id"]),a("p",v,o(e.t("env.p1")),1),a("h3",{id:e.t("env.steps")},o(e.t("env.steps")),9,["id"]),a("p",c,o(e.t("env.p2")),1),x,g,a("p",f,o(e.t("env.env.remark")),1),a(j,{"label-width":"80px"},{default:p((()=>[a(S,{label:e.t("example")},{default:p((()=>[a(b,{language:"typescript",code:"import { env } from 'moon-boot'\nclass TestService {\n  test() {\n    console.log(env('server.port'))\n    console.log(env.server.port) // Attention!!! May cause NPE !!!\n    console.log(env.server?.port)\n  }\n}\n"},null,8,["code"])])),_:1},8,["label"])])),_:1}),u,a("p",y,o(e.t("env.readAndSet.remark")),1),a(A)])};export default d;
