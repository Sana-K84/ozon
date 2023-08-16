const cartCounter = () => {
    const cartCounter = document.querySelector('.counter');
    cartCounter.textContent = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0;

}


export default cartCounter
