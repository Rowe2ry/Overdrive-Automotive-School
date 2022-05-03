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
        username: {
            type: DataTypes.STRING,
            alowNull: false,
            unique: true
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
            unique: true,
            validate: {
                isEmai: true
            }
        },
        accessLevel: {
            type: DataTypes.TEXT,
            defaultValue: 'new',
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