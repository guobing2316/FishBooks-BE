const service = require('../service/users.service')

class UserController {
    async create(ctx, next){
        // 获取用户传递的数据
        const user = ctx.request.body
        // 查询数据
        const result = await service.create(user)
        console.log(result)

        // 返回数据
        ctx.body = result
    }
}

module.exports = new UserController()