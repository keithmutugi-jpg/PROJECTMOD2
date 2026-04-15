import { formatCurrency, truncateText } from "./utils.js";

export function createProductCard(product) {
    const rating = product.rating ? product.rating.rate : "N/A";

    return `
        <article class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-body">
                <div class="product-meta">
                    <span class="price-tag">${formatCurrency(product.price)}</span>
                    <span class="rating-tag">Rate ${rating}</span>
                </div>
                <h3>${product.title}</h3>
                <p>${truncateText(product.description, 110)}</p>
            </div>
        </article>
    `;
}

export function renderProducts(container, products) {
    container.innerHTML = products.map(createProductCard).join("");
}

export function renderCategoryOptions(selectElement, categories) {
    let options = '<option value="all">All categories</option>';

    for (const category of categories) {
        options += `<option value="${category}">${category}</option>`;
    }

    selectElement.innerHTML = options;
}

export function updateText(element, text) {
    element.textContent = text;
}
