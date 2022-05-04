const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model {};

Quiz.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        q1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q1a1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q1a2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q1a3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q1a4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q1correct_a: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q2a1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q2a2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q2a3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q2a4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q2correct_a: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q3a1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q3a2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q3a3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q3a4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q3correct_a: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q4a1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q4a2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q4a3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q4a4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q4correct_a: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q5: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q5a1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q5a2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q5a3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q5a4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        q5correct_a: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reward_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lesson_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'lesson',
                key: 'id' 
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quiz'
    }
);

module.exports = Quiz;