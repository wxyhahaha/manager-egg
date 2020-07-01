'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    
  async verifyUser(username,password, roleId) {
    let { app, ctx } = this;
    let options={
        where:{
            username:username,
            roleId:roleId
        }
    }
    let result = await app.model.User.findOne(options)
    return { isPass:password === result.password,user: result}
  }
  async updateToken(username, token){
    let { app, ctx } = this
    await app.model.User.update(
      { token:token },
      { where: { username:username } }
    )
  }
}

module.exports = LoginService;
