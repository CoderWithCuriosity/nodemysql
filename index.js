const dotenv = require('dotenv');
dotenv.config();

const pool = require('./config/db');

async function test(){
    const [result] = await pool.query('SELECT * FROM users');
    console.log(result);
}

async function testcreate(firstname, lastname, email, age, passwordhash){
    try {
        const [result] = await pool.query(`INSERT INTO users (first_name, last_name, email, age, password_hash) VALUES (?, ?, ?, ?, ?) `, [firstname, lastname, email, age, passwordhash]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

testcreate('david', 'michael', 'test@gmail.com', 12, '12345');