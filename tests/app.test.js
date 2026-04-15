const { fetchProducts } = require("../app");

describe("fetchProducts", () => {
    it("should return an array of products", async () => {
        const result = await fetchProducts();

        expect(Array.isArray(result)).toBe(true);
    });
});