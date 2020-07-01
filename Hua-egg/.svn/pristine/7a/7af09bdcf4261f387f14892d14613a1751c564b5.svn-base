'use strict';
const Controller = require('egg').Controller;
class SearchGoodsController extends Controller {
 async list(){ 
     let { ctx, app, service } = this;
     let { Op } = this.app.Sequelize
     let { Sequelize } = app
     let { 
          goodsName,        
          pageSize,
          page
        } = ctx.request.body
    let isSale = 1  
     let searchData = { 
      isSale,
      goodsName,        
    }
    let where = ctx.helper.checkSeachData(searchData)
    let nameWhere = { 'goodsName': {$like:'%' + goodsName + '%'} }
    Object.assign(where,nameWhere )
     let options = {
         where,
         offset:(page -1) * pageSize,
         limit:pageSize,
         
     }
     try{
        var data = await service.admin.goods.fitchData(options);
        data.totalRow === 0
        ? ctx.body={ code:404,msg:'暂无数据', data } 
        : ctx.body={ code:0,msg:'success', data } 
        
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
module.exports = SearchGoodsController