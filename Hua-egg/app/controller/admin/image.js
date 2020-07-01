'use strict';

const Controller = require('egg').Controller;

class ImageController extends Controller {
  // imgId:{type:STRING,unique:true,allowNull:false},
  // dataId:{type:STRING, allowNull:false},
  // imgPath:STRING,
  // ownId:STRING
    async insert(){ 
        const { ctx, app } = this;
        let { dataId, imgPath } = ctx.request.body;
        // console.log(ctx.request.body)
        // let obj = ctx.helper.checkSeachData(searchData)
        try{
          // await app.model.Image.create(obj)
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
     async list(){ 
         let { ctx, app, service } = this;
         let { Op } = this.app.Sequelize
         let { Sequelize } = app
         let { dataId  } = ctx.request.body
        let searchData = {  dataId }

        let where = ctx.helper.checkSeachData(searchData)
        // ctx.helper.checkSeachData()
         let options = {
             where,
             offset:(page -1) * pageSize,
             limit:pageSize,
         }
         try{
            var data = await service.admin.image.fitchData(options);
         }catch(e){
             ctx.logger.info('查询失败',e)
         }
         ctx.body={
             code:0,
             msg:'success',
             result:data,
            //  count:count
         }
         
      }
     async update(){ 
       let { app, ctx } = this;
       let {
        dataId,
        imgPath,
        id
       } = ctx.request.body
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
       await app.model.Image.update(obj,options)
       ctx.body = {
         code:0,
         msg:'success'
       }
      }
     async delete(){ 
       let { app, ctx } = this;
       let { id } = ctx.request.body
       let where = { id }
       await app.model.Image.destroy({ where })
       ctx.body = {
          code:0,
          msg:'success'
        }
      }
}

module.exports = ImageController;
