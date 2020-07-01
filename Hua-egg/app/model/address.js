const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Address = db.defineModel(app, 'address',{
        // id		自增	
        // userId 		
        // userName	收获人姓名
        // userPhone	收获电话	
        // areaIdPath	区域id路径
        // userAddress	详细地址
        // isDefault	是否默认地址
        userId:{type:STRING,allowNull:false},
        addressId:{type:INTEGER,allowNull:false},
        userName:STRING,
        userPhone:STRING,
        areaIdPath:STRING,
        userAddress:STRING,
        isDefault:{type:INTEGER, defaultValue:0}
    })
    return Address
}
    