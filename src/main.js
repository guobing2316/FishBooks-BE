const app = require('./app')
const { APP_PORT } = require('./app/config')


app.listen(APP_PORT, () => {
    console.log('服务启动成功',APP_PORT)
})