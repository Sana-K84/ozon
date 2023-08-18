import getData from "./getData";
import renderGoods from "./renderGoods";
import { funcFilter } from "./filters";
import { debounce } from "./helpers";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');
    const minInp = document.getElementById('min');
    const maxInp = document.getElementById('max');
    const checkInp = document.getElementById('discount-checkbox');
    const checkMark = document.querySelector('.filter-check_checkmark')

    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;
    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen
        if (isOpen) {
            catalogModal.style.display = 'block'
        } else
            catalogModal.style.display = ''
    })
    const removeClass = () => {
        catalogModalItems.forEach(el => el.classList.remove('active'))
    }
    let categoryText;

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            typeof categoryText === 'string' ? categoryText = null : categoryText = item.textContent;
            debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText);
            if (item.classList.contains('active')) {
                item.classList.remove('active')
            } else {
                removeClass(); item.classList.add('active');
            }

        })

    })

    const debounceFunc = debounce((min = '', max = '', checkValue = false, searchValue = '', categoryText) => {
        getData().then((data) => {
            renderGoods(funcFilter(data, min, max, checkValue, searchValue, categoryText))
        })
    }, 300)

    searchInput.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)
    });

    minInp.addEventListener('input', (ev) => {
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)
    })
    maxInp.addEventListener('input', (ev) => {
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)
    })
    checkInp.addEventListener('input', (ev) => {
        if (checkInp.checked) {
            checkMark.classList.add('checked')
        } else {
            checkMark.classList.remove('checked')
        };
        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)
    })


}

export default search