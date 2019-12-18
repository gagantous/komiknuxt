import * as Pg from 'pg-promise'

const username = postgres;
const localhost = 'localhost';
const port = '5432';
const db = 'db_komikita';
module.exports = {
    conn: function() {
        return Pg(`postgres://postgres:${username}@${localhost}:${port}/${db}`)
    }
};