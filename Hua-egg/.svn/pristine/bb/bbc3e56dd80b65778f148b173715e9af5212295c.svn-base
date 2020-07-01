'use strict';

const Service = require('egg').Service;
const BaseService = require('../base.js')
class ImageService extends BaseService {
    async fitchData(options) {
        let { app } = this;
        let data =  await app.model.Image.findAll(options)
        let limit = options.limit
        Object.assign(options, {
            limit:undefined,
            offset:undefined,
            attributes:undefined
        })
        let { totalRow, totalPage } =await this.getCount(app.model.Image, options, limit)
        console.log(totalRow, totalPage )
        return{
            data,
            totalRow,
            totalPage
        }
    }
}

module.exports = ImageService;
