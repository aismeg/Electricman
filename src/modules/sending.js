const sending = ({ element }) => {
    const form = document.getElementById(element);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка';
    const successText = 'Они скоро с вами свяжутся';

    const sendData = data => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };
    const submit = () => {
        const formElements = form.querySelectorAll('input [type="text"]');
        const formData = new FormData(form);
        const formBody = {};

        form.append(statusBlock);

        formData.forEach((val, key) => {
            if (val !== '') {
                formBody[key] = val;
            }
        });
        sendData(formBody).then(() => {
            statusBlock.style.color = 'green';
            statusBlock.textContent = successText;

            setTimeout(() => { statusBlock.textContent = ''; }, 5000);

            formElements.forEach(input => {
                input.value = '';
            });
        })
            .catch(() => {
                statusBlock.style.color = 'red';
                statusBlock.textContent = errorText;
            });
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        statusBlock.textContent = loadText;

        submit();
    });

};

export default sending;