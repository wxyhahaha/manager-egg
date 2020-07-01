const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Order = db.defineModel(app, 'order',{
        // orderNo 	订单号
        // orderStatus	订单状态		-3:用户拒收 -2:未付款的订单 -1：用户取消 0:待发货 1:配送中 2:用户确认收货
        // goodsMoney	商品总金额	未进行折扣
        // deliverType	收货方式		0:送货上门 1:自提
        // deliverMoney	运费		
        // totalMoney	订单总额		包括运费
        // realTotalMoney	实际订单总金额	进行各种折扣之后的金额
        // payType		支付方式		0:货到付款 1:在线支付
        // isPay		是否支付
        // needPay		需交费用
        // userName	收货人名称
        // userAddress	收件人地址
        // userPhone	收件人手机
        // mark		订单备注
        orderNo:{ type:INTEGER, unique:true, allowNull: false },
        userId: INTEGER,
        orderStatus:INTEGER,
        goodsMoney:INTEGER,
        deliverType:INTEGER,
        goodsNum:INTEGER,
        deliverMoney:INTEGER,
        realTotalMoney:INTEGER,
        payType:INTEGER,
        isPay:INTEGER,   
        needPay:INTEGER,
        userName:STRING,
        userPhone:STRING,   
        userAddress:STRING,
        mark:STRING
    })
    return Order
}
    