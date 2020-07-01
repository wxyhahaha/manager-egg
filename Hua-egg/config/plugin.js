'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
//   cors:{
//     enable: true,
//     package: 'egg-cors',
//   },
//   sequelize : {
//     enable: true,
//     package: 'egg-sequelize'
//   }
// };
exports.cors = {
  enable: true,
  package: 'egg-cors',
}

// orm框架，把数据库操作映射到对象上
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};

// 路由插件，可以用namespace增加路由前缀之类
// https://www.npmjs.com/package/egg-router-plus
exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus'
}


exports.security = {
  enable: false,
};