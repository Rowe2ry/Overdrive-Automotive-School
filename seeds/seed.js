const seedUsers = require('./seedUsers');
const seedCategory = require('./seedCategories');
const seedLesson = require('./seedQuizes');
const seedQuizes = require('./seedQuizes');
/* const seedComments = require('./seedComments'); */

const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force:false });
    console.log('\n ========== DATABASE ✅ ========== \n');
    // await seedUsers();;
    // console.log('\n ========== USERS ✅ ========== \n');
    // await seedCategories();;
    // console.log('\n ========== CATEGORIES ✅ ========== \n');
    // await seedLessons();;
    // console.log('\n ========== LESSONS ✅ ========== \n');
    // await seedQuizes();;
    // console.log('\n ========== QUIZES ✅ ========== \n');
    /*await seedComments();;
    console.log('\n ========== COMMENTS ✅ ========== \n'); */
    process.exit(0);
};

seedDb();