const db = require("../db");

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Goods = db.defineModel(app, "goods", {
    // goodsId		自增P商品id		必填	 	 
    // goodsName 	商品名称			必填
    // goodsImg    	封面链接			必填
    // minPrice	最小价格			必填
    // orignPrice	原始价格			必填
    // stores		库存量			必填
    // isSale		是否上架(0,1)		必填
    // isBest		是否精品(0,1)		必填
    // isNew		是否新品	(0,1)		必填
    // isRecom		是否推荐(0,1)		必填
    // categoryId	分类id			必填
    // goodsDesc	商品描述
    // saleNum		总销量
    goodsID:{ type:INTEGER, unique:true, allowNull: false },
    goodsName:{ type:STRING, allowNull: false },
    goodsImg: { type:STRING, allowNull: false },
    goodsPics:INTEGER,
    minPrice: { type:INTEGER, defaultValue:0, allowNull: false },
    orignPrice: { type:INTEGER, defaultValue:0, allowNull: false },
    stores: { type:INTEGER, defaultValue:0, allowNull: false },
    isSale:{ type:INTEGER, defaultValue:0 },
    isBest:{ type:INTEGER, defaultValue:0 },
    isNew:{ type:INTEGER, defaultValue:0 },
    isRecom:{ type:INTEGER , defaultValue:0},
    categoryId:{ type:INTEGER, allowNull: false },
    goodsDesc:STRING,
    saleNum:{ type:STRING , defaultValue:0}
  });

  return Goods;
};