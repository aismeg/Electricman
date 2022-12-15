const modal = () => {
    const modalContainer = document.querySelectorAll('.modal-overlay');
    const callbackBtn = document.querySelectorAll('.fancyboxModal');

    callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalContainer.forEach(e => {
                e.style.display = "block";
            });

        });
    });

    modalContainer.forEach(btn => {
        btn.addEventListener('click', e => {
            if (!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
                btn.style.display = 'none';
            }
        });
    });
};

export default modal;