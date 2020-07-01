'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
    async insert(){ 
        const { ctx, app } = this;
        let { userName, userPhone, areaIdPath, userAddress, isDefault } = ctx.request.body;
        let userId = app.config.userId
        let addressId = ctx.helper.getRandomId(6)
        // console.log('app.config.userId',app.config.userId)
        let searchData = { userId,addressId, userName, userPhone, areaIdPath, userAddress, isDefault }
        let obj = ctx.helper.checkSeachData(searchData)
        
        try{
          
          if(parseInt(isDefault) === 1 ) await app.model.Address.update({ isDefault:0 },{ where: { isDefault:1 } })
          await app.model.Address.create(obj)
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
                }
        }
      }
     async list(){ 
         let { ctx, app, service } = this;
         let { Op } = this.app.Sequelize
         let { Sequelize } = app
         let { 
          // userId,
             userName,
             isDefault,
             dateAdd,
             dateUpdate,
             pageSize,
             page
            } = ctx.request.body
        let userId = app.config.userId
        // console.log("listlistapp.config.userId",app.config.userId)
        let searchData = {             
          userId, 
        }

        let where = ctx.helper.checkSeachData(searchData)
        // ctx.helper.checkSeachData()
         let options = {
             where,
             offset:(page -1) * pageSize,
             limit:pageSize,
             'order':[['dateAdd','DESC'],['userName']]
         }
         try{
            var data = await service.admin.address.fitchData(options);
         }catch(e){
             ctx.logger.info('查询失败',e)
         }
         ctx.body={
             code:0,
             msg:'success',
             data,
            //  count:count
         }
         
      }
     async update(){ 
       let { app, ctx } = this;
       let {
        id,
        userName,
        isDefault,
        userAddress,
        userPhone
       } = ctx.request.body
       let userId = app.config.userId
       let data = {
        userName,
        isDefault,
        userAddress,
        userPhone
       }
       let options = { 
          where: { id }
       }
       let obj = ctx.helper.checkSeachData(data)
       if(parseInt(isDefault) === 1 ) await app.model.Address.update({ isDefault:0 },{ where: { isDefault:1 } })
       await app.model.Address.update(obj,options)
       ctx.body = {
         code:0,
         msg:'success'
       }
      }
     async delete(){ 
       let { app, ctx } = this;
       let { id } = ctx.request.body
       let where = { id }
       await app.model.Address.destroy({ where })
       ctx.body = {
          code:0,
          msg:'success'
        }
      }
     async defaultAddress(){
         let { app, ctx } = this
         let { isDefault, id } = ctx.request.body
        let userId = app.config.userId
        let where = {  }
        if(parseInt(isDefault) === 1 ) await app.model.Address.update({ isDefault:0 },{ where: { isDefault:1 } })
        await app.model.Address.update({ isDefault },{ where: { id } })
        ctx.body = {
            code:0,
            msg:'success'
          }
    }
}

module.exports = AddressController;
