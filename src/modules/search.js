const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');
    searchInput.addEventListener('input', (ev) => {
        console.log(ev.target.value)
    })
}

export default search