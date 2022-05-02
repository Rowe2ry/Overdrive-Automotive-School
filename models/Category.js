const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {};

Category.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            alloNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezedTableName: true,
        modelName: 'category'
    }
);

module.exports = Category;