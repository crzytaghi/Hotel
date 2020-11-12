const Pool = require('pg').Pool;
const { CLient, Client } = require('pg');

let pool = '';

if (process.env.DATABASE_URL) {
    console.log('database');
    pool = new Client ({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
    pool.connect();
} else {
    pool = new Pool({
        user: process.env.USER,
        host: process.env.HOST,
        port: process.env.PG_PORT,
        database: process.env.DBNAME,
        password: process.env.PASSWORD
    })
}


module.exports = pool;