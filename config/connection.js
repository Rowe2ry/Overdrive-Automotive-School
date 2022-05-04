const Sequelize = require('sequelize');
require('dotenv').config();
let env = process.env.NODE_ENV;
const config = require("./config")[env];

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(config.use_env_variable);
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