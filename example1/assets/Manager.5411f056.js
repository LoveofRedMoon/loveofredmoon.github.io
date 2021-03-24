var a=Object.defineProperty,e=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,l=(e,o,s)=>o in e?a(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,d=(a,d)=>{for(var r in d||(d={}))e.call(d,r)&&l(a,r,d[r]);if(o)for(var r of o(d))s.call(d,r)&&l(a,r,d[r]);return a};import{d as r,n,r as t,g as i,D as w,v as u,w as p,N as f,f as m,o as c,a as P,b as h,t as v,i as g,F as y,e as U,l as _,k as b}from"./index.8a677f61.js";import{L as D}from"./providerSymbol.93f9f49b.js";import{g as S}from"./refUtil.896e56f6.js";import"./vendor.be7200f3.js";var x=r({name:"Manager",setup(){const a=n(D),e=t(!1);return d(d(d({userPo:a,loading:e},function({loading:a}){const e=t(i([]));return a.value=!0,w.get("/api/user").then((({data:a})=>{console.log(a),a.success?e.value=i(a.data):u.error("获取用户列表失败!")})).catch((a=>{u.error(a.toString())})).finally((()=>{a.value=!1})),{users:e}}({loading:e})),function({loading:a}){const e=S(),o=i({oldPassword:{value:"",show:!1},newPassword:{value:"",validator:(a,e,o)=>{""===e?o(new Error("新密码不能为空")):o()},show:!1},newPasswordSec:{value:"",validator:(a,e,s)=>{e!==o.newPassword.value?s(new Error("两次输入密码不一致!")):s()},show:!1}});return p(e,(a=>{a&&(o.oldPassword.value="",o.newPassword.value="",o.newPasswordSec.value="")})),{handleModifyPassword:a=>{e.value=a},handleConfirmPasswordModify:()=>{if(!o.newPassword.value||o.newPassword.value!==o.newPasswordSec.value)return u.error("两次输入的密码不一致! ");a.value=!0,w.put("/api/user",{oldPassword:o.oldPassword.value,newPassword:o.newPassword.value}).then((({data:a})=>{a.success?(u.success("修改成功!"),e.value=null):u.error(a.msg)})).catch((a=>{u.error(a.toString())})).finally((()=>{a.value=!1}))},handleDeleteUser:e=>{f.confirm(`即将删除用户[${e.phone}], 是否继续?`,"删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.value=!0,w.delete("/api/user",{params:{phone:e.phone}}).then((({data:a})=>{a.success?u.success("删除成功! "):u.error("删除失败! "+a.msg)})).catch((a=>{u.error(a.toString())})).finally((()=>{a.value=!1}))})).catch((()=>{}))},modifyUserPo:e,modifyPasswordData:o,toggleShowPassword:a=>{o[a].show=!o[a].show}}}({loading:e})),function({loading:a}){const e=i({phone:"",password:""}),o=t(!1);return p(o,(a=>{a&&(e.phone="",e.password="")})),{addUserData:e,addUserShow:o,confirmAddUser:()=>e.phone?e.password?(a.value=!0,void w.post("/api/user",e).then((({data:a})=>{a.success?(u.success("新增用户成功! 用户名: "+e.phone),o.value=!1):u.error(a.msg)})).catch((a=>{u.error(a.toString())})).finally((()=>{a.value=!1}))):u.error("密码不能为空!"):u.error("手机号不能为空!")}}({loading:e}))}});const k={style:{padding:"30px",width:"100%"},class:"flc"},C={class:"fl"},V=h("img",{class:"manager-avatar",src:"/example1/assets/defaultAvatar.8d6cbecf.png"},null,-1),j={class:"fl-1 flc",style:{margin:"0 24px"}},O=_("修改密码"),M=_("新增"),z={class:"manager-user fl fl-a-c"},E={style:{width:"160px"}},A={style:{width:"120px"}},F={style:{"margin-right":"12px"}},B=h("span",{class:"fl-1"},null,-1),T=_("密码重置"),$=_("删除用户"),I=_("确认修改"),L=_("取消"),N=_("确认创建"),q=_("取消");x.render=function(a,e,o,s,l,d){var r,n,t,i;const w=m("el-button"),u=m("el-input"),p=m("el-form-item"),f=m("el-form"),D=m("el-dialog");return c(),P(y,null,[h("div",k,[h("div",C,[V,h("div",j,[h("span",null,"账号："+v(null!=(n=null==(r=a.userPo)?void 0:r.phone)?n:""),1),h(w,{style:{"margin-top":"8px",width:"100px"},type:"primary",size:"small",onClick:e[1]||(e[1]=e=>a.handleModifyPassword(a.userPo)),loading:a.loading},{default:g((()=>[O])),_:1},8,["loading"])]),h(w,{style:{"margin-top":"8px",width:"100px",height:"14px"},plain:"",size:"small",loading:a.loading,onClick:e[2]||(e[2]=e=>a.addUserShow=!0)},{default:g((()=>[M])),_:1},8,["loading"])]),(c(!0),P(y,null,U(a.users,(e=>(c(),P("div",z,[h("span",E,v(e.phone),1),h("span",A,v(e.typeStr),1),h("span",F,"密码："+v(e.showPassword?e.password:"********"),1),e.password.match(/[^\*]/)?(c(),P(y,{key:0},[h(w,{plain:"",size:"mini",onClick:()=>e.showPassword=!e.showPassword},{default:g((()=>[_(v(e.showPassword?"隐藏":"显示"),1)])),_:2},1032,["onClick"]),B,h(w,{plain:"",size:"mini",onClick:o=>a.handleModifyPassword(e),loading:a.loading},{default:g((()=>[T])),_:2},1032,["onClick","loading"]),h(w,{plain:"",size:"mini",onClick:o=>a.handleDeleteUser(e),loading:a.loading},{default:g((()=>[$])),_:2},1032,["onClick","loading"])],64)):b("",!0)])))),256))]),h(D,{title:`您正在修改[${null!=(i=null==(t=a.modifyUserPo)?void 0:t.phone)?i:""}]的密码`,"model-value":!!a.modifyUserPo,"onUpdate:modelValue":e[10]||(e[10]=e=>!e&&(a.modifyUserPo=null))},{default:g((()=>[h(f,{ref:"modifyPasswordForm",model:a.modifyPasswordData,"label-width":"80px",rules:Object.fromEntries(Object.entries(a.modifyPasswordData).map((([a,e])=>[a,e.validator?[{validator:e.validator,trigger:"blur"}]:void 0])))},{default:g((()=>[h(p,{label:"旧密码"},{default:g((()=>[h(u,{type:a.modifyPasswordData.oldPassword.show?"text":"password",modelValue:a.modifyPasswordData.oldPassword.value,"onUpdate:modelValue":e[4]||(e[4]=e=>a.modifyPasswordData.oldPassword.value=e)},{suffix:g((()=>[h("i",{onClick:e[3]||(e[3]=e=>a.toggleShowPassword("oldPassword")),class:["el-input__icon el-icon-view manager-password-view",{"manager-password-noview":!a.modifyPasswordData.oldPassword.show}]},null,2)])),_:1},8,["type","modelValue"])])),_:1}),h(p,{label:"新密码"},{default:g((()=>[h(u,{type:a.modifyPasswordData.newPassword.show?"text":"password",modelValue:a.modifyPasswordData.newPassword.value,"onUpdate:modelValue":e[6]||(e[6]=e=>a.modifyPasswordData.newPassword.value=e)},{suffix:g((()=>[h("i",{onClick:e[5]||(e[5]=e=>a.toggleShowPassword("newPassword")),class:["el-input__icon el-icon-view manager-password-view",{"manager-password-noview":!a.modifyPasswordData.newPassword.show}]},null,2)])),_:1},8,["type","modelValue"])])),_:1}),h(p,{label:"确认密码"},{default:g((()=>[h(u,{type:a.modifyPasswordData.newPasswordSec.show?"text":"password",modelValue:a.modifyPasswordData.newPasswordSec.value,"onUpdate:modelValue":e[8]||(e[8]=e=>a.modifyPasswordData.newPasswordSec.value=e)},{suffix:g((()=>[h("i",{onClick:e[7]||(e[7]=e=>a.toggleShowPassword("newPasswordSec")),class:["el-input__icon el-icon-view manager-password-view",{"manager-password-noview":!a.modifyPasswordData.newPasswordSec.show}]},null,2)])),_:1},8,["type","modelValue"])])),_:1}),h(p,null,{default:g((()=>[h(w,{type:"primary",onClick:a.handleConfirmPasswordModify},{default:g((()=>[I])),_:1},8,["onClick"]),h(w,{onClick:e[9]||(e[9]=()=>a.modifyUserPo=null)},{default:g((()=>[L])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","model-value"]),h(D,{title:"创建用户",modelValue:a.addUserShow,"onUpdate:modelValue":e[14]||(e[14]=e=>a.addUserShow=e)},{default:g((()=>[h(f,{ref:"addUserForm",model:a.addUserData,"label-width":"80px"},{default:g((()=>[h(p,{label:"手机号"},{default:g((()=>[h(u,{modelValue:a.addUserData.phone,"onUpdate:modelValue":e[11]||(e[11]=e=>a.addUserData.phone=e)},null,8,["modelValue"])])),_:1}),h(p,{label:"密码"},{default:g((()=>[h(u,{modelValue:a.addUserData.password,"onUpdate:modelValue":e[12]||(e[12]=e=>a.addUserData.password=e)},null,8,["modelValue"])])),_:1}),h(p,null,{default:g((()=>[h(w,{type:"primary",onClick:a.confirmAddUser},{default:g((()=>[N])),_:1},8,["onClick"]),h(w,{onClick:e[13]||(e[13]=()=>a.addUserShow=!1)},{default:g((()=>[q])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])],64)};export default x;