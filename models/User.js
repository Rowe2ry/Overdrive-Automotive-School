const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    auth(pass) {
        return bcrypt.compareSync(pass, this.password);
    }
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmai: true
            }
        },
        accessLevel : {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezedTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;