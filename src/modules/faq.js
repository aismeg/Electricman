const faq = () => {
    const accordeon = document.querySelector('.accordeon');
    const element = accordeon.querySelectorAll('.element');
    const content = accordeon.querySelectorAll('.element-content');

    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
            const active = document.querySelector('.active');

            if (active) {
                active.classList.remove('active');
            }
        });
    }

};

export default faq;