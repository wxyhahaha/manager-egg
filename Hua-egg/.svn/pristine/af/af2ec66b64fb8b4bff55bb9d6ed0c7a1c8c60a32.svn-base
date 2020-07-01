'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
 async insert(){ 
    const { ctx, app } = this;
    let data = ctx.request.body;
    let goodsID = ctx.helper.getRandomId(6)
    let result = Object.assign({ 'goodsID' : goodsID }, data)
    
    try{
      await app.model.Goods.create(result)
      ctx.body = {
          code:0,
          'result':'success',
      };
    }
    catch(e){
        ctx.logger.error('添加失败',e)
        ctx.body = {
              code:400,
              'result':'fail'
          };
    }
  }
 async list(){ 
     let { ctx, app, service } = this;
     let { Op } = this.app.Sequelize
     let { Sequelize } = app
     let { 
          id,
          goodsID, 
          goodsName,        
          isRecom,
          isSale,
          categoryId, 
          dateAdd,
          dateUpdate,
          pageSize,
          page
        } = ctx.request.body
     let searchData = { 
      id,          
      goodsID, 
      isSale,
      goodsName,        
      isRecom,
      categoryId, 
      dateAdd:{  [Op.gt]:dateAdd },
      dateUpdate:{ [Op.lt]:dateUpdate  }
    }
    let where = ctx.helper.checkSeachData(searchData)
     let options = {
         where,
         offset:(page -1) * pageSize,
         limit:pageSize,
         'order':[['dateAdd','DESC'],['goodsName']]
     }
     try{
        var data = await service.admin.goods.fitchData(options);

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
 async update(){ 
   let { app, ctx } = this;
   let {
     id,
    goodsID,
    goodsName,
    goodsImg,
    goodsPics,
    minPrice,
    orignPrice,
    stores,
    isSale,
    isBest,
    isNew,
    isRecom,
    categoryId,
    goodsDesc,
    saleNum,
    dateAdd,
    dateUpdate
   } = ctx.request.body
   let data = {
    goodsName,
    goodsImg,
    goodsPics,
    minPrice,
    orignPrice,
    stores,
    isSale,
    isBest,
    isNew,
    isRecom,
    categoryId,
    goodsDesc,
    saleNum,
    dateAdd,
    dateUpdate
   }
   let options = { 
      where: { id }
   }
   let obj = ctx.helper.checkSeachData(data)
   await app.model.Goods.update(obj,options)
   ctx.body = {
     code:0,
     msg:'success'
   }
  }
 async delete(){ 
   let { app, ctx } = this;
   let { id } = ctx.request.body
   let where = { id }
   await app.model.Goods.destroy({ where })
   ctx.body = {
      code:0,
      msg:'success'
    }
  }
}
module.exports = GoodsController