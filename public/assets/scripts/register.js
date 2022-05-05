const pwInput = document.getElementById('password');
const pwConfirm = document.getElementById('confirm__pw');
const regBtn = document.getElementById('register');
const userName = document.getElementById('username');
const emailAdd = document.getElementById('email');

const matchError = document.querySelector('.pass_match_error');
const lengthError = document.querySelector('.pass_len_error');
const passGood = document.querySelector('.pass_good');

const monitorPwInputs = () => {
    if (pwInput.value.length > 0 && pwConfirm.value.length > 0) {
        if (pwInput.value !== pwConfirm.value) {
            matchError.classList.remove('invisible');
        } else {
            matchError.classList.add('invisible');
        };
        if (pwInput.value.length < 8 && pwConfirm.value.length < 8) {
            lengthError.classList.remove('invisible');
        } else {
            lengthError.classList.add('invisible');
        };
        if (pwInput.value.length >= 8 &&
            pwConfirm.value.length >= 8 &&
            pwInput.value === pwConfirm.value) {
                passGood.classList.remove('invisible');
            } else {
                passGood.classList.add('invisible');
            };
    };
};

const createAccount = (event) => {
    event.preventDefault();

    const data = {
        username: userName.value,
        email: emailAdd.value,
        password: pwConfirm.value
    }

    if (pwInput.value !== pwConfirm.value) {
        window.location.reload();
    } else {
        const response = await fetch('/api/account/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Something went wrong');
          }
    };
};

pwInput.addEventListener('input', monitorPwInputs);
pwConfirm.addEventListener('input', monitorPwInputs);
regBtn.addEventListener('click', createAccount);