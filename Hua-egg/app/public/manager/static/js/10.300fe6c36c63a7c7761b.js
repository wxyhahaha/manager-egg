webpackJsonp([10],{FLxN:function(t,a){},sTZ8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("vLgD");var n={data:function(){return{searchData:{userId:void 0,userName:void 0,addressId:void 0,isDefault:void 0,mobilePhone:void 0,dateAdd:void 0,dateUpdate:void 0,page:1,pageSize:10},totalRow:void 0,loading:!0,columns12:[{title:"用户编号",slot:"userId"},{title:"用户名",key:"username"},{title:"地址编号",key:"addressId"},{title:"是否默认",slot:"isDefault"},{title:"手机号码",key:"mobilePhone"},{title:"详细地址",key:"userAddress"},{title:"增加时间",key:"dateAdd"},{title:"Action",slot:"action",width:150,align:"center"}],dataList:[],addressDefault:[{key:"是",value:1},{key:"否",value:0}]}},mounted:function(){this.fitchData()},methods:{show:function(t){this.$Modal.info({title:"用户信息",content:"Name："+this.dataList[t].name+"<br>Age："+this.dataList[t].age+"<br>Address："+this.dataList[t].address})},remove:function(t){var a=this;this.confirm("确定要删除？","删除用户后无法恢复",function(){var e=a.dataList[t].id;a.loading=!0,function(t){return Object(s.a)({url:"manager/address/del",method:"post",data:{id:t}})}(e).then(function(t){0==t.data.code&&(a.loading=!1,a.fitchData(),a.$Message.success("删除成功"))}).catch(function(t){console.log(t)})})},pageChange:function(t){this.searchData.page=t,this.fitchData()},pageSizeChange:function(t){this.searchData.pageSize=t,this.fitchData()},fitchData:function(){var t,a=this;this.loading=!0,(t=this.searchData,Object(s.a)({url:"manager/address/list",method:"post",data:t})).then(function(t){0==t.data.code?(a.loading=!1,console.log(t),a.totalRow=t.data.result.totalRow,a.dataList=t.data.result.data):a.$Loading.error()}).catch(function(t){a.$Loading.error(),console.log(t)})},timeChange:function(t){this.searchData.dateAdd=t[0],this.searchData.dateUpdate=t[1]},search:function(){this.fitchData()},confirm:function(t,a,e){var s=this;this.$Modal.confirm({title:t,content:a,onOk:function(){e()},onCancel:function(){s.$Message.info("取消")}})},addAddress:function(){this.$router.push({path:"/user/addressList/add"})}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"input_box"},[e("Input",{staticClass:"input",model:{value:t.searchData.userId,callback:function(a){t.$set(t.searchData,"userId",a)},expression:"searchData.userId"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("用户编号")])]),t._v(" "),e("Input",{staticClass:"input",model:{value:t.searchData.userName,callback:function(a){t.$set(t.searchData,"userName",a)},expression:"searchData.userName"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("用户名")])]),t._v(" "),e("Input",{staticClass:"input",model:{value:t.searchData.addressId,callback:function(a){t.$set(t.searchData,"addressId",a)},expression:"searchData.addressId"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("地址编号")])]),t._v(" "),e("div",{staticClass:"Pick_box"},[e("label",{staticClass:"label",attrs:{for:""}},[t._v("是否默认")]),t._v(" "),e("Select",{staticStyle:{width:"100px"},model:{value:t.searchData.isDefault,callback:function(a){t.$set(t.searchData,"isDefault",a)},expression:"searchData.isDefault"}},t._l(t.addressDefault,function(a){return e("Option",{key:a.value,attrs:{value:a.value}},[t._v(t._s(a.key))])}),1)],1),t._v(" "),e("Input",{staticClass:"input",model:{value:t.searchData.mobilePhone,callback:function(a){t.$set(t.searchData,"mobilePhone",a)},expression:"searchData.mobilePhone"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("手机号码")])]),t._v(" "),e("div",{staticClass:"Pick_box"},[e("label",{staticClass:"label",attrs:{for:""}},[t._v("增加时间")]),t._v(" "),e("DatePicker",{staticStyle:{width:"300px"},attrs:{type:"datetimerange",placeholder:"Select date and time"},on:{"on-change":t.timeChange}})],1)],1),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("Button",{attrs:{type:"success",icon:"ios-add"},on:{click:t.addAddress}},[t._v("添加")]),t._v(" "),e("br"),t._v(" "),e("Table",{staticClass:"ytable",attrs:{border:"",columns:t.columns12,data:t.dataList,loading:t.loading},scopedSlots:t._u([{key:"userId",fn:function(a){var s=a.row;return[e("strong",[t._v(t._s(s.userId))])]}},{key:"isDefault",fn:function(t){return[1==t.row.isDefault?e("Icon",{attrs:{type:"ios-checkmark-circle",color:"#19BE6B",size:"22"}}):e("Icon",{attrs:{type:"ios-close-circle",color:"#F16A43",size:"22"}})]}},{key:"action",fn:function(a){a.row;var s=a.index;return[e("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(a){return t.show(s)}}},[t._v("查看")]),t._v(" "),e("Button",{attrs:{type:"error",size:"small"},on:{click:function(a){return t.remove(s)}}},[t._v("删除")])]}}])}),t._v(" "),e("Page",{attrs:{total:t.totalRow,"page-size":10,"show-sizer":""},on:{"on-page-size-change":t.pageSizeChange,"on-change":t.pageChange}})],1)},staticRenderFns:[]};var o=e("VU/8")(n,i,!1,function(t){e("FLxN")},null,null);a.default=o.exports}});
//# sourceMappingURL=10.300fe6c36c63a7c7761b.js.map