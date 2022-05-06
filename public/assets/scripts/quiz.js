const quizForm = document.getElementById('quiz')

const gradeQuizLocal = async (event) => {
    event.preventDefault();
    const url = `/api/quizzes/submit/${quizForm.dataset.quiz_id}`;

    const answer1 = document.querySelector('input[name="q1"]:checked').value;
    const answer2 = document.querySelector('input[name="q2"]:checked').value;
    const answer3 = document.querySelector('input[name="q3"]:checked').value;
    const answer4 = document.querySelector('input[name="q4"]:checked').value;
    const answer5 = document.querySelector('input[name="q5"]:checked').value;
    
    const answers = {
        q1a: answer1,
        q2a: answer2,
        q3a: answer3,
        q4a: answer4,
        q5a: answer5
    };

    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(answers),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        window.location.replace('/api/category/categories');
    } else {
        window.location.replace(`/api/lessons/${quizForm.dataset.quiz_id}`)
    }

};

quizForm.addEventListener('submit', gradeQuizLocal);