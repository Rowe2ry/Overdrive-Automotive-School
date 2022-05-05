const categories = document.querySelectorAll('.category');

const logData = (event) => {
    const url = `/api/category/${event.target.dataset.cat}`;

    window.location.replace(url);
};

categories.forEach(category => category.addEventListener('click', logData));