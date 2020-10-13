function modal () {
    const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");


function showModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function hideModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';

}
modalTrigger.forEach(i => {
    i.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
});





modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
        hideModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        hideModal();
    }
});

const modalTimerId = setTimeout(showModal, 150000);

function showModalEnd() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        window.removeEventListener('scroll', showModalEnd);
    }
}
window.addEventListener('scroll', showModalEnd);
}
module.exports = modal;