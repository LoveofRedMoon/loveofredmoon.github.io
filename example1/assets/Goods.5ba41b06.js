var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,t=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,i=(e,i)=>{for(var n in i||(i={}))l.call(i,n)&&t(e,n,i[n]);if(a)for(var n of a(i))o.call(i,n)&&t(e,n,i[n]);return e};import{d as n,r as d,g as r,D as s,v as p,w as c,f as u,h as g,o as m,a as h,b as f,i as v,j as y,F as x,e as k,t as b,k as w,l as S}from"./index.8a677f61.js";import{g as C}from"./refUtil.896e56f6.js";import{_ as P}from"./GoodsDetail.0d729af0.js";import"./vendor.be7200f3.js";var j=n({components:{GoodsDetail:P},name:"Goods",setup(){const e=d(!1),l=function({loading:e}){const l=r({startPrice:"",endPrice:"",goodsPool:"",goodsName:""}),a=d(0),o=d([]),t=d(1),i=d(10),n=()=>{e.value=!0,s.get("/api/goods",{params:l}).then((({data:e})=>{console.log(e),e.success?(o.value=e.data.list,a.value=e.data.total):p.error(e.msg)})).catch((e=>{p.error(e.toString())})).finally((()=>{e.value=!1}))};return c(t,n),c(i,(()=>{1===t.value?n():t.value=1})),n(),{pageNum:t,pageSize:i,total:a,searchForm:l,handleSearch:n,list:o}}({loading:e});return i(i(i({loading:e},l),function({loading:e,handleSearch:l}){return{handleGoodsChg:(a,o)=>{e.value=!0,s.put("/api/goods/"+a.id,o).then((({data:e})=>{e.success?p.success("修改成功!"):p.error(e.msg)})).catch((e=>{p.error(e.toString())})).finally((()=>{e.value=!1,l()}))}}}({loading:e,handleSearch:l.handleSearch})),function({loading:e}){const l=C();return{goodsDetail:l,handleDetail:e=>{l.value=e}}}({loading:e}))}});const V={style:{padding:"30px"}},_=f("span",{style:{margin:"0 10px"}},"至",-1),z=S("搜索"),D={class:"fl fl-w fl-j-sb"},F={class:"flc goods-item"},G={style:{margin:"10px 0"}},U={style:{"font-size":"14px"}},N={key:0,class:"fl fl-j-sb"},O=S("首页删除"),E=S("首页展示"),I={key:2},q=S("广告页删除"),A=S("广告页展示"),B={key:1,class:"goods-item-mark center",style:{background:"#8a7a7a",top:"30%"}},H={key:2,class:"goods-item-mark center",style:{background:"#ee940d"}},J={key:3,class:"goods-item-mark center",style:{background:"#ff3900"}},K={style:{width:"210px","margin-right":"12px",height:"0"}};j.render=function(e,l,a,o,t,i){const n=u("el-input-number"),d=u("el-form-item"),r=u("el-option"),s=u("el-select"),p=u("el-input"),c=u("el-button"),S=u("el-form"),C=u("el-image"),P=u("el-pagination"),j=u("goods-detail"),L=u("el-dialog"),M=g("loading");return m(),h(x,null,[f("div",V,[f(S,{inline:!0,model:e.searchForm,class:"fl fl-w fl-j-sb goods-search-form"},{default:v((()=>[f(d,{label:"价格区间"},{default:v((()=>[f(n,{modelValue:e.searchForm.startPrice,"onUpdate:modelValue":l[1]||(l[1]=l=>e.searchForm.startPrice=l),placeholder:"最低价",style:{width:"120px"},"controls-position":"right"},null,8,["modelValue"]),_,f(n,{modelValue:e.searchForm.endPrice,"onUpdate:modelValue":l[2]||(l[2]=l=>e.searchForm.endPrice=l),placeholder:"最高价",style:{width:"120px"},"controls-position":"right"},null,8,["modelValue"])])),_:1}),f(d,{label:"商品池"},{default:v((()=>[f(s,{modelValue:e.searchForm.goodsPool,"onUpdate:modelValue":l[3]||(l[3]=l=>e.searchForm.goodsPool=l)},{default:v((()=>[f(r,{label:"选项1",value:"1"}),f(r,{label:"选项2",value:"2"})])),_:1},8,["modelValue"])])),_:1}),f(d,{label:"商品名称"},{default:v((()=>[f(p,{modelValue:e.searchForm.goodsName,"onUpdate:modelValue":l[4]||(l[4]=l=>e.searchForm.goodsName=l),placeholder:"商品名称"},null,8,["modelValue"])])),_:1}),f(d,null,{default:v((()=>[f(c,{type:"primary",onClick:e.handleSearch,loading:e.loading},{default:v((()=>[z])),_:1},8,["onClick","loading"])])),_:1})])),_:1},8,["model"]),y(f("div",D,[(m(!0),h(x,null,k(e.list,(l=>(m(),h("div",F,[f(C,{style:{width:"150px",height:"150px",cursor:"pointer"},src:l.pic,fit:"cover",onClick:a=>e.handleDetail(l)},null,8,["src","onClick"]),f("span",G,b(l.goodsName),1),f("span",null,[f("span",null,"售价: "+b(l.totalPrice)+"元  ",1),f("span",U,"进价: "+b(l.costPrice)+"元",1)]),l.offline?w("",!0):(m(),h("div",N,[l.indexShow?(m(),h(c,{key:0,plain:"",size:"mini",style:{"margin-top":"20px",color:"red",padding:"6px 8px"},onClick:a=>e.handleGoodsChg(l,{indexShow:!1})},{default:v((()=>[O])),_:2},1032,["onClick"])):l.advShow?(m(),h("div",I)):(m(),h(c,{key:1,plain:"",size:"mini",style:{"margin-top":"20px",padding:"6px 8px"},onClick:a=>e.handleGoodsChg(l,{indexShow:!0})},{default:v((()=>[E])),_:2},1032,["onClick"])),l.advShow?(m(),h(c,{key:3,plain:"",size:"mini",style:{"margin-top":"20px",color:"red",padding:"6px 8px"},onClick:a=>e.handleGoodsChg(l,{advShow:!1})},{default:v((()=>[q])),_:2},1032,["onClick"])):l.indexShow?w("",!0):(m(),h(c,{key:4,plain:"",size:"mini",style:{"margin-top":"20px",padding:"6px 8px"},onClick:a=>e.handleGoodsChg(l,{advShow:!0})},{default:v((()=>[A])),_:2},1032,["onClick"]))])),l.offline?(m(),h("div",B," 已下架 ")):l.indexShow?(m(),h("div",H," 首页展示 ")):l.advShow?(m(),h("div",J," 广告页展示 ")):w("",!0)])))),256)),(m(),h(x,null,k(6,(e=>f("div",K))),64))],512),[[M,e.loading]]),f(P,{style:{"margin-top":"20px","text-align":"right"},"current-page":e.pageNum,"onUpdate:current-page":l[5]||(l[5]=l=>e.pageNum=l),"page-size":e.pageSize,"onUpdate:page-size":l[6]||(l[6]=l=>e.pageSize=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,"prev-text":"上一页","next-text":"下一页"},null,8,["current-page","page-size","total"])]),f(L,{title:"商品详情","model-value":!!e.goodsDetail,"onUpdate:modelValue":l[8]||(l[8]=()=>e.goodsDetail=null),width:"80%"},{default:v((()=>{var a;return[(null==(a=e.goodsDetail)?void 0:a.id)?(m(),h(j,{key:0,id:e.goodsDetail.id,onClose:l[7]||(l[7]=()=>e.goodsDetail=null)},null,8,["id"])):w("",!0)]})),_:1},8,["model-value"])],64)};export default j;
