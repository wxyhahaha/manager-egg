'use strict';
/**
 * goodsMoney 一种商品的总金额
 * goodsInfo =[{goodsID,goodsNum,goodsPrice,goodsName,goodsImg}] 用于计算总额，和存进订单商品表
 */
const Controller = require('egg').Controller;

class OrderController extends Controller {

  async create() {
    const { ctx, app, service } = this;
    let { Op } = this.app.Sequelize
    let { goodsInfo, userName, userAddress, userPhone, mark } = ctx.request.body;
    let obj = { userName, userAddress, userPhone, mark }
    let userId = app.config.userId
    let orderNo = ctx.helper.getOrderNum()
    let orderStatus = -2
    let deliverMoney = 0
    let result = Object.assign({userId ,orderNo,orderStatus,deliverMoney}, obj)
    //批量查询 计算订单总额
    let goodsIdArr = []
    let countTotalMoney = 0;
    let turlyTotalMoney = 0;
    let goodsNum = 0
    for(let k of goodsInfo){
        goodsIdArr.push(k.goodsID) 
        Object.assign(k,{ orderNo })
        countTotalMoney +=  parseInt(k.goodsPrice)*k.goodsNum.toFixed(2)    
        goodsNum +=k.goodsNum 
     }
    let where = {
        goodsID:{ [Op.in]:goodsIdArr}
    }
    let options = {
            where,
            offset:0,
            limit:10000,
    }
    try{
        //查询订单中的商品
        let data = await service.admin.goods.fitchData(options);
        // 查询的结果data
        for(let k of data.data){
            for(let i of goodsInfo){
                if(k.goodsID == i.goodsID){
                    turlyTotalMoney += parseInt(k.minPrice )* i.goodsNum.toFixed(2)       
                }        
            }         
        }
        // 订单
        let flag = true
        countTotalMoney === turlyTotalMoney 
        ? flag = true 
        : flag = false
        if(!flag) return ctx.body ={ code:300,msg:'非法篡改',data}
        Object.assign(result,
            { goodsNum }, 
            { goodsMoney :turlyTotalMoney },
            { needPay:turlyTotalMoney + deliverMoney},
            { realTotalMoney:turlyTotalMoney + deliverMoney },          
            )
    }catch(e){  
        ctx.body={ code:404, 'result':'fail' }; 
        ctx.logger.error('查询失败，可能不存在商品',e) 
    }      
    try{
        //如果没非法，则创建订单
      await app.model.Order.create(result)
      await app.model.Ordergoods.bulkCreate(goodsInfo)
      ctx.body = {
          code:0,
          'result':'success',
      };
    }catch(e){
        ctx.logger.error('添加失败',e)
        ctx.body = {
              code:400,
              'result':'fail'
          };
    }
  }
}

module.exports = OrderController;
