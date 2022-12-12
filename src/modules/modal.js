const modal = () => {
    const modalContainer = document.querySelector('.modal-overlay');
    const callbackBtn = document.querySelectorAll('.callback-btn');

    callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalContainer.style.display = "block";

        });
    });

    modalContainer.addEventListener('click', e => {
        if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
            modalContainer.style.display = 'none';
        }
    });
};

export default modal;