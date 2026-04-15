import { fetchProducts } from "./api.js";
import { renderProducts, renderCategoryOptions, updateText } from "./ui.js";
import {
    filterProducts,
    formatCurrency,
    getAveragePrice,
    getTopCategory,
    getUniqueCategories
} from "./utils.js";
import "./nav.js";

const productGrid = document.querySelector("#product-grid");
const feedbackMessage = document.querySelector("#feedback-message");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const productCount = document.querySelector("#product-count");
const categoryCount = document.querySelector("#category-count");
const topCategory = document.querySelector("#top-category");
const averagePrice = document.querySelector("#average-price");
const dataStatus = document.querySelector("#data-status");

let allProducts = [];

function refreshDisplay() {
    const visibleProducts = filterProducts(allProducts, searchInput.value, categoryFilter.value);

    renderProducts(productGrid, visibleProducts);
    updateText(productCount, String(visibleProducts.length));
    updateText(averagePrice, formatCurrency(getAveragePrice(visibleProducts)));

    if (visibleProducts.length) {
        updateText(feedbackMessage, `Showing ${visibleProducts.length} product(s).`);
    } else {
        updateText(feedbackMessage, "No products match your search right now.");
    }
}

async function startApp() {
    try {
        updateText(dataStatus, "Loading");
        allProducts = await fetchProducts();

        const categories = getUniqueCategories(allProducts);
        renderCategoryOptions(categoryFilter, categories);
        renderProducts(productGrid, allProducts);

        updateText(productCount, String(allProducts.length));
        updateText(categoryCount, String(categories.length));
        updateText(topCategory, getTopCategory(allProducts));
        updateText(averagePrice, formatCurrency(getAveragePrice(allProducts)));
        updateText(dataStatus, "Ready");
        updateText(feedbackMessage, "Products loaded successfully.");
    } catch (error) {
        updateText(dataStatus, "Error");
        updateText(feedbackMessage, error.message);
        productGrid.innerHTML = "";
    }
}

searchInput.addEventListener("input", refreshDisplay);
categoryFilter.addEventListener("change", refreshDisplay);

startApp();
