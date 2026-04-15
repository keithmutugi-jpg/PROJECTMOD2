// ================================
// KEITH TECH STORE - API LOADER
// ================================

// Public API (required objective)
const API_URL = "https://fakestoreapi.com/products/category/electronics";

// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

// Render products into your existing HTML structure
function renderProducts(products) {
    const container = document.querySelector(".menu-items");

    // safety check (IMPORTANT)
    if (!container) return;

    // DO NOT remove your static HTML, just append
    const dynamicHTML = products.map(product => {
        return `
        <div class="menu-item">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title.slice(0, 25)}</h3>
            <p>$${product.price}</p>
        </div>
        `;
    }).join("");

    container.innerHTML += dynamicHTML;
}

// Update stats (optional feature from MVP)
function updateStats(products) {
    const statBox = document.createElement("div");
    statBox.style.textAlign = "center";
    statBox.style.padding = "20px";
    statBox.style.color = "#38bdf8";

    statBox.innerHTML = `
        <h2>Total API Products: ${products.length}</h2>
    `;

    document.body.appendChild(statBox);
}

// Initialize app
async function init() {
    const products = await fetchProducts();
    renderProducts(products);
    updateStats(products);
}

// Run app
init();

// Export for testing (Node.js only)
if (typeof module !== "undefined") {
    module.exports = { fetchProducts };
}