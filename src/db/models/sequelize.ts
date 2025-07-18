import { Sequelize } from "sequelize";

const sequelize=new Sequelize({

        username: process.env.DB_USER ||'root',
        password: process.env.DB_PASSWORD|| 'Shikshagaur@123',
        database: process.env.DB_NAME||'airbnb_dev',
        host: process.env.DB_HOST||'localhost',
        dialect: 'mysql',
        logging: true,
});

export default sequelize;
