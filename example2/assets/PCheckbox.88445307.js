var e=Object.assign;import{d as a,K as n,C as l,D as t,t as o,G as i,a as r,o as u,b as s,e as m,N as c,m as v,j as d,F as p}from"./index.44837868.js";const b=[];function h(e){return a=this,n=null,l=function*(){if(!e)return;yield i();const a=b.filter((a=>a.name.value===e)),n=a.filter((e=>e.isCombine.value));if(!n.length)return;const l=a.filter((e=>!e.isCombine.value)),t=l.filter((e=>!e.value.value)).length,o=l.length-t;t&&o?n.forEach((e=>e.value.value=2)):o?n.forEach((e=>e.value.value=1)):n.forEach((e=>e.value.value=0))},new Promise(((e,t)=>{var o=e=>{try{r(l.next(e))}catch(a){t(a)}},i=e=>{try{r(l.throw(e))}catch(a){t(a)}},r=a=>a.done?e(a.value):Promise.resolve(a.value).then(o,i);r((l=l.apply(a,n)).next())}));var a,n,l}var f=a({name:"PCheckbox",components:{PIcon:n},inheritAttrs:!1,props:{name:{type:String,typeStr:"string",mark:"等同于input的name, 全局相同分为一组"},modelValue:{type:[Boolean,Number],typeStr:"boolean | number",mark:"是否选择, 双态时为Boolean, 三态时为Number",default:!1},disabled:{type:Boolean,typeStr:"Boolean",mark:"是否禁用",default:!1},indeterminate:{type:Boolean,typeStr:"boolean",mark:"是否启用三态, 组合模式下强制使用",default:!1},combine:{type:Boolean,typeStr:"boolean",mark:"是否为组合模式按钮, 该值会影响/波及其他同name按钮, 无name时强制不使用",default:!1}},emits:["update:modelValue"],emitsMark:[{key:"update:modelValue",when:"当选中值变化时触发",param:"boolean | number",paramRemark:"双态时为Boolean, 三态时为Number"}],setup(e,a){e.combine&&!e.name&&console.warn("[运营平台组件]combine checkbox with no name");const n=l(e,"modelValue",a.emit);t(b,{name:o(e,"name"),value:n,indeterminate:o(e,"indeterminate"),isCombine:o(e,"combine")}),e.combine&&h(e.name);return{value:n,handleClick:()=>{if(!e.disabled)if(e.combine)if(e.name){const a=e.name,l=(+n.value+1)%2;b.filter((e=>e.name.value===a)).filter((e=>!e.isCombine.value)).forEach((e=>{e.indeterminate.value?e.value.value=l:e.value.value=!!l})),h(e.name)}else console.warn("[运营平台组件]combine checkbox with no name");else e.indeterminate?n.value=(+n.value+1)%3:n.value=!n.value,h(e.name)}}}});f.render=function(a,n,l,t,o,i){const b=r("p-icon");return u(),s(p,null,[m("div",{class:[e(e({},a.$attrs.class),{disabled:a.disabled,active:a.value}),"p-checkbox center"],style:a.$attrs.style,onClick:n[1]||(n[1]=(...e)=>a.handleClick&&a.handleClick(...e))},[m("input",c({type:"checkbox",value:a.value},e(e({},a.$attrs),{class:void 0,style:void 0,"onUpdate:modelValue":void 0}),{name:a.name}),null,16,["value","name"]),!0===a.value||1===a.value?(u(),s(b,{key:0,class:"p-chechbox-icon pop-gou"})):2===a.value?(u(),s(b,{key:1,class:"p-chechbox-icon pop-jian"})):v("",!0)],6),d(a.$slots,"default")],64)};export{f as _};