const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lesson extends Model {};

Lesson.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fig1: {
            type: DataTypes.STRING, // relative path to img
            allowNull: true
        },
        fig_caption1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        body2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        fig2: {
            type: DataTypes.STRING, // relative path to img
            allowNull: true
        },
        fig_caption2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        body3: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        fig3: {
            type: DataTypes.STRING, // relative path to img
            allowNull: true
        },
        fig_caption3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        body4: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        fig4: {
            type: DataTypes.STRING, // relative path to img
            allowNull: true
        },
        fig_caption4: {
            type: DataTypes.STRING,
            allowNull: true
        },
        access_code: {
            type: DataTypes.STRING,
            unique: true
        },
        cat_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'lesson'
    }
);

module.exports = Lesson;