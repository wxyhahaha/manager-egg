const jwt = require('jsonwebtoken')
module.exports = options =>{
    return async function auth(ctx, next){
        let token = ctx.header['x-token'] || ctx.header['hua-token']
        let userId = ctx.header['userid']
        ctx.app.config.userId = userId
        if(!token) return ctx.body = { code:10000,msg:'no token' }
        let flag = true
        try{
            jwt.verify(token, ctx.app.config.privateKey)
        }catch(e){
            flag = false
            ctx.logger.info('token过期')
        }
        
        return flag?await next():ctx.body = { code  :30000,msg:'token fail' };
    }
}