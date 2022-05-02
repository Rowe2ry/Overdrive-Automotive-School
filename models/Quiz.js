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
        Q1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        Q1A1: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q1A2: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q1A3: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q1A4: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q1correctA: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Q2: {
            type: DataTypes.STRING,
            allowNull:false
        },
        Q2A1: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q2A2: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q2A3: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q2A4: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q2correctA: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Q3: {
            type: DataTypes.STRING,
            allowNull:false
        },
        Q3A1: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q3A2: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q3A3: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q3A4: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q3correctA: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Q4: {
            type: DataTypes.STRING,
            allowNull:false
        },
        Q4A1: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q4A2: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q4A3: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q4A4: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q4correctA: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Q5: {
            type: DataTypes.STRING,
            allowNull:false
        },
        Q5A1: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q5A2: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q5A3: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q5A4: {
            type: DataTypes.STRING,
            sllowNull:false
        },
        Q5correctA: {
            type: DataTypes.INTEGER,
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
        freezedTableName: true,
        underscored: true,
        modelName: 'quiz'
    }
);