'use strict';

const Service = require('egg').Service;
const BaseService = require('../base.js')
class CategoryService extends BaseService {
    async fitchData(options) {
        let { app } = this;
        let data =  await app.model.Category.findAll(options)
        let limit = options.limit
        Object.assign(options, {
            limit:undefined,
            offset:undefined,
            attributes:undefined
        })
        let { totalRow, totalPage } =await this.getCount(app.model.Category, options, limit)
        console.log(totalRow, totalPage )
        return{
            data,
            totalRow,
            totalPage
        }
    }
}

module.exports = CategoryService;
