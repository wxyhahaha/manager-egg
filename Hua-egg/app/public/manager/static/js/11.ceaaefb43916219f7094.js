webpackJsonp([11],{"0MYI":function(t,a){},AWzI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("hxa0"),n={data:function(){return{searchData:{categoryId:void 0,catName:void 0,dateAdd:void 0,dateUpdate:void 0,page:1,pageSize:10},totalRow:void 0,loading:!0,columns12:[{title:"分类编号",slot:"categoryId"},{title:"分类名称",key:"catName"},{title:"封面",slot:"catImg"},{title:"增加时间",key:"dateAdd"},{title:"Action",slot:"action",width:150,align:"center"}],dataList:[],addressDefault:[{key:"是",value:0},{key:"否",value:1}]}},mounted:function(){this.fitchData()},methods:{show:function(t){this.$Modal.info({title:"用户信息",content:"Name："+this.dataList[t].name+"<br>Age："+this.dataList[t].age+"<br>Address："+this.dataList[t].address})},remove:function(t){var a=this;this.confirm("确定要删除？","删除用户后无法恢复",function(){var e=a.dataList[t].id;a.loading=!0,Object(i.c)(e).then(function(t){0==t.data.code&&(console.log(t),a.loading=!1,a.fitchData(),a.$Notice.success({title:"删除成功"}))}).catch(function(t){console.log(t)})})},pageChange:function(t){this.searchData.page=t,this.fitchData()},pageSizeChange:function(t){this.searchData.pageSize=t,this.fitchData()},fitchData:function(){var t=this,a=this.searchData;console.log(a),this.loading=!0,Object(i.a)(this.searchData).then(function(a){0==a.data.code?(t.loading=!1,console.log(a),t.totalRow=a.data.result.totalRow,t.dataList=a.data.result.data):t.$Loading.error()}).catch(function(a){t.$Loading.error(),console.log(a)})},timeChange:function(t){this.searchData.dateAdd=t[0],this.searchData.dateUpdate=t[1]},search:function(){this.fitchData()},confirm:function(t,a,e){var i=this;this.$Modal.confirm({title:t,content:a,onOk:function(){e()},onCancel:function(){i.$Message.info("取消")}})},addAddress:function(){this.$router.push({path:"/category/categoryList/add"})},upDateAddress:function(t){var a=this.dataList[t].id;this.$router.push({path:"/category/categoryList/add",query:{id:a}})}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"input_box"},[e("Input",{staticClass:"input",model:{value:t.searchData.categoryId,callback:function(a){t.$set(t.searchData,"categoryId",a)},expression:"searchData.categoryId"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("分类编号")])]),t._v(" "),e("Input",{staticClass:"input",model:{value:t.searchData.catName,callback:function(a){t.$set(t.searchData,"catName",a)},expression:"searchData.catName"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("分类名称")])]),t._v(" "),e("div",{staticClass:"Pick_box"},[e("label",{staticClass:"label",attrs:{for:""}},[t._v("增加时间")]),t._v(" "),e("DatePicker",{staticStyle:{width:"300px"},attrs:{type:"datetimerange",placeholder:"Select date and time"},on:{"on-change":t.timeChange}})],1)],1),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:t.search}},[t._v("查询")]),t._v(" "),e("Button",{attrs:{type:"success",icon:"ios-add"},on:{click:t.addAddress}},[t._v("添加")]),t._v(" "),e("br"),t._v(" "),e("Table",{staticClass:"ytable",attrs:{border:"",columns:t.columns12,data:t.dataList,loading:t.loading},scopedSlots:t._u([{key:"categoryId",fn:function(a){var i=a.row;return[e("strong",[t._v(t._s(i.categoryId))])]}},{key:"catImg",fn:function(t){var a=t.row;return[e("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:a.catImg,alt:""}})]}},{key:"action",fn:function(a){a.row;var i=a.index;return[e("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(a){return t.upDateAddress(i)}}},[t._v("编辑")]),t._v(" "),e("Button",{attrs:{type:"error",size:"small"},on:{click:function(a){return t.remove(i)}}},[t._v("删除")])]}}])}),t._v(" "),e("Page",{attrs:{total:t.totalRow,"page-size":10,"show-sizer":""},on:{"on-page-size-change":t.pageSizeChange,"on-change":t.pageChange}})],1)},staticRenderFns:[]};var o=e("VU/8")(n,s,!1,function(t){e("0MYI")},null,null);a.default=o.exports}});
//# sourceMappingURL=11.ceaaefb43916219f7094.js.map