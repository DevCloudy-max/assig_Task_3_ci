const request = require("supertest");
const app = require("../server");

describe("Integration Testing - REST API", () => {
    test("GET /api/items - should return a list of items", async () => {
        const response = await request(app).get("/api/items");
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("POST /api/items - should add a new item", async () => {
        const newItem = { name: "Item 2" };
        const response = await request(app).post("/api/items").send(newItem);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(newItem.name);
    });
});
