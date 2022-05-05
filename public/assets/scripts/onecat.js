const categories = document.querySelectorAll('.category');

const logData = (event) => {
    const url = `/api/lessons/${event.target.dataset.less}`;
    window.location.replace(url);
};

categories.forEach(category => category.addEventListener('click', logData));