const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Image = db.defineModel(app, 'image',{
        // imgId	自增P	必填
        // dataId	对象id	必填
        // imgPath	图片路径	必填
        // ownId	上传者的id
        dataId:{type:STRING, allowNull:false},
        imgPath:STRING,
        ownId:STRING
    })
    return Image
}