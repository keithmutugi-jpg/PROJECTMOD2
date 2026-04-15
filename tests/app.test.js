// simple unit test for products API
const { fetchProducts } = require("../app");

describe("fetchProducts", () => {
    it("should return an array of products", async () => {
        const result = await fetchProducts();

        // just checking we actually get data back in array form
        expect(Array.isArray(result)).toBe(true);
    });
});