const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartClose = cartModal.querySelector('.cart-close');



    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    })

    cartClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
    })
}
export default cart