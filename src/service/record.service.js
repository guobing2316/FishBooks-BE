const connection = require('../app/database')

class RecordService {
    async insert(opt){
        try {
            const { id, account_id, category_id, amount, type, date, remark } = opt
            const statement = `INSERT INTO record (user_id, account_id, category_id, amount, type, date, remark) VALUES (?,?,?,?,?,?,?)`
            const result = await connection.execute(statement,[id, account_id, category_id, amount, type, date, remark])
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
        
    }

    async updateRecord(opt){
        try {
            const { id, record_id, account_id, category_id, amount, type, date, remark } = opt
            const statement = `UPDATE record SET category_id = ?, account_id = ?, amount = ?, type = ?, date = ?, remark = ? WHERE user_id = ? AND id = ?`
            const result = await connection.execute(statement,[account_id, category_id, amount, type, date, remark, id, record_id])
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
        
    }

    async getRecord(id){
        try {
            const statement =`SELECT id, account_id, category_id, amount, type, date, remark FROM record WHERE user_id = ?`
            const result = await connection.execute(statement,[id])
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async deleteRecord(opt){
        try {
            const { id, recoedId } = opt
            const statement =`DELETE FROM record WHERE user_id = ? AND id = ?`
            const result = await connection.execute(statement,[id, recoedId])
            console.log(result)
            return result
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = new RecordService()