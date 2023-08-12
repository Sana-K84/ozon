export const searchFilter = (goods, value) => {

    return goods.filter(el => el.title.toLowerCase().includes(value.toLowerCase()))
}

export const caegoryFilter = (goods, text) => {

    return goods.filter(el => el.category === text)
}