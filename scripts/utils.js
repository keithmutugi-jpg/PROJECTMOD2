export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
}

export function isTechProduct(product) {
    return product.category === "electronics";
}

export function getUniqueCategories(products) {
    return [...new Set(products.map((product) => product.category))];
}

export function filterProducts(products, searchTerm, category) {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(normalizedSearch);
        const matchesCategory = category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    });
}

export function getTopCategory(products) {
    if (!products.length) {
        return "No data";
    }

    const counts = {};

    for (const product of products) {
        if (!counts[product.category]) {
            counts[product.category] = 0;
        }

        counts[product.category] += 1;
    }

    let topCategory = "No data";
    let highestCount = 0;

    for (const category in counts) {
        if (counts[category] > highestCount) {
            highestCount = counts[category];
            topCategory = category;
        }
    }

    return topCategory;
}

export function getAveragePrice(products) {
    if (!products.length) {
        return 0;
    }

    let total = 0;

    for (const product of products) {
        total += product.price;
    }

    return total / products.length;
}

export function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength).trim()}...`;
}
