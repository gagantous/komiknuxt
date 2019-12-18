const pgp = require('pg-promise') // (/* options */)
const host = 'localhost';
const user = 'postgres';
const port = '5432';
const database = 'db_komikita';

module.exports = {
    conn: function() {
        return pgp(`postgres://postgres:${user}@${host}:${port}/${database}`)
    },
    
};
