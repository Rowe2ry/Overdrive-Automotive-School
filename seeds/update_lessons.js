const seedLessons = require('./seedLessons');
const seedQuizzes = require('./seedQuizzes');

const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force:true });
    console.log('\n ========== DATABASE ✅ ========== \n');
    await seedLessons();;
    console.log('\n ========== LESSONS ✅ ========== \n');
    await seedQuizzes();;
    console.log('\n ========== QUIZZES ✅ ========== \n');
    process.exit(0);
};

seedDb();