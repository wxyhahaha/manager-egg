'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  let managerRouter = app.router.namespace(
    '/manager',
    app.middleware.auth()
  )
  let huaRouter = app.router.namespace(
    '/hua',
    app.middleware.auth()
  )
const { router, controller } = app;
let { goods, order, login, category, address, user, file, image, captcha } =  controller.admin

//后台开放路由
app.router.post('/manager/admin/getCaptcha', login.captcha)
// app.router.post('/manager/admin/getCaptcha', captcha.captcha)
app.router.post('/manager/upload', file.get);
app.router.post('/manager/admin/login', login.login);

//后台受控路由
//商品
managerRouter.post('/goods/insert', goods.insert);
managerRouter.post('/goods/list', goods.list);
managerRouter.post('/goods/set', goods.update);
managerRouter.post('/goods/del', goods.delete);
//商品分类
managerRouter.post('/category/insert', category.insert);
managerRouter.post('/category/list', category.list);
managerRouter.post('/category/set', category.update);
managerRouter.post('/category/del', category.delete);
//订单
managerRouter.post('/order/insert', order.insert);
managerRouter.post('/order/list', order.list);
managerRouter.post('/order/set', order.update);
managerRouter.post('/order/del', order.delete);
//地址
managerRouter.post('/address/insert', address.insert);
managerRouter.post('/address/list', address.list);
managerRouter.post('/address/set', address.update);
managerRouter.post('/address/del', address.delete);
//用户
managerRouter.post('/user/insert', user.insert);
managerRouter.post('/user/list', user.list);
managerRouter.post('/user/del', user.delete);
//图片
managerRouter.post('/image/insert', image.insert);
managerRouter.post('/image/list', image.list);
managerRouter.post('/image/set', image.update);
managerRouter.post('/image/del', image.delete);

//商城受控路由

//订单
huaRouter.post('/order/create', controller.huafront.order.create)
//更改密码updatePwd
huaRouter.post('/user/updatePwd', controller.huafront.user.updatePwd)
//修改用户信息updateInfo
huaRouter.post('/user/editInfo', controller.huafront.user.updateInfo)

//地址
huaRouter.post('/address/insert', controller.huafront.address.insert);
huaRouter.post('/address/list', controller.huafront.address.list);
huaRouter.post('/address/set', controller.huafront.address.update);
huaRouter.post('/address/del', controller.huafront.address.delete);
huaRouter.post('/address/defaultaddress', controller.huafront.address.defaultAddress);


//商城开放路由
//注册
app.router.post('/hua/user/register', controller.huafront.user.insert)
//找回密码
app.router.post('/hua/findPwd', controller.huafront.decodepwd.decode)
app.router.post('/hua/getCaptcha', controller.huafront.login.captcha)
app.router.post('/hua/login', controller.huafront.login.login)
//搜索商品
app.router.post('/hua/searchGoods', controller.huafront.searchgoods.list)
//商品
app.router.post('/hua/good/list', controller.huafront.goods.list)
//商品分类
app.router.post('/hua/category/list', controller.huafront.category.list);
};