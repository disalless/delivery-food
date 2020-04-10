function toggleModal() {
    document.querySelector('.modal').classList.toggle('is-open');
};
document.querySelector('#cart-button').addEventListener('click', toggleModal);
document.querySelector('.close').addEventListener('click', toggleModal);

new WOW().init();
