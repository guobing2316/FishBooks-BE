const jwt= require('jsonwebtoken')
const { PUBLIC_KEY } = require('../app/config')
const { PHONE_OR_PASSWORD_IS_REQUIRED, PHONE_IS_NOT_EXIIST, PASSWORD_IS_INCORRECT, INVALID_TOKEN } = require('../constants/errorTypes')
const { search } = require('../service/users.service')
const md5Encrypt = require('../utils/passwordEncrypt')

const verifyLogin = async (ctx, next) => {
    try {
        // 获取手机密码
        const user = ctx.request.body
        // 判断用户名和密码是否为空
        if(!user.phone || !user.password){
            const error = new Error(PHONE_OR_PASSWORD_IS_REQUIRED)
            return ctx.app.emit('error', error, ctx)
        }
        // 判断用户是否存在(用户不存在)
        // 获取数据库中的手机号和密码
        const result = await search(user)
        // console.log(result[0])
        if(result[0].length === 0){
            const error = new Error(PHONE_IS_NOT_EXIIST)
            return ctx.app.emit('error', error, ctx)
        }
        // 判断密码是否和数据库中一致(加密)
        if(md5Encrypt(user.password) !== result[0][0].password){
            const error = new Error(PASSWORD_IS_INCORRECT)
            return ctx.app.emit('error', error, ctx)
        }
        ctx.user = result[0][0]
        await next()

    } catch (error) {
        console.log(error)
        throw error
    }
    

}

const verifyAuth = async (ctx, next) => {
    try {
        const authorization = ctx.header.authorization
        if(!authorization) {
            const error = new Error(INVALID_TOKEN)
            return ctx.app.emit('error', error, ctx)
        }
        const token = authorization.replace('Bearer ','')
        const result = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result
        await next()
    } catch (e) {
        const error = new Error(INVALID_TOKEN)
        return ctx.app.emit('error', error, ctx)
    }
    

}

module.exports = {
    verifyLogin,
    verifyAuth
}