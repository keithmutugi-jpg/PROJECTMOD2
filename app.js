const API_URL = "https://fakestoreapi.com/products/category/electronics";

const productContainer = document.querySelector(".menu-items");

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        productContainer.innerHTML = "";

        data.forEach(item => {
            const productCard = document.createElement("div");
            productCard.classList.add("menu-item");

            productCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
            `;

            productContainer.appendChild(productCard);
        });

    } catch (err) {
        console.log("Something went wrong while loading products:", err);

        productContainer.innerHTML = `
            <p style="text-align:center; padding:20px;">
                Could not load products. Please try again later.
            </p>
        `;
    }
}

loadProducts();