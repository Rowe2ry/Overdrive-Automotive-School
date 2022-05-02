const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWDB_URL);
} else {
    sequelize = new Sequelize (
        process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}

module.exports = sequelize;