const getData = () => {
    return fetch('https://ozon-2e8a0-default-rtdb.firebaseio.com/goods.json')
        .then(response => response.json())

}

export default getData