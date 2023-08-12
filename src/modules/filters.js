export const searchFilter = (goods, value) => {

    return goods.filter(el => el.title.includes(value))
}

