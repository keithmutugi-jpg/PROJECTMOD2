const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Could not load products from the API.");
    }

    return response.json();
}
