const dotenv = require('dotenv');
dotenv.config();
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);

const config={
    development:{
        username: process.env.DB_USER ||'root',
        password: process.env.DB_PASSWORD|| 'Shikshagaur@123',
        database: process.env.DB_NAME||'airbnb_dev',
        host: process.env.DB_HOST||'localhost',
        dialect: 'mysql'

    }
}

module.exports = config;