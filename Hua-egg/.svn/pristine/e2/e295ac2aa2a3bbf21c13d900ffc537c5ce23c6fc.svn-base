const db = require('../db')
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize
    const Category = db.defineModel(app, 'category',{
        // categoryid	自增P分类id	必填
        // pid		父id		必填
        // catName		分类名称		必填 
          // catImg		分类图片
        categoryId:{type:INTEGER,unique:true,allowNull:false},
        pid:INTEGER,
        catNo:STRING,
        catName:{ type: STRING,allowNull:false},
        catImg:STRING
    })
    return Category
}