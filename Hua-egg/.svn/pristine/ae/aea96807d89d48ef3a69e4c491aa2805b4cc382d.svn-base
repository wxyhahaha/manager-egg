'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  async getCount(model, options, limit) {
    let { app, ctx} = this
    options.attributes = [[app.Sequelize.fn('COUNT', app.Sequelize.col('*')), 'count']]
    let count = (await model.findAll(options))[0].get('count')
    return{
        totalRow: count,
        totalPage: Math.ceil(count / limit)
    }
  }
}

module.exports = BaseService;
