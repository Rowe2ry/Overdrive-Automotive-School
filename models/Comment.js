const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        response_body: {
            type: DataTypes.STRING,
            allowNull: true
        },
        upVotes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        dateCreated: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        lesson_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'lesson',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezedTableName: true,
        modelName: 'comment'
    }
);

module.exports = Comment;