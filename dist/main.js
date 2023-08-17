/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n\r\n\r\n\r\n// import catalog from './modules/catalog'\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n// catalog()\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _cartCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartCounter */ \"./src/modules/cartCounter.js\");\n\r\n\r\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n    const cartModal = document.querySelector('.cart');\r\n    const cartClose = cartModal.querySelector('.cart-close');\r\n    const cartTotal = cartModal.querySelector('.cart-total > span');\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n    const cartSendBtn = cartModal.querySelector('.cart-confirm');\r\n\r\n\r\n    cartBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : [];\r\n        cartModal.style.display = 'flex';\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n        cartTotal.textContent = cart.reduce((acc, goodItem) => {\r\n            return acc += +goodItem.price\r\n        }, 0)\r\n    })\r\n\r\n    cartClose.addEventListener('click', () => {\r\n        cartModal.style.display = 'none'\r\n    })\r\n\r\n    goodsWrapper.addEventListener('click', (ev) => {\r\n        if (ev.target.classList.contains('btn-primary')) {\r\n            const card = ev.target.closest('.card');\r\n            const key = card.dataset.key;\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ?\r\n                JSON.parse(localStorage.getItem('cart')) : [];\r\n            const goodItem = goods.find(el => {\r\n                return el.id == key\r\n            })\r\n\r\n            cart.push(goodItem)\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n            cartTotal.textContent = cart.reduce((acc, goodItem) => {\r\n                return acc += +goodItem.price\r\n            }, 0)\r\n        }\r\n        (0,_cartCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    })\r\n\r\n\r\n    cartWrapper.addEventListener('click', (ev) => {\r\n        if (ev.target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n            const card = ev.target.closest('.card');\r\n            const key = card.dataset.key;\r\n            const index = cart.findIndex(el => {\r\n                return el.id === +key\r\n            })\r\n            cart.splice(index, 1)\r\n            // console.log(index);\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n            cartTotal.textContent = cart.reduce((acc, goodItem) => {\r\n                return acc += +goodItem.price\r\n            }, 0)\r\n            ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n        }\r\n    })\r\n    cartSendBtn.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\r\n        (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            localStorage.removeItem('cart');\r\n            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n            cartTotal.textContent = 0;\r\n        })\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/cartCounter.js":
/*!************************************!*\
  !*** ./src/modules/cartCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cartCounter = () => {\r\n    const cartCounter = document.querySelector('.counter');\r\n    cartCounter.textContent = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0;\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartCounter);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/cartCounter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   funcFilter: () => (/* binding */ funcFilter)\n/* harmony export */ });\nconst categoryFilter = (goods, text) => {\r\n\r\n    return goods.filter(el => el.category === text)\r\n}\r\n\r\nconst funcFilter = (goods, minValue, maxValue, checkValue, searchValue, categoryText) => {\r\n\r\n    return goods.filter((goodsItem) => {\r\n        const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue.trim()) : true;\r\n        const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue.trim()) : true;\r\n        const isSale = checkValue ? goodsItem.sale : true;\r\n        const isText = categoryText ? goodsItem.category === categoryText : true;\r\n        console.log(isSale);\r\n        return isMin &&\r\n            isMax &&\r\n            isSale &&\r\n            goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())\r\n            && isText\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    return fetch('https://ozon-2e8a0-default-rtdb.firebaseio.com/goods.json')\r\n        .then(response => response.json())\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\r\n    let timer;\r\n    return (...args) => {\r\n        clearTimeout(timer)\r\n        timer = setTimeout(() => { func.apply(undefined, args) }, ms)\r\n    }\r\n}\n\n//# sourceURL=webpack://ozon/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    const cartBtn = document.getElementById('cart');\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    }\r\n    )\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    }).then(response => response.json())\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCounter */ \"./src/modules/cartCounter.js\");\n\r\n\r\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper');\r\n\r\n\r\n    cartWrapper.innerHTML = '';\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n        <div id=\"cart-empty\">\r\n            Ваша корзина пока пуста\r\n        </div>\r\n        `)\r\n    } else {\r\n        goods.forEach(goodsItem => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n    \r\n            <div class=\"card\" data-key=${goodsItem.id}>\r\n           ${goodsItem.sale ? ` <div class=\"card-sale\">🔥Hot Sale🔥</div>` : ``}\r\n                <div class=\"card-img-wrapper\">\r\n      \r\n                    <span class=\"card-img-top\" style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                    <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                    <button class=\"btn btn-primary\">Удалить</button>\r\n                </div>\r\n            </div>\r\n    \r\n            `)\r\n\r\n        });\r\n    }\r\n    (0,_cartCounter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cartCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartCounter */ \"./src/modules/cartCounter.js\");\n\r\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods');\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n    goodsWrapper.innerHTML = '';\r\n    goods.forEach(goodsItem => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=${goodsItem.id}>\r\n       ${goodsItem.sale ? ` <div class=\"card-sale\">🔥Hot Sale🔥</div>` : ``}\r\n            <div class=\"card-img-wrapper\">\r\n                  <span class=\"card-img-top\" style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n                <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n                <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                <button class=\"btn btn-primary\">В корзину</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        `)\r\n\r\n    });\r\n    (0,_cartCounter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n    const minInp = document.getElementById('min');\r\n    const maxInp = document.getElementById('max');\r\n    const checkInp = document.getElementById('discount-checkbox');\r\n    const checkMark = document.querySelector('.filter-check_checkmark')\r\n\r\n    const btnCatalog = document.querySelector('.catalog-button > button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n    const catalogModalItems = document.querySelectorAll('.catalog li');\r\n\r\n    let isOpen = false;\r\n    btnCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen\r\n        if (isOpen) {\r\n            catalogModal.style.display = 'block'\r\n        } else\r\n            catalogModal.style.display = ''\r\n    })\r\n\r\n    let categoryText = true;\r\n\r\n    catalogModalItems.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            categoryText = item.textContent;\r\n            debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)\r\n\r\n        })\r\n\r\n    })\r\n\r\n    const debounceFunc = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.debounce)((min = '', max = '', checkValue = false, searchValue = '', categoryText) => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.funcFilter)(data, min, max, checkValue, searchValue, categoryText))\r\n        })\r\n    }, 300)\r\n\r\n    searchInput.addEventListener('input', () => {\r\n        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)\r\n    });\r\n\r\n    minInp.addEventListener('input', (ev) => {\r\n        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)\r\n    })\r\n    maxInp.addEventListener('input', (ev) => {\r\n        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)\r\n    })\r\n    checkInp.addEventListener('input', (ev) => {\r\n        if (checkInp.checked) {\r\n            checkMark.classList.add('checked')\r\n        } else {\r\n            checkMark.classList.remove('checked')\r\n        };\r\n        debounceFunc(minInp.value, maxInp.value, checkInp.checked, searchInput.value, categoryText)\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;