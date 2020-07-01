'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    let { ctx, app, service } = this;
    let { Op } = this.app.Sequelize
    let { Sequelize } = app
    let { 
        userId, 
        username,
        name,
        province,
        city,
        mobilePhone,
        dateAdd,
        dateUpdate,
        pageSize,
        page
       } = ctx.request.body
      //  console.log(pageSize,page)
    let roleId = '1'
    let searchData = {
      userId, 
      username,
      name,
      province,
      city,
      mobilePhone,
      roleId
    }
    
    let where = ctx.helper.checkSeachData(searchData)
    // console.log(where)
    dateAdd ? Object.assign(where,{ dateAdd:{ [Op.gt]:dateAdd } }) : where
    dateUpdate ? Object.assign(where,{ dateUpdate:{ [Op.lt]:dateUpdate } }) : where
   // ctx.helper.checkSeachData()
    let options = {
        where,
        offset:(page -1) * pageSize,
        limit:pageSize,
    }
    // console.log('optionsoptionsoptionsoptionsoptionsoptions',options)
    try{
       var data = await service.admin.user.fitchData(options);
       ctx.body={
        code:0,
        msg:'success',
        result:data ,
       //count:count
    }
    }catch(e){
        ctx.logger.info('查询失败',e)
        ctx.body={
          code:400,
          msg:'fail',
         //count:count
      }
    }

  }
  async insert() {
    const { ctx, app } = this;
    let data = ctx.request.body;
    let userId = ctx.helper.getRandomId(6)
    let result = Object.assign({ 'userId' : userId, 'roleId':'1'}, data)
    try{
      await app.model.User.create(result)
      ctx.body = {
        'data':{
          code:0,
          'result':'success',
        }
      };
    }
    catch(e){
        ctx.logger.error('添加失败',e)
        ctx.body = {
            'data':{
              code:400,
              'result':'fail',
            }
          };
    }
  }
  // async update() {
  //   let { app, ctx } = this;
  //   let {
  //       orderNo,
  //       orderStatus
  //   } = ctx.request.body
  //   let data = {
  //     orderStatus
  //   }
  //   let options = { 
  //      where: { orderNo }
  //   }
  //   let obj = ctx.helper.checkSeachData(data)
  //   await app.model.Order.update(obj,options)
  //   ctx.body = {
  //     code:0,
  //     msg:'success'
  //   }
  // }
  async delete() {
    let { app, ctx } = this;
    let { id } = ctx.request.body
    let where = { id }
    await app.model.User.destroy({ where })
    ctx.body = {
       code:0,
       msg:'success'
     }
  }
}

module.exports = UserController;
