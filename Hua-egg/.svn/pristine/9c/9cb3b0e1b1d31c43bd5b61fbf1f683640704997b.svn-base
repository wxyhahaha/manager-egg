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
    // id ? Object.assign(where,{ id:id }) : where
    // categoryId ? Object.assign(where,{ categoryId:categoryId }) : where
    // catName ? Object.assign(where,{ catName:catName }) : where
   // ctx.helper.checkSeachData()
    let options = {
        where,
        offset:(page -1) * pageSize,
        limit:pageSize,
    }
    try{
       var data = await service.admin.category.fitchData(options);
        ctx.body={
        code:0,
        msg:'success',
        data,
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


}

module.exports = CategoryController;
