const Router = require('koa-router')
const { create } = require('../controller/users.controller')
const { verifyUser, passwordHandle } = require('../middleware/users.middleware')

const userRouter = new Router({prefix: '/users'})

userRouter.post('/', verifyUser, passwordHandle, create)

module.exports = userRouter