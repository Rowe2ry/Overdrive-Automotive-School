const { User} = require('../models');
// const bcrypt = require('bcrypt');

const userData = [
    {
        username: 'Rowe2ry',
        password: 'secure12345',
        email: 'rowe2ry@yahoo.com',
        accessLevel: 'ADMIN'
    },
    {
        username: 'JohnSmith',
        password: 'secure12345',
        email: 'jsmith@gmail.com'
    },
    {
        username: 'SarahSmith',
        password: 'secure12345',
        email: 'ssmith@gmail.com'
    },
    {
        username: 'JenniferBennifer',
        password: 'secure12345',
        email: 'jbennifer@gmail.com'
    },    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;