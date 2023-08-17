export const categoryFilter = (goods, text) => {

    return goods.filter(el => el.category === text)
}

export const funcFilter = (goods, minValue, maxValue, checkValue, searchValue, categoryText) => {

    return goods.filter((goodsItem) => {
        const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true;
        const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true;
        const isSale = checkValue ? goodsItem.sale : true;
        const isText = categoryText ? goodsItem.category === categoryText : true;
        console.log(isSale);
        return isMin &&
            isMax &&
            isSale &&
            goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
            && isText
    })

}