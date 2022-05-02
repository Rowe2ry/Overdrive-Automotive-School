const { User} = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();

const userData = [
    {
        username: 'Rowe2ry',
        password: process.env.SEED_PASS,
        email: 'rowe2ry@yahoo.com',
        accessLevel: 'ADMIN'
    },
    {
        username: 'JohnSmith',
        password: process.env.SEED_PASS,
        email: 'jsmith@gmail.com'
    },
    {
        username: 'SarahSmith',
        password: process.env.SEED_PASS,
        email: 'ssmith@gmail.com'
    },
    {
        username: 'JenniferBennifer',
        password: process.env.SEED_PASS,
        email: 'jbennifer@gmail.com'
    },    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;