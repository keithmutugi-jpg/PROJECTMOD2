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

const elements = {
    productGrid: document.querySelector("#product-grid"),
    feedbackMessage: document.querySelector("#feedback-message"),
    searchInput: document.querySelector("#search-input"),
    categoryFilter: document.querySelector("#category-filter"),
    productCount: document.querySelector("#product-count"),
    categoryCount: document.querySelector("#category-count"),
    topCategory: document.querySelector("#top-category"),
    averagePrice: document.querySelector("#average-price"),
    dataStatus: document.querySelector("#data-status")
};

let allProducts = [];

function showProducts(products) {
    renderProducts(elements.productGrid, products);
    updateText(elements.productCount, String(products.length));
    updateText(elements.averagePrice, formatCurrency(getAveragePrice(products)));

    if (products.length) {
        updateText(elements.feedbackMessage, `Showing ${products.length} product(s).`);
    } else {
        updateText(elements.feedbackMessage, "No products match your search right now.");
    }
}

function updateSummary(products, categories) {
    updateText(elements.productCount, String(products.length));
    updateText(elements.categoryCount, String(categories.length));
    updateText(elements.topCategory, getTopCategory(products));
    updateText(elements.averagePrice, formatCurrency(getAveragePrice(products)));
}

function refreshDisplay() {
    const searchTerm = elements.searchInput.value;
    const selectedCategory = elements.categoryFilter.value;
    const visibleProducts = filterProducts(allProducts, searchTerm, selectedCategory);

    showProducts(visibleProducts);
}

async function startApp() {
    try {
        updateText(elements.dataStatus, "Loading");
        allProducts = await fetchProducts();

        const categories = getUniqueCategories(allProducts);
        renderCategoryOptions(elements.categoryFilter, categories);
        showProducts(allProducts);
        updateSummary(allProducts, categories);

        updateText(elements.dataStatus, "Ready");
        updateText(elements.feedbackMessage, "Products loaded successfully.");
    } catch (error) {
        updateText(elements.dataStatus, "Error");
        updateText(elements.feedbackMessage, error.message);
        elements.productGrid.innerHTML = "";
    }
}

elements.searchInput.addEventListener("input", refreshDisplay);
elements.categoryFilter.addEventListener("change", refreshDisplay);

startApp();
