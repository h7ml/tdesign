var m=Object.defineProperty,p=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var r=(t,i,e)=>i in t?m(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,s=(t,i)=>{for(var e in i||(i={}))g.call(i,e)&&r(t,e,i[e]);if(o)for(var e of o(i))h.call(i,e)&&r(t,e,i[e]);return t},n=(t,i)=>p(t,f(i));import{p as b,n as v}from"./index.e20b7929.js";import{C as _}from"./compoonent-card.1ce7eb08.js";import{S as x}from"./search.a29754ab.js";import"./vendor.f3ed63b1.js";import"./use-size-props.6f46a224.js";const C={name:"",status:"",description:"",type:"",mark:"",amount:0};var y={name:"list-card",components:{SearchIcon:x,Card:_},data(){return{pagination:{current:1,pageSize:12,total:0},prefix:b,productList:[],value:"frist",rowKey:"index",tableLayout:"auto",verticalAlign:"top",bordered:!0,hover:!0,rowClassName:t=>`${t}-class`,formData:s({},C),options:[{label:"\u7F51\u5173",value:"1"},{label:"\u4EBA\u5DE5\u667A\u80FD",value:"2"},{label:"CVM",value:"3"}],formVisible:!1,textareaValue:"",rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0",type:"error"}]},searchValue:"",confirmVisible:!1,deleteProduct:void 0,dataLoading:!1}},computed:{confirmBody(){const{deleteProduct:t}=this;return t?`\u5220\u9664\u540E\uFF0C${t.name}\u7684\u6240\u6709\u4EA7\u54C1\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A, \u4E14\u65E0\u6CD5\u6062\u590D`:""}},mounted(){this.dataLoading=!0,this.$request.get("/api/get-card-list").then(t=>{if(t.code===0){const{list:i=[]}=t.data;this.productList=i,this.pagination=n(s({},this.pagination),{total:i.length})}}).catch(t=>{console.log(t)}).finally(()=>{this.dataLoading=!1})},methods:{onPageSizeChange(t){this.pagination.pageSize=t,this.pagination.current=1},onCurrentChange(t){this.pagination.current=t},onSubmit({result:t,firstError:i}){i?(console.log("Errors: ",t),this.$message.warning(i)):(this.$message.success("\u63D0\u4EA4\u6210\u529F"),this.formVisible=!1)},onClickCloseBtn(){this.formVisible=!1,this.formData={}},handleDeleteItem(t){this.confirmVisible=!0,this.deleteProduct=t},onConfirmDelete(){const{index:t}=this.deleteProduct;this.productList.splice(t-1,1),this.confirmVisible=!1,this.$message.success("\u5220\u9664\u6210\u529F")},onCancel(){this.deleteProduct=void 0,this.formData={}},handleManageProduct(t){this.formVisible=!0,this.formData=n(s({},t),{status:(t==null?void 0:t.isSetup)?"1":"0"})}}},l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list-card"},[e("div",{staticClass:"list-card-operation"},[e("t-button",{on:{click:function(a){t.formVisible=!0}}},[t._v("\u65B0\u5EFA\u4EA7\u54C1")]),e("t-input",{staticClass:"search-input",attrs:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u9700\u8981\u641C\u7D22\u7684\u5185\u5BB9",clearable:""},scopedSlots:t._u([{key:"suffix-icon",fn:function(){return[t.searchValue===""?e("search-icon",{attrs:{size:"20px"}}):t._e()]},proxy:!0}]),model:{value:t.searchValue,callback:function(a){t.searchValue=a},expression:"searchValue"}})],1),e("t-dialog",{attrs:{header:"\u65B0\u5EFA\u4EA7\u54C1",visible:t.formVisible,width:680,footer:!1},on:{"update:visible":function(a){t.formVisible=a}}},[e("div",{attrs:{slot:"body"},slot:"body"},[e("t-form",{ref:"form",attrs:{data:t.formData,rules:t.rules,labelWidth:100},on:{submit:t.onSubmit}},[e("t-form-item",{attrs:{label:"\u4EA7\u54C1\u540D\u79F0",name:"name"}},[e("t-input",{style:{width:"480px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("t-form-item",{attrs:{label:"\u4EA7\u54C1\u72B6\u6001",name:"status"}},[e("t-radio-group",{model:{value:t.formData.status,callback:function(a){t.$set(t.formData,"status",a)},expression:"formData.status"}},[e("t-radio",{attrs:{value:"0"}},[t._v("\u5DF2\u505C\u7528")]),e("t-radio",{attrs:{value:"1"}},[t._v("\u5DF2\u542F\u7528")])],1)],1),e("t-form-item",{attrs:{label:"\u4EA7\u54C1\u63CF\u8FF0",name:"description"}},[e("t-input",{style:{width:"480px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u63CF\u8FF0"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1),e("t-form-item",{attrs:{label:"\u4EA7\u54C1\u7C7B\u578B",name:"type"}},[e("t-select",{style:{width:"480px"},attrs:{clearable:""},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},t._l(t.options,function(a,d){return e("t-option",{key:d,attrs:{value:a.value,label:a.label}},[t._v(" "+t._s(a.label)+" ")])}),1)],1),e("t-form-item",{attrs:{label:"\u5907\u6CE8",name:"mark"}},[e("t-textarea",{style:{width:"480px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",name:"description"},model:{value:t.textareaValue,callback:function(a){t.textareaValue=a},expression:"textareaValue"}})],1),e("t-form-item",{staticStyle:{float:"right"}},[e("t-button",{attrs:{variant:"outline"},on:{click:t.onClickCloseBtn}},[t._v("\u53D6\u6D88")]),e("t-button",{attrs:{theme:"primary",type:"submit"}},[t._v("\u786E\u5B9A")])],1)],1)],1)]),t.pagination.total>0&&!t.dataLoading?[e("div",{staticClass:"list-card-items"},[e("t-row",{attrs:{gutter:[16,16]}},t._l(t.productList.slice(t.pagination.pageSize*(t.pagination.current-1),t.pagination.pageSize*t.pagination.current),function(a){return e("t-col",{key:a.index,attrs:{lg:4,xs:6,xl:3}},[e("card",{staticClass:"list-card-item",attrs:{product:a},on:{"delete-item":t.handleDeleteItem,"manage-product":t.handleManageProduct}})],1)}),1)],1),e("div",{staticClass:"list-card-pagination"},[e("t-pagination",{attrs:{total:t.pagination.total,pageSizeOptions:[12,24,36],"page-size":t.pagination.pageSize},on:{"update:pageSize":function(a){return t.$set(t.pagination,"pageSize",a)},"update:page-size":function(a){return t.$set(t.pagination,"pageSize",a)},"page-size-change":t.onPageSizeChange,"current-change":t.onCurrentChange},model:{value:t.pagination.current,callback:function(a){t.$set(t.pagination,"current",a)},expression:"pagination.current"}})],1)]:t.dataLoading?e("div",{staticClass:"list-card-loading"},[e("t-loading",{attrs:{text:"\u52A0\u8F7D\u4E2D..."}})],1):t._e(),e("t-dialog",{attrs:{header:"\u786E\u8BA4\u5220\u9664\u6240\u9009\u4EA7\u54C1\uFF1F",body:t.confirmBody,visible:t.confirmVisible,onCancel:t.onCancel},on:{"update:visible":function(a){t.confirmVisible=a},confirm:t.onConfirmDelete}})],2)},D=[];l._withStripped=!0;const u={};var c=v(y,l,D,!1,V,"44518760",null,null);function V(t){for(let i in u)this[i]=u[i]}c.options.__file="src/pages/list/card/index.vue";var E=function(){return c.exports}();export{E as default};
