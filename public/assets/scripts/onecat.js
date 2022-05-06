const categories = document.querySelectorAll('.category');
const key = document.getElementById('key');

const showAccess = (cat) => {
    if (!key.dataset.user_access.includes(cat.dataset.access)) {
        cat.classList.add('unavailable');
    };
};

const logData = (event) => {
    const url = `/api/lessons/${event.target.dataset.less}`;
    window.location.replace(url);
};

categories.forEach(category => category.addEventListener('click', logData));

categories.forEach(category => showAccess(category));