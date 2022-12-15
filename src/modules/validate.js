const validate = () => {
    const userName = document.querySelector('#form1 .form-control');
    const tel = document.querySelector('#form1 .tel');

    userName.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^а-яё ]/gi, '');
    });
    tel.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^\d\+ ]+/, '');
    });
};

export default validate;