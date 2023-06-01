const errorTypes = require('../constants/errorTypes')

const errorHandle = (error, ctx)=>{
    let status, message;
    switch (error.message){
        case errorTypes.PHONE_IS_EXIIST:
            status = 409
            message = '手机号已经存在!'
            break
        case errorTypes.PHONE_IS_NOT_EXIIST:
            status = 404
            message = '手机号不存在!'
            break
        case errorTypes.PHONE_OR_PASSWORD_IS_REQUIRED:
            status = 400
            message = '手机或者密码不能为空'
            break
        case errorTypes.PHONE_IS_ILLEGAL:
            status = 422
            message = '手机号不合法'
            break
        case errorTypes.PASSWORD_IS_INCORRECT:
            status = 401
            message = '密码不正确!'
            break
        case errorTypes.INVALID_TOKEN:
            status = 401
            message = '无效token!'
            break
        default:
            status = 404
            message = 'NOT FOUND'
    }
    ctx.status = status
    ctx.body = {status,message}
}

module.exports = errorHandle