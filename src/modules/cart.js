import renderCart from "./renderCart";

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartClose = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');

    cartBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';
        renderCart(cart)
        cartTotal.textContent = cart.reduce((acc, goodItem) => {
            return acc += +goodItem.price
        }, 0)
    })

    cartClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
    })

    goodsWrapper.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('btn-primary')) {
            const card = ev.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(el => {
                return el.id == key
            })

            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
            cartTotal.textContent = cart.reduce((acc, goodItem) => {
                return acc += +goodItem.price
            }, 0)
        }
    })


    cartWrapper.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = ev.target.closest('.card');
            const key = card.dataset.key;
            const index = cart.findIndex(el => {
                return el.id === +key
            })
            cart.splice(index, 1)
            // console.log(index);
            localStorage.setItem('cart', JSON.stringify(cart))
            cartTotal.textContent = cart.reduce((acc, goodItem) => {
                return acc += +goodItem.price
            }, 0)
            renderCart(cart)
        }
    })
}
export default cart