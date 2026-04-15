import { formatCurrency, truncateText } from "./utils.js";

export function createProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-body">
                <div class="product-meta">
                    <span class="price-tag">${formatCurrency(product.price)}</span>
                    <span class="rating-tag">Rate ${product.rating?.rate ?? "N/A"}</span>
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
    selectElement.innerHTML = `
        <option value="all">All categories</option>
        ${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}
    `;
}

export function updateText(element, text) {
    element.textContent = text;
}
