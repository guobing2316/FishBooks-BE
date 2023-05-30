const koa = require('koa')

const useRouter = require('../router')
const bodyparser = require('koa-bodyparser')
const errorHandle = require('./errorHandle')

const app = new koa();



app.use(bodyparser())
// 注册路由
useRouter(app)

app.on('error', errorHandle)


module.exports = app