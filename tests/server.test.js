const { app } = require("../src/server.js");
const request = require("supertest");

describe("root route works", () => {
  test("server returns a 'hello world' message", async () => {
    const response = await request(app).get("/");

    expect(response.body.message).toBe("hello world");
  });
});
