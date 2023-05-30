const connection = require('../app/database')


class UserService {
    async search(user){
        try {
            const { phone } = user
            const statement = `SELECT phone,password FROM users WHERE phone = ?`
            const result = await connection.execute(statement,[phone])
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
        
    }
    async create(user){
        try {
            // 查询数据
            let {username, password, phone} = user
            const randomString = Math.random().toString(36).substring(2)
            // 注册重置username
            username = randomString
            const statement = `INSERT INTO users (username, phone, password) VALUES (?,?,?)`
            const result = await connection.execute(statement,[username, phone, password])
            // 返回数据
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
        
    }
}

module.exports = new UserService()