const { Lesson, Quiz } = require('../models');
const seedLessons = require('./seedLessons');
const seedQuizzes = require('./seedQuizzes');

const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force:false });
    console.log('\n ========== DATABASE ✅ ========== \n');
    await Lesson.sync({ force: true });
    console.log('\n ========== RECREATED LESSONS ✅ ========== \n');
    await Quiz.sync({ force: true });
    console.log('\n ========== RECREATED QUIZZES ✅ ========== \n');
    await seedLessons();;
    console.log('\n ========== LESSONS ✅ ========== \n');
    await seedQuizzes();;
    console.log('\n ========== QUIZZES ✅ ========== \n');
    process.exit(0);
};

seedDb();