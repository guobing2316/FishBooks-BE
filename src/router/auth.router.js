const Router = require('koa-router')
const { login } = require('../controller/auth.controller')

const userRouter = new Router()

userRouter.post('/login', login)

module.exports = userRouter