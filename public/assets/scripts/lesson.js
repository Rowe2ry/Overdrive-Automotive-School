const quizStart = document.getElementById('quiz_start');

const advanceToQuiz = (event) => {
    const url = `/api/quizzes/${event.target.dataset.quiz_id}`;

    window.location.replace(url);
};

quizStart.addEventListener('click', advanceToQuiz);