const service = require('../service/users.service')
const errorType = require('../constants/errorTypes')
const md5Encrypt = require('../utils/passwordEncrypt')

const verifyUser = async (ctx, next) =>{
    const user = ctx.request.body
    // 判读手机是否为空
    if(!user.phone || !user.password){
        const error = new Error(errorType.PHONE_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx)
    }
    // 验证手机号是否非法
    const reg = /^1[3456789]\d{9}$/
    if(!reg.test(user.phone)){
        const error = new Error(errorType.PHONE_IS_ILLEGAL)
        return ctx.app.emit('error', error , ctx)
    }
    // 判断手机号是否存在(已存在)
    // 查询数据
    const result = await service.search(user)
    if(result[0].length > 0){
        const error = new Error(errorType.PHONE_IS_EXIIST)
        return ctx.app.emit('error', error , ctx)
    }
    
    await next()
}

const passwordHandle = async (ctx, next) => {
    const { password } = ctx.request.body
    ctx.request.body.password = md5Encrypt(password)
    // console.log(ctx.request.body)
    await next()
}

module.exports = {
    verifyUser,
    passwordHandle
} 