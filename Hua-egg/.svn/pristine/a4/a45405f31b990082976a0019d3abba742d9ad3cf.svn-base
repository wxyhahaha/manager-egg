'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async list() {
    let { ctx, app, service } = this;
    let { Op } = this.app.Sequelize
    let { Sequelize } = app
    let { 
        id,
        categoryId, 
        catName,
        dateAdd,
        dateUpdate,
        pageSize,
        page
       } = ctx.request.body
    let where = { }
    id ? Object.assign(where,{ id:id }) : where
    categoryId ? Object.assign(where,{ categoryId:categoryId }) : where
    catName ? Object.assign(where,{ catName:catName }) : where
    dateAdd ? Object.assign(where,{ dateAdd:{ [Op.gt]:dateAdd } }) : where
    dateUpdate ? Object.assign(where,{ dateUpdate:{ [Op.lt]:dateUpdate } }) : where
   // ctx.helper.checkSeachData()
    let options = {
        where,
        offset:(page -1) * pageSize,
        limit:pageSize,
    }
    try{
       var data = await service.admin.category.fitchData(options);
      //  var pCatName = await service.admin.category.fitchData(options);
           ctx.body={
        code:0,
        msg:'success',
        result:data,
       //  count:count
    }
    }catch(e){
        ctx.logger.info('查询失败',e)
        ctx.body={
          code:400,
          msg:'fail',
         //  count:count
      }
    }

  }
  async insert() {
    const { ctx, app } = this;
    let data = ctx.request.body;
    let categoryId = ctx.helper.getRandomId(6)
    let result = Object.assign({ 'categoryId' : categoryId }, data)
    try{
      await app.model.Category.create(result)
      ctx.body = {      
          code:0,
          'result':'success',
        
      };
    }
    catch(e){
        ctx.logger.error('添加失败',e)
        ctx.body = {
              code:400,
              'result':'fail',
          };
    }
  }
  async update() {
    let { app, ctx } = this;
    let {
        id,
        pid,
        catName,
        catImg
    } = ctx.request.body
    let data = {
        pid,
        catName,
        catImg
    }
    let options = { 
       where: { id }
    }
    let obj = ctx.helper.checkSeachData(data)
    await app.model.Category.update(obj,options)
    ctx.body = {
      code:0,
      msg:'success'
    }
  }
  async delete() {
    let { app, ctx } = this;
    let { id } = ctx.request.body
    let where = { id }
    await app.model.Category.destroy({ where })
    ctx.body = {
       code:0,
       msg:'success'
     }
  }
}

module.exports = CategoryController;
