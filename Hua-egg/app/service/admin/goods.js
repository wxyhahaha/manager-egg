'use strict';

const Service = require('egg').Service;
const BaseSrvice = require('../base.js')
class GoodsService extends BaseSrvice {
  async fitchData(options) {
    let { app } = this;
    let data =  await app.model.Goods.findAll(options)

    let limit = options.limit
    Object.assign(options, {
        limit:undefined,
        offset:undefined,
        attributes:undefined
    })
    let { totalRow, totalPage } =await this.getCount(app.model.Goods, options, limit)
    console.log(totalRow, totalPage )
    return{
        data,
        totalRow,
        totalPage
    }
  }
}

module.exports = GoodsService;
