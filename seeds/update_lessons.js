const seedLessons = require('./seedLessons');
const seedQuizzes = require('./seedQuizzes');

const sequelize = require('../config/connection');

const seedDb = async () => {
    await sequelize.sync({ force:false });
    console.log('\n ========== DATABASE ✅ ========== \n');
    await sequelize.literal(
        `DROP TABLE IF EXISTS lesson;
        DROP TABLE IF EXISTS quiz;
        CREATE TABLE IF NOT EXISTS lesson (id INTEGER auto_increment , title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, body1 TEXT NOT NULL, fig1 VARCHAR(255), fig_caption1 VARCHAR(255), body2 TEXT, fig2 VARCHAR(255), fig_caption2 VARCHAR(255), body3 TEXT, fig3 VARCHAR(255), fig_caption3 VARCHAR(255), body4 TEXT, fig4 VARCHAR(255), fig_caption4 VARCHAR(255), access_code VARCHAR(255) UNIQUE, cat_id INTEGER, PRIMARY KEY (id), FOREIGN KEY (cat_id) REFERENCES category (id) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
        SHOW INDEX FROM lesson;
        CREATE TABLE IF NOT EXISTS quiz (id INTEGER auto_increment , q1 VARCHAR(255) NOT NULL, q1a1 VARCHAR(255) NOT NULL, q1a2 VARCHAR(255) NOT NULL, q1a3 VARCHAR(255) NOT NULL, q1a4 VARCHAR(255) NOT NULL, q1correct_a INTEGER NOT NULL, q2 VARCHAR(255) NOT NULL, q2a1 VARCHAR(255) NOT NULL, q2a2 VARCHAR(255) NOT NULL, q2a3 VARCHAR(255) NOT NULL, q2a4 VARCHAR(255) NOT NULL, q2correct_a INTEGER NOT NULL, q3 VARCHAR(255) NOT NULL, q3a1 VARCHAR(255) NOT NULL, q3a2 VARCHAR(255) NOT NULL, q3a3 VARCHAR(255) NOT NULL, q3a4 VARCHAR(255) NOT NULL, q3correct_a INTEGER NOT NULL, q4 VARCHAR(255) NOT NULL, q4a1 VARCHAR(255) NOT NULL, q4a2 VARCHAR(255) NOT NULL, q4a3 VARCHAR(255) NOT NULL, q4a4 VARCHAR(255) NOT NULL, q4correct_a INTEGER NOT NULL, q5 VARCHAR(255) NOT NULL, q5a1 VARCHAR(255) NOT NULL, q5a2 VARCHAR(255) NOT NULL, q5a3 VARCHAR(255) NOT NULL, q5a4 VARCHAR(255) NOT NULL, q5correct_a INTEGER NOT NULL, reward_code VARCHAR(255) NOT NULL, lesson_id INTEGER, PRIMARY KEY (id), FOREIGN KEY (lesson_id) REFERENCES lesson (id) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;`
      );
    await seedLessons();;
    console.log('\n ========== LESSONS ✅ ========== \n');
    await seedQuizzes();;
    console.log('\n ========== QUIZZES ✅ ========== \n');
    process.exit(0);
};

seedDb();