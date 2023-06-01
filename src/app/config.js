const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

dotenv.config()

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, '../keys/public_key.pem'))
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, '../keys/private_key.pem'))

module.exports = {
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = process.env

module.exports.PUBLIC_KEY = PUBLIC_KEY
module.exports.PRIVATE_KEY = PRIVATE_KEY