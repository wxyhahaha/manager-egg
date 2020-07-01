'use strict';
const Controller = require('egg').Controller;
class GoodsController extends Controller {
 async list(){ 
     let { ctx, app, service } = this;
     let { Op } = this.app.Sequelize
     let { Sequelize } = app
     let { 
          id,
          goodsID, 
          goodsName,        
          isRecom,
          isBest,
          isNew,
          categoryId, 
          dateAdd,
          dateUpdate,
          priceOrder,
          price1,
          price2,   
          pageSize,
          page
        } = ctx.request.body
        // console.log(typeof price1, typeof price2)
       let isSale = 1
       let order = { }
       let priceCondition = ['minPrice','DESC']
       let a = priceOrder 
      //  console.log(a)
       if(a === -1) priceCondition = ['minPrice','DESC']
       if(a === 1 ) priceCondition = ['minPrice','ASC']
       if(a === 0 || a === undefined) {
         order = { 'order':[['dateAdd','DESC'],['goodsName']] }
       }
       if(a === -1 || a=== 1){
         order = { 'order':[ priceCondition,['goodsName']] }
       }
       
     let searchData = { 
      id,          
      goodsID, 
      isSale,
      goodsName,        
      isRecom,
      isBest,
      isNew,
      categoryId, 
    }
    let where = ctx.helper.checkSeachData(searchData)
    dateAdd ? Object.assign(where,{ dateAdd:{ [Op.gt]:dateAdd } }) : where
    dateUpdate ? Object.assign(where,{ dateUpdate:{ [Op.lt]:dateUpdate } }) : where
    price1 ? Object.assign(where,{ minPrice:{ [Op.gt]:price1 } }) : where
    price2 ? Object.assign(where,{ minPrice:{ [Op.lt]:price2 } }) : where
     let options = {
         where,
         offset:(page -1) * pageSize,
         limit:pageSize,
         
     }
     Object.assign(options, order)
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
module.exports = GoodsController