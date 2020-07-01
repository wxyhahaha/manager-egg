'use strict';

const Controller = require('egg').Controller;

class DecodepwdController extends Controller {
  async decode() {
    let { app, ctx } = this;
    let {
        username,
        mobilePhone
    } = ctx.request.body
    let options = { 
       where: { mobilePhone,username }
    }
    try{
        let user = await app.model.User.findOne(options)
        let password = user.password
        let privateKey = this.app.config.privateKey
        password = await ctx.helper.decodePassword(password,privateKey)
        ctx.body = {
            code:0,
            password,
            msg:'请求成功'
        };
    }catch(e){
        ctx.logger.error('查询失败，可能输入用户名非法',e)
        ctx.body ={ code:400,msg:'fail' }
    }

  }
}

module.exports = DecodepwdController;
