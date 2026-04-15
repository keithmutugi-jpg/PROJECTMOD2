// ================================
// BASIC UNIT TEST (JEST STYLE)
// ================================

const { fetchProducts } = require("../app");

test("fetchProducts returns an array", async () => {
    const data = await fetchProducts();
    expect(Array.isArray(data)).toBe(true);
});