const User = require('./User');
const Category = require('./Category');
const Lesson = require('./Lesson');
const Comment = require('./Comment');
const Quiz = require('./Quiz');

Category.hasMany(Lesson, {
    foreignKey: 'cat_id'
});

Lesson.belongsTo(Category, {
    foreignKey:'cat_id'
})

Lesson.hasMany(Comment, {
    foreignKey: 'lesson_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Lesson, {
    foreignKey: 'lesson_id'
});

Lesson.hasOne(Quiz, {
    foreignKey: 'lesson_id',
    onDelete: 'CASCADE'
});

Quiz.belongsTo(Lesson, {
    foreignKey: 'lesson_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Comment,
    Category,
    Lesson,
    Quiz
};