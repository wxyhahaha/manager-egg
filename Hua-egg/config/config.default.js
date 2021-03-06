/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};
  //token密钥
  config.privateKey = 'wxyHua'
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551060316325_1651';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 数据库信息配置
  config.sequelize = {
    // 数据库类型
    dialect: 'sqlite',
    // // host
    // host: 'localhost',
    // // 端口号
    // port: '3306',
    // // 用户名
    // username: 'root',
    // // 密码
    // password: 'nodejs968174',
    // 数据库名
    storage: 'db.sqlite'
  };

  // add your config here
//管理员账号密码
config.adminUser = {
  username:'admin',
  password:'admin',
  roleId:0
}
config.middleware = [];
//多出来的配置==========
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['http://localhost:8080','http://localhost:8081']
};
config.cors = {
  enable: true,
  credentials: true, //允许浏览器设置cookie
  // origin: ['http://localhost:8080'], //注意由于设置了Access-Control-Allow-Credentials: true，因此必须设置Origin不能使用通配符(*)。
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
  return {
    ...config,
    ...userConfig,
  };
};
