const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class AuthController {
    async login(ctx, next){
        const { id, phone } = ctx.user
        const token = jwt.sign({ id, phone}, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })
        ctx.body = {
            "status": 200,
            "message": "请求成功",
            "data": {
                id,
                phone,
                token
            }
        }
        
    }
}

module.exports = new AuthController()