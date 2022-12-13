const validate = () => {
    const userName = document.querySelector('.rf .form-control');
    const tel = document.querySelector('.rf .tel');

    userName.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^а-яё ]/gi, '');
    });
    tel.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^\d\+]+/, '');
    });
};

export default validate;