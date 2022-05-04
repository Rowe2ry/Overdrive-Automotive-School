const seedUsers = require('./seedUsers');
const seedCategories = require('./seedCategories');
const seedLessons = require('./seedLessons');
const seedQuizzes = require('./seedQuizzes');
/* const seedComments = require('./seedComments'); */

const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force:true });
    console.log('\n ========== DATABASE ✅ ========== \n');
    await seedUsers();;
    console.log('\n ========== USERS ✅ ========== \n');
    await seedCategories();;
    console.log('\n ========== CATEGORIES ✅ ========== \n');
    await seedLessons();;
    console.log('\n ========== LESSONS ✅ ========== \n');
    await seedQuizzes();;
    console.log('\n ========== QUIZZES ✅ ========== \n');
    /*await seedComments();;
    console.log('\n ========== COMMENTS ✅ ========== \n'); */
    process.exit(0);
};

seedDb();