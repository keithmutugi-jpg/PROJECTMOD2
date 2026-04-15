const API_URL = "https://fakestoreapi.com/products/category/electronics";

const container = document.querySelector(".menu-items");

async function loadProducts() {
    try {
        const res = await fetch(API_URL);
        const products = await res.json();

        container.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("menu-item");

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("API error:", error);
        container.innerHTML = "<p>Failed to load products</p>";
    }
}

loadProducts();