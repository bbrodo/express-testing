const { app } = require("../src/server.js");
const request = require("supertest");

describe("root route works", () => {
  test("server returns a 'hello world' message", async () => {
    const response = await request(app).get("/");

    expect(response.body.message).toBe("hello world");
    expect(response.statusCode).toBe(200);
  });

  test("server returns a response with no auth headers because we are not sending auth data", async () => {
    const response = await request(app).get("/");

    expect(response.headers["Authorization"]).toBeFalsy();
  });
});
