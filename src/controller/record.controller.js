const service = require('../service/record.service')

class RecordController {
    async insertRecord(ctx,next) {
        try {
            const { id } = ctx.user
            const res = await service.insert({id, ...ctx.request.body})
            // console.log(res)
            ctx.body = {
                "status": 200,
                "message": "添加成功"
            }
        } catch (error) {
            console.log(error)
        }
        

    }
    async editRecord(ctx, next) {
        try {
            const { id } = ctx.user
            const res = await service.updateRecord({id, ...ctx.request.body})
            ctx.body = {
                "status": 200,
                "message": "添加成功"
            }
        } catch (error) {
            console.log(res)
        }
        
    }
    async getRecord(ctx, next){
        try {
            const { id } = ctx.user
            const res = await service.getRecord(id)
            // console.log(res)
            ctx.body = {
                "status": 200,
                "message": "请求成功",
                "data": res[0]
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteRecord(ctx, next){
        try {
            const { id } = ctx.user
            const recoedId = ctx.params.record_id
            const res = await service.deleteRecord({ id, recoedId })
            ctx.body = {
                    "status": 200,
                    "message": "删除成功"
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    
}

module.exports = new RecordController