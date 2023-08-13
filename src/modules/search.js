import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";
import { debounce } from "./helpers";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    const debounceSearch = debounce((event) => {
        getData().then((data) => {
            renderGoods(searchFilter(data, event.target.value))
        })
    }, 300)


    searchInput.addEventListener('input', debounceSearch)
}

export default search