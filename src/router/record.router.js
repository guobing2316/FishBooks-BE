const Router = require('koa-router')
const { insertRecord, editRecord, getRecord, deleteRecord } = require('../controller/record.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

const recordRouter = new Router()

recordRouter.post('/record', verifyAuth, insertRecord)
recordRouter.put('/edit', verifyAuth, editRecord)
recordRouter.get('/editRecord', verifyAuth, getRecord)
recordRouter.delete('/delete/:record_id', verifyAuth, deleteRecord)


module.exports = recordRouter
