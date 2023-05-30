const Router = require('koa-router')
const { login } = require('../controller/auth.controller')
const { verifyLogin } = require('../middleware/auth.middleware')

const userRouter = new Router()

userRouter.post('/login', verifyLogin, login)

module.exports = userRouter