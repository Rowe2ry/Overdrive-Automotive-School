const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const lessonRoutes = require('./api/lessonRoutes');
const commentRoutes = require('./api/commentRoutes');
const quizRoutes = require('./api/quizRoutes');

router.use('/account', userRoutes);
router.use('/lessons', lessonRoutes);
router.use('/comments', commentRoutes);
router.use('quiz', quizRoutes);
