const connection = require('../app/database')

class RecordService {
    async insert(opt){
        try {
            const { id, account_id, category_id, amuount, type, date, remark } = opt
            const statement = `INSERT INTO record (user_id, account_id, category_id, amuount, type, date, remark) VALUES (?,?,?,?,?,?,?)`
            const result = await connection.execute(statement,[id, account_id, category_id, amuount, type, date, remark])
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
        
    }
}

module.exports = new RecordService()