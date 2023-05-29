const errorTypes = require('../constants/errorTypes')

const errorHandle = (error, ctx)=>{
    let status, message;
    switch (error.message){
        case errorTypes.PHONE_IS_EXIIST:
            status = 409
            message = '手机号已经存在!'
            break
        case errorTypes.PHONE_OR_PASSWORD_IS_REQUIRED:
            status = 400
            message = '手机或者密码不能为空'
            break
        case errorTypes.PHONE_IS_ILLEGAL:
            status = 400
            message = '手机号不合法'
            break
        default:
            status = 404
            message = 'NOT FOUND'
    }
    ctx.status = status
    ctx.body = message
}

module.exports = errorHandle