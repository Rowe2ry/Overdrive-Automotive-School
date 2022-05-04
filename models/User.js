const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
                isEmail: true
            }
        },
        accessLevel: {
            type: DataTypes.TEXT,
            defaultValue: 'new',
            allowNull: false
        }
    },
    {
        hooks: {
            beforeBulkCreate: async (newUserData) => {
                for (const user of newUserData) {
                    user.email = await user.email.toLowerCase();
                    user.password = await bcrypt.hash(user.password, 10);
                };
                return newUserData;
            },
            beforeCreate: async (userData) => {
                userData.email = await userData.email.toLowerCase();
                userData.password = await bcrypt.hash(userData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.email) {
                    updatedUserData.email = await updatedUserData.email.toLowerCase();
                };
                if (updatedUserData.password) {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                };
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    },
);

module.exports = User;