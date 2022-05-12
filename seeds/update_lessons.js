const { Comment, Lesson, Quiz } = require('../models');
const seedLessons = require('./seedLessons');
const seedQuizzes = require('./seedQuizzes');

const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force:false });
    console.log('\n ========== DATABASE ✅ ========== \n');
    await Quiz.sync({ force: true });
    console.log('\n ========== RECREATED QUIZZES ✅ ========== \n');
    await Comment.sync({ force: true });
    console.log('\n ========== RECREATED COMMENTS ✅ ========== \n');
    await Lesson.sync({ force: true });
    console.log('\n ========== RECREATED LESSONS ✅ ========== \n');
    await seedLessons();;
    console.log('\n ========== SEEDED LESSONS ✅ ========== \n');
    await seedQuizzes();;
    console.log('\n ========== SEEDED QUIZZES ✅ ========== \n');
    process.exit(0);
};

seedDb();