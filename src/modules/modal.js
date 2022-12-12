const modal = () => {
    const modalitem = document.querySelectorAll('.modal-callback, .modal-overlay');
    const callbackBtn = document.querySelectorAll('.callback-btn');
    console.log(modalitem);

    callbackBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalitem.forEach(e => {
                e.style.display = "block";
            });
        });
    });
};

export default modal;