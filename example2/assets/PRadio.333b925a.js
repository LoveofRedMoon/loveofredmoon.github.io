var e=Object.assign;import{d as a,C as l,E as t,D as n,t as o,o as s,b as r,e as u,N as d,j as m,F as i}from"./index.44837868.js";const p=[];var c=a({name:"PRadio",inheritAttrs:!1,props:{checked:{type:Boolean,typeStr:"boolean",mark:"已废弃 后续版本可能删除",default:!1},name:{type:String,typeStr:"string",mark:"等同于input的name, 全局相同分为一组"},modelValue:{type:Boolean,typeStr:"boolean",mark:"是否选择",default:!1},disabled:{type:Boolean,typeStr:"boolean",mark:"是否禁用",default:!1},canCancel:{type:Boolean,typeStr:"boolean",mark:"是否可取消",default:!1}},emits:["update:checked","update:modelValue"],emitsMark:[{key:"update:modelValue",when:"当选中值变化时触发",param:"boolean | number",paramRemark:"双态时为Boolean, 三态时为Number"}],setup(e,a){const s=l(e,"modelValue",a.emit);t(s,(e=>a.emit("update:checked",e))),n(p,{name:o(e,"name"),value:s});return{value:s,handleClick:()=>{if(e.disabled)return;const a=e.name;p.forEach((e=>{e.name.value&&e.name.value===a&&e.value!==s&&e.value.value&&(e.value.value=!1)})),s.value=!s.value||!e.canCancel}}}});c.render=function(a,l,t,n,o,p){return s(),r(i,null,[u("div",{class:[e(e({},a.$attrs.class),{disabled:a.disabled,active:a.value}),"p-radio"],style:a.$attrs.style,onClick:l[1]||(l[1]=(...e)=>a.handleClick&&a.handleClick(...e))},[u("input",d({type:"radio",value:a.value},e(e({},a.$attrs),{class:void 0,style:void 0,"onUpdate:modelValue":void 0}),{name:a.name}),null,16,["value","name"])],6),m(a.$slots,"default")],64)};export{c as _};
