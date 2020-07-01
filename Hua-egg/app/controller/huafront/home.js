'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log('请求成功')
    const { ctx } = this;
    ctx.body = {
      'data':{
        'result':'请求成功'
      }
    };
  }
}

module.exports = HomeController;
