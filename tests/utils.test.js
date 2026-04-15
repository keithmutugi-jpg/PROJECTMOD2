import test from "node:test";
import assert from "node:assert/strict";
import {
    filterProducts,
    formatCurrency,
    getAveragePrice,
    isTechProduct,
    getTopCategory,
    getUniqueCategories,
    truncateText
} from "../scripts/utils.js";

const sampleProducts = [
    { title: "Laptop Pro", category: "electronics", price: 100, description: "Fast laptop" },
    { title: "Phone Max", category: "electronics", price: 50, description: "Smart phone" },
    { title: "Leather Bag", category: "fashion", price: 150, description: "Stylish bag" }
];

test("formatCurrency returns a USD string", () => {
    assert.equal(formatCurrency(25), "$25.00");
});

test("isTechProduct returns true only for electronics items", () => {
    assert.equal(isTechProduct(sampleProducts[0]), true);
    assert.equal(isTechProduct(sampleProducts[2]), false);
});

test("getUniqueCategories returns distinct categories", () => {
    assert.deepEqual(getUniqueCategories(sampleProducts), ["electronics", "fashion"]);
});

test("filterProducts filters by search term and category", () => {
    const filtered = filterProducts(sampleProducts, "phone", "electronics");
    assert.equal(filtered.length, 1);
    assert.equal(filtered[0].title, "Phone Max");
});

test("getTopCategory returns the most common category", () => {
    assert.equal(getTopCategory(sampleProducts), "electronics");
});

test("getAveragePrice calculates the mean price", () => {
    assert.equal(getAveragePrice(sampleProducts), 100);
});

test("truncateText shortens long descriptions", () => {
    assert.equal(truncateText("abcdefghij", 5), "abcde...");
});
