webpackJsonp([10],{"+skl":function(n,e){},"2JPS":function(n,e,t){var o=t("vzB3");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("096b4460",o,!0,{})},"6D/Y":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),i={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"app",components:{},data:function(){return{}},mounted:function(){this.get()},methods:{get:function(){}}},i,!1,function(n){t("2JPS")},null,null).exports,a=t("/ocq");o.default.use(a.a);var c,s=new a.a({routes:[{path:"/",name:"Index",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"8/c5"))},redirect:"/home",children:[{path:"/home",name:"Home",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"OC6q"))}},{path:"/good",name:"Good",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"kvb4"))}},{path:"/good/goodsdetali",name:"GoodDetail",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"N3Qb"))}},{path:"/order",name:"Order",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"TOFA"))}},{path:"/cartlist",name:"Cartlist",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"FoDe"))}}]},{path:"/login",name:"Login",component:function(){return t.e(4).then(t.bind(null,"fAfb"))}},{path:"/register",name:"Register",component:function(){return t.e(6).then(t.bind(null,"2WH3"))}}]}),u=t("BTaQ"),l=t.n(u),d=t("NYxO"),f=t("bOdI"),A=t.n(f),p=t("jK9M"),m=(c={},A()(c,"ADD_CART",function(n,e){var t=e.goodsID,o=e.goodsPrice,i=e.goodsName,r=e.goodsImg,a=e.goodsNum,c=n.cartList,s={goodsID:t,goodsPrice:o,goodsName:i,goodsImg:r,goodsNum:a},u=!0;c.length&&c.forEach(function(n){n.goodsID==s.goodsID&&(u=!1,n.goodsNum+=s.goodsNum)}),c.length&&!u||c.push(s),n.cartList=c,Object(p.d)("cartList",c)}),A()(c,"INIT_CART",function(n,e){console.log("sdasdsad",e);var t=JSON.parse([Object(p.a)(e)])||[];n.cartList=t}),A()(c,"DEL_CART",function(n,e){var t;t=n.cartList.filter(function(n){if(n.goodsID!=e)return!0}),n.cartList=t,Object(p.d)("cartList",t)}),A()(c,"EIDT_CART",function(n,e){var t=e.goodsNum,o=e.goodsID,i=n.cartList;i&&i.forEach(function(n){n.goodsID==o&&(n.goodsNum=t)}),n.cartList=i,Object(p.d)("cartList",i)}),A()(c,"SHOW_ADDRESSBOX",function(n,e){n.showAddress=!e}),c);o.default.use(d.a);var g=new d.a.Store({state:{loginStatus:1,userInfo:{},cartList:[],showAddress:!1},mutations:m,getters:{getCartList:function(n){return n.cartList}}}),B=(t("+skl"),t("6D/Y"),t("mtWM")),b=t.n(B),h=t("cTzj"),C=t.n(h);o.default.use(C.a,{loading:"./static/loading2.gif",preLoad:1}),o.default.config.productionTip=!1,o.default.use(l.a),o.default.prototype.$axios=b.a,o.default.prototype.$axios.defaults.withCredentials=!0,s.beforeEach(function(n,e,t){l.a.LoadingBar.start(),t()}),s.afterEach(function(n){l.a.LoadingBar.finish()}),new o.default({el:"#app",router:s,store:g,components:{App:r},template:"<App/>"})},jK9M:function(n,e,t){"use strict";t.d(e,"d",function(){return r}),t.d(e,"a",function(){return a}),t.d(e,"c",function(){return c}),t.d(e,"b",function(){return s});var o=t("mvHQ"),i=t.n(o),r=function(n,e){n&&("string"!=typeof e&&(e=i()(e)),window.localStorage.setItem(n,e))},a=function(n){if(n)return window.localStorage.getItem(n)},c=function(n){n&&window.localStorage.removeItem(n)},s=function(n){if(n)return window.localStorage.getItem(n)}},vzB3:function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\nbody{\n  background-color: #ededed\n}\n#app>div{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;  \n  /* overflow-x: auto */\n}\n[v-cloak] {\n    display: none;\n}\n","",{version:3,sources:["H:/我的毕设/Hua-vue/src/App.vue"],names:[],mappings:";AACA;EACE,yBAAyB;CAC1B;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,sBAAsB;CACvB;AACD;IACI,cAAc;CACjB",file:"App.vue",sourcesContent:["\nbody{\n  background-color: #ededed\n}\n#app>div{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;  \n  /* overflow-x: auto */\n}\n[v-cloak] {\n    display: none;\n}\n"],sourceRoot:""}])}},["NHnr"]);
//# sourceMappingURL=app.671c2ed2239e173b9173.js.map