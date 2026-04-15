export function formatCurrency(amount) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(amount);
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

    const counts = products.reduce((totals, product) => {
        const nextTotal = (totals[product.category] || 0) + 1;
        return { ...totals, [product.category]: nextTotal };
    }, {});

    return Object.entries(counts).sort((first, second) => second[1] - first[1])[0][0];
}

export function getAveragePrice(products) {
    if (!products.length) {
        return 0;
    }

    const total = products.reduce((sum, product) => sum + product.price, 0);
    return total / products.length;
}

export function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) {
        return text;
    }

    return `${text.slice(0, maxLength).trim()}...`;
}
