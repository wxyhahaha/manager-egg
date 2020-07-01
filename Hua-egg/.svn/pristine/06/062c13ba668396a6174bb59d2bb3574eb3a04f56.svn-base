'use strict';

const Controller = require('egg').Controller;
const captchapng = require('captchapng')
class CaptchaController extends Controller {
  async captcha(){   
    let { ctx } = this
    let captcha = parseInt(Math.random()*9000 + 1000)
    let codePng = new captchapng(80, 30, captcha)
    codePng.color(112,128,144)
    codePng.color(230,230,250)
    let img = codePng.getBase64();
    let imgbase64 = new Buffer(img, 'base64')
      // 把验证码保存到session中,用于用户提交留言时校验
      ctx.session.captcha = captcha.toString();
      // console.log(ctx.session)
      ctx.cookies.set('key', ctx.session.captcha);
      ctx.type = 'image/png';
      ctx.body = {
        code:0,
        data:img
      }      
  }
}
 
module.exports = CaptchaController;
