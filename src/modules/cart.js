const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartClose = cartModal.querySelector('.cart-close');
    const goodsWrapper = document.querySelector('.goods');


    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    })

    cartClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
    })

    goodsWrapper.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('btn-primary')) {
            const card = ev.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(el => {
                return el.id == key
            })

            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })
}
export default cart