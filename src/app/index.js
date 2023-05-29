const koa = require('koa')

const userRouter = require('../router/users.router')
const authRouter = require('../router/auth.router')
const bodyparser = require('koa-bodyparser')
const errorHandle = require('./errorHandle')

const app = new koa();



app.use(bodyparser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(authRouter.routes())
app.use(userRouter.allowedMethods())

app.on('error', errorHandle)


module.exports = app