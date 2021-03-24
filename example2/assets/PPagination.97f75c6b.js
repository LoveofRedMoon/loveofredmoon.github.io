import{d as e,x as a,K as n,C as t,W as r,c as u,a1 as o,a as l,o as m,b as i,w as p,e as d,m as s,l as g,v as P,F as N,i as y,B as c,k as h}from"./index.44837868.js";import{_ as w}from"./PSelect.bda7179c.js";import{_ as b}from"./PInputNumber.6e2e901e.js";var f=e({components:{PSelect:w,PButton:a,PIcon:n,PInputNumber:b},name:"PPagination",props:{pageNum:{type:Number,typeStr:"number",mark:"页码, 从1开始",default:1},pageSize:{type:Number,typeStr:"number",mark:"每页数量",default:20},pageSizeOptions:{type:Array,typeStr:"number[]",mark:"每页数量选项",default:()=>[10,20,50]},total:{type:Number,typeStr:"number",mark:"总数量",default:0},loading:{type:Boolean,typeStr:"boolean",mark:"是否加载中, 会影响disabled",default:!1},showTotal:{type:Boolean,typeStr:"boolean",mark:"是否展示总数量",default:!0},showOptions:{type:Boolean,typeStr:"boolean",mark:"是否展示页码选项框",default:!0},showFirstPage:{type:Boolean,typeStr:"boolean",mark:"是否始终展示第一页",default:!0},showLastPage:{type:Boolean,typeStr:"boolean",mark:"是否始终展示最后一页",default:!0},showPrePage:{type:Boolean,typeStr:"boolean",mark:"是否展示上一页按钮",default:!0},showAfterPage:{type:Boolean,typeStr:"boolean",mark:"是否展示下一页按钮",default:!0},showJump:{type:Boolean,typeStr:"是否展示跳转输入框",mark:"每页数量",default:!0},surroundPageNum:{type:Number,typeStr:"number",mark:"环绕页码数量, 例如当前第10页, 默认展示8,9,10,11,12, 其他使用省略号",default:2}},emits:["update:pageNum","update:pageSize"],emitsMark:[{key:"update:pageNum",when:"当页码变化时触发",param:"number",paramRemark:"页码"},{key:"update:pageSize",when:"当每页数量变化时触发",param:"number",paramRemark:"每页数量"}],setup(e,a){const n=t(e,"pageNum",a.emit),l=t(e,"pageSize",a.emit),m=r(n,o),i=u((()=>e.pageSizeOptions.map((e=>({label:e+"条/页",key:e}))))),p=u((()=>Math.ceil(e.total/l.value))),d=r(n,o),s=e=>{if(e<=1){if(1===n.value)return;e=1}else if(e>=p.value){if(n.value===p.value)return;e=p.value}n.value=e};return{currentShowCenterPageNum:m,innerPageNum:n,innerEnterPageNum:d,innerPageSize:l,innerPageSizeOptions:i,maxPageNum:p,handlePreview:a=>{const n=m.value+(2*e.surroundPageNum+1)*(a?1:-1);n<1+e.surroundPageNum?m.value=Math.min(p.value,e.surroundPageNum+1):n>p.value-e.surroundPageNum?m.value=Math.max(1,p.value-e.surroundPageNum):m.value=n},jumpTo:s,handleEnter:e=>{"enter"===e.key.toLowerCase()&&s(d.value)}}}});const k={class:"fl fl-a-c p-pagination"},S=c("1"),x=c("..."),v=c("..."),C={key:5,class:"fl fl-a-c",style:{"column-gap":"8px"}},z=c("跳至"),B=c("页"),_={key:6,style:{"margin-left":"8px"}};f.render=function(e,a,n,t,r,u){const o=l("p-icon"),w=l("p-button"),b=l("p-select"),f=l("p-input-number");return m(),i("div",k,[e.showPrePage?(m(),i(w,{key:0,title:"上一页",importance:3,onClick:a[1]||(a[1]=a=>e.jumpTo(e.innerPageNum-1)),disabled:e.loading||e.innerPageNum<=1,style:{padding:"0 6px","min-width":"32px"}},{default:p((()=>[d(o,{class:"pop-left-arrow"})])),_:1},8,["disabled"])):s("",!0),e.showFirstPage?g((m(),i(w,{key:1,importance:3,disabled:e.loading,onClick:a[2]||(a[2]=a=>e.jumpTo(1)),style:{padding:"0 6px","min-width":"32px"}},{default:p((()=>[S])),_:1},8,["disabled"])),[[P,e.currentShowCenterPageNum-e.surroundPageNum>1]]):s("",!0),g(d(w,{importance:3,style:{padding:"0 6px","min-width":"32px"},disabled:e.loading,onClick:a[3]||(a[3]=a=>e.handlePreview(!1))},{default:p((()=>[x])),_:1},8,["disabled"]),[[P,e.currentShowCenterPageNum-e.surroundPageNum>2]]),(m(!0),i(N,null,y(2*e.surroundPageNum+1,(a=>(m(),i(N,null,[e.currentShowCenterPageNum-e.surroundPageNum-1+a>0&&e.currentShowCenterPageNum-e.surroundPageNum-1+a<=e.maxPageNum?(m(),i(w,{key:e.currentShowCenterPageNum-e.surroundPageNum-1+a,importance:3,style:{padding:"0 6px","min-width":"32px"},onClick:n=>e.jumpTo(e.currentShowCenterPageNum-e.surroundPageNum-1+a),disabled:e.loading,active:e.currentShowCenterPageNum-e.surroundPageNum-1+a===e.innerPageNum},{default:p((()=>[d("span",null,h(e.currentShowCenterPageNum-e.surroundPageNum-1+a),1)])),_:2},1032,["onClick","disabled","active"])):s("",!0)],64)))),256)),g(d(w,{importance:3,style:{padding:"0 6px","min-width":"32px"},disabled:e.loading,onClick:a[4]||(a[4]=a=>e.handlePreview(!0))},{default:p((()=>[v])),_:1},8,["disabled"]),[[P,e.currentShowCenterPageNum+e.surroundPageNum<e.maxPageNum-1]]),e.showLastPage?g((m(),i(w,{key:2,importance:3,style:{padding:"0 6px","min-width":"32px"},disabled:e.loading,onClick:a[5]||(a[5]=a=>e.jumpTo(e.maxPageNum))},{default:p((()=>[c(h(e.maxPageNum),1)])),_:1},8,["disabled"])),[[P,e.currentShowCenterPageNum+e.surroundPageNum<e.maxPageNum]]):s("",!0),e.showAfterPage?(m(),i(w,{key:3,importance:3,style:{padding:"0 6px","min-width":"32px"},title:"下一页",onClick:a[6]||(a[6]=a=>e.jumpTo(e.innerPageNum+1)),disabled:e.loading||e.innerPageNum>=e.maxPageNum},{default:p((()=>[d(o,{class:"pop-right-arrow"})])),_:1},8,["disabled"])):s("",!0),e.showOptions?(m(),i(b,{key:4,style:{"font-size":"14px",width:"100px",height:"32px","margin-left":"8px"},modelValue:e.innerPageSize,"onUpdate:modelValue":a[7]||(a[7]=a=>e.innerPageSize=a),options:e.innerPageSizeOptions},null,8,["modelValue","options"])):s("",!0),e.showJump?(m(),i("span",C,[z,d(f,{controls:!1,min:1,max:e.maxPageNum,precision:1,style:{width:"50px"},modelValue:e.innerEnterPageNum,"onUpdate:modelValue":a[8]||(a[8]=a=>e.innerEnterPageNum=a),onKeydown:e.handleEnter},null,8,["max","modelValue","onKeydown"]),B])):s("",!0),e.showTotal&&void 0!==e.total?(m(),i("span",_,"共 "+h(e.total)+" 条",1)):s("",!0)])};export{f as _};