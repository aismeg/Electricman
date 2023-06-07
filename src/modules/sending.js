/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const sending = ({ element }) => {
  const form = document.getElementById(element);
  const statusBlock = document.createElement('div');
  const loadText = 'Идёт отправка...';
  const errorText = 'Ошибка';
  const successText = 'Отправлено';
  const invalidText = 'Неправильно введено Имя/Телефон';

  const validate = (list) => {
    let success = true;

    list.forEach((elem) => {
      switch (elem.getAttribute('name')) {
        case 'fio':
          if (elem.value !== '') {
            return;
          }
          break;
        case 'tel':
          if (elem.value.length === 18) {
            return;
          }
          break;
        default: return;
      }

      success = false;
    });

    return success;
  };

  const sendData = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  const submit = () => {
    const formElements = form.querySelectorAll('input[type=text]');
    const formData = new FormData(form);
    const formBody = {};

    form.append(statusBlock);

    formData.forEach((val, key) => {
      if (val !== '') {
        formBody[key] = val;
      }
    });

    if (validate(formElements)) {
      sendData(formBody).then(() => {
        statusBlock.style.color = '#e9bb26';
        statusBlock.textContent = successText;

        setTimeout(() => { statusBlock.textContent = ''; }, 5000);

        formElements.forEach((input) => {
          input.value = '';
        });
      })
        .catch(() => {
          statusBlock.style.color = 'red';
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.style.color = 'red';
      statusBlock.textContent = invalidText;

      setTimeout(() => { statusBlock.textContent = ''; }, 5000);
    }
  };

  try {
    if (!form) {
      throw new Error('?');
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      statusBlock.textContent = loadText;

      submit();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sending;
