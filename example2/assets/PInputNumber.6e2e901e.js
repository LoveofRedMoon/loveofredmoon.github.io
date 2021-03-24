import{d as e,K as a,C as n,f as t,E as l,n as r,L as s,V as o,G as u,a as p,o as i,b as d,R as m,w as c,e as b}from"./index.44837868.js";import{_ as v}from"./PInput.b9269c14.js";var h=e({components:{PIcon:a,PInput:v},name:"PInputNumber",props:{disabled:{type:Boolean,typeStr:"boolean",mark:"是否禁用",default:!1},modelValue:{type:Number,typeStr:"number",mark:"输入值",default:0},min:{type:Number,typeStr:"number",mark:"最小值",default:-1/0},max:{type:Number,typeStr:"number",mark:"最大值",default:1/0},step:{type:Number,typeStr:"number",mark:"步长, 点击或滚动时处理",default:1},controls:{type:Boolean,typeStr:"boolean",mark:"是否使用控制按钮",default:!0},precision:{type:Number,typeStr:"number",mark:"精度, 0.05等同于0.01, 220等同于10"}},emits:["update:modelValue"],emitsMark:[{key:"update:modelValue",when:"输入值变化时触发",param:"number",paramRemark:"输入值"}],setup(e,a){const p=n(e,"modelValue",a.emit),i=t(p.value+"");l(p,(e=>i.value=e+""));const{value:d}=r(),m=t(!1),c=()=>{const a=i.value;let n=parseFloat(a);if(isNaN(n))i.value=p.value+"";else{if(e.precision){const a=e.precision.toString(),t=a.indexOf(".");if(t>-1){const e=a.length-1-t;n=parseFloat(n.toString().replace(new RegExp(`(\\.\\d{${e}}).*$`),"$1"))}else{const e=a.match(/0*$/)[0].length;n=parseFloat(n.toString().replace(new RegExp(`\\d{0,${e}}(\\.\\d*)?$`),"")||"0")}}n<e.min?p.value=e.min:n>e.max?p.value=e.max:p.value=n,i.value=p.value+""}},b=a=>{return n=this,t=null,l=function*(){e.disabled||(p.value=o(p.value,a),yield u(),c())},new Promise(((e,a)=>{var r=e=>{try{o(l.next(e))}catch(n){a(n)}},s=e=>{try{o(l.throw(e))}catch(n){a(n)}},o=a=>a.done?e(a.value):Promise.resolve(a.value).then(r,s);o((l=l.apply(n,t)).next())}));var n,t,l};return c(),{inputRef:d,value:p,strValue:i,active:m,handleClick:()=>{var e;m.value=!0,null==(e=d.value)||e.focus()},handleCheck:c,handleInc:b,handleKeyDown:e=>{switch(e.key.toLowerCase()){case"enter":c()}},handleScroll:a=>{e.disabled||(a.deltaY&&b(Math.sign(a.deltaY)*e.step),a.preventDefault(),a.stopImmediatePropagation())},transformClassToObject:s}}});h.render=function(e,a,n,t,l,r){const s=p("p-icon"),o=p("p-input");return i(),d(o,{class:{"p-inputnumber":!0},disabled:e.disabled,onWheel:e.handleScroll,onBlur:e.handleCheck,onKeydown:a[3]||(a[3]=a=>e.handleKeyDown(a)),modelValue:e.strValue,"onUpdate:modelValue":a[4]||(a[4]=a=>e.strValue=a)},m({_:2},[e.controls?{name:"prefix",fn:c((()=>[b("div",{class:["p-inputnumber-icon p-inputnumber-minus center",{disabled:e.disabled}],onClick:a[1]||(a[1]=a=>e.handleInc(-e.step))},[b(s,{class:"pop-jian"})],2)]))}:void 0,e.controls?{name:"suffix",fn:c((()=>[b("div",{class:["p-inputnumber-icon p-inputnumber-add center",{disabled:e.disabled}],onClick:a[2]||(a[2]=a=>e.handleInc(e.step))},[b(s,{class:"pop-jia"})],2)]))}:void 0]),1032,["disabled","onWheel","onBlur","modelValue"])};export{h as _};