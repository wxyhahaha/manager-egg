'use strict';

const Service = require('egg').Service;
const BaseService = require('../base')
class UserService extends BaseService {
    async fitchData(options) {
        let { app } = this;
        let data =  await app.model.User.findAll(options)
        let limit = options.limit
        Object.assign(options, {
            limit:undefined,
            offset:undefined,
            attributes:undefined,
        })
        let { totalRow, totalPage } =await this.getCount(app.model.User, options, limit)
        console.log( totalRow, totalPage )
        return{
            data,
            totalRow,
            totalPage
        }
    }
}

module.exports = UserService;
