const Router = require('koa-router')
const { insertRecord } = require('../controller/record.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

const recordRouter = new Router()

recordRouter.post('/record', verifyAuth, insertRecord)


module.exports = recordRouter
