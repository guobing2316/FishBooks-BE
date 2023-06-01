const service = require('../service/record.service')

class RecordController {
    async insertRecord(ctx,next) {
        try {
            const { id } = ctx.user
            const res = await service.insert({id, ...ctx.request.body})
            console.log(res)
            ctx.body = {
                "status": 200,
                "message": "添加成功"
            }
        } catch (error) {
            console.log(error)
        }
        

    }
}

module.exports = new RecordController