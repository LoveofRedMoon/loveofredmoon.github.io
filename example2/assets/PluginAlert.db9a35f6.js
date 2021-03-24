var e=(e,l,n)=>new Promise(((t,r)=>{var a=e=>{try{o(n.next(e))}catch(l){r(l)}},s=e=>{try{o(n.throw(e))}catch(l){r(l)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,s);o((n=n.apply(e,l)).next())}));import{d as l,x as n,a5 as t,a6 as r,a7 as a,a8 as s,a as o,o as i,b as d,e as u,w as c,k as p,B as m,a9 as y}from"./index.44837868.js";import{_ as h}from"./PCard.c58f7886.js";import{_ as k,P as f}from"./PTable.410e58a1.js";import{_ as b}from"./PScroll.834b28d9.js";import"./vendor.d9d03746.js";var g=l({components:{PScroll:b,PDivider:k,PCard:h,PButton:n,PTable:f},name:"PlguinAlert",setup(){return{handleClick1:()=>e(this,null,(function*(){const l=t("我是提示");!function(){e(this,null,(function*(){console.log("start"),yield s(l),console.log("end")}))}(),yield r(2e3),a(l)}))}}});const v={class:"fl-1",style:{padding:"10px"}},x={style:{gap:"5px"}},P=u("h1",null,"Alert 弹出框",-1),C=u("h5",null,"该组件支持按规范的复选框",-1),q=u("div",{class:"blank-30"},null,-1),w=u("h2",null,"用例",-1),A=m(" 组件式调用请查看"),R=m("组件 - 弹出框"),S={class:"fl fl-a-c",style:{gap:"5px"}},_=m("点我"),I=u("pre",null,[u("code",null,'<p-button @click="handleClick1">点我</p-button>')],-1),O=u("div",{class:"blank-30"},null,-1),j=u("h2",null,"alert方法",-1),B=u("h5",null,"类型",-1),E=u("pre",null,[u("code",null,"function alert(config: AlertOption): number\r\ntype AlertOption =\r\n  | {\r\n      id: number\r\n      show: boolean\r\n      text?: string\r\n      title?: string\r\n      type?: 'success' | 'error' | 'warning'\r\n      render?: () => VNode\r\n      titleRender?: () => VNode\r\n      buttonRender?: () => VNode\r\n      maskClose?: boolean\r\n    }\r\n  | string")],-1),F=u("h5",null,"函数可以传入一个字符串, 进行提示框渲染, 或传入配置项",-1),J=u("h5",null,"当传入render函数, 进行内容渲染, 否则使用text渲染",-1),N=u("h5",null,"返回一个AlertId",-1),V=y('<div class="blank-30"></div><h2>close方法</h2><h5>类型</h5><pre><code>function close(id: number): void</code></pre><h5>根据AlertId关闭提示框/内容库</h5><div class="blank-30"></div><h2>isOpen方法</h2><h5>类型</h5><pre><code>function isOpen(id: number): Promise&lt;true&gt; | null</code></pre><h5>根据AlertId判断窗体是否关闭</h5><h5>若未关闭, 返回一个Promise, 当关闭时触发resolve</h5>',11);g.render=function(e,l,n,t,r,a){const s=o("router-link"),m=o("p-divider"),y=o("p-button"),h=o("p-card"),k=o("p-table"),f=o("p-scroll");return i(),d("div",v,[u(f,{style:{height:"100%"}},{default:c((()=>[u("div",x,[P,C,q,w,u("h5",null,[A,u(s,{to:{path:"/example/alert"}},{default:c((()=>[R])),_:1})]),u(m,{style:{margin:"10px 0"}}),u(h,{style:{margin:"5px",padding:"20px"}},{default:c((()=>[u("div",null,[u("div",S,[u(y,{onClick:e.handleClick1},{default:c((()=>[_])),_:1},8,["onClick"])]),u(m,{style:{margin:"10px 0"}}),I,u("pre",null,[u("code",null,p("import { alert, close, isOpen } from '../../plugins/Alert'\nconst handleClick1 = async () => {\n  const alertId = alert('我是提示')\n  async function test() {\n    console.log('start')\n    await isOpen(alertId)\n    console.log('end')\n  }\n  test()\n  await sleep(2000)\n  close(alertId)\n}"),1)])])])),_:1}),O,j,B,E,F,J,N,u(m,{style:{margin:"10px 0"}}),u(k,{title:"配置项",list:[{key:"text",type:"String",required:"",mark:"提示框使用文字, 在没有slot渲染时使用",default:"无"},{key:"title",type:"String",required:"",mark:"提示框标题文字, 在没有slot渲染时使用",default:"无"},{key:"type",type:"'success' | 'warning' | 'error'",required:"",mark:"提示框图标类型, 在没有slot渲染时使用",default:"无"},{key:"render",type:"RenderFunction | (() => JSX.Element)",required:"",mark:"内容框渲染函数",default:"无"},{key:"titleRender",type:"RenderFunction | (() => JSX.Element)",required:"",mark:"当进行内容宽渲染时的标题渲染函数, 使用提示框时忽略",default:"无"},{key:"buttonRender",type:"RenderFunction | (() => JSX.Element)",required:"",mark:"按钮渲染函数",default:"无"},{key:"maskClose",type:"Boolean",required:"",mark:"是否允许点击蒙层关闭",default:"true"}],columns:[{key:"key",label:"属性名"},{key:"type",label:"类型"},{key:"required",label:"是否必传"},{key:"mark",label:"描述"},{key:"default",label:"默认值"}]},null,8,["list"]),V])])),_:1})])};export default g;