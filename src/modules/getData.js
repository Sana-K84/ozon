const getData = () => {
    return fetch('http://localhost:3000/goods')
        .then(response => response.json())

}

export default getData