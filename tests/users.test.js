const { app } = require("../src/server.js");
const request = require("supertest");

describe("users controller", () => {
  test("get all users route returns array of users", async () => {
    const response = await request(app).get("/users");

    expect(response.body.data.length).toBe(6);

    let expectedUsers = ["xander", "tom", "hanna", "reece", "brad", "hayden"];

    expect(response.body.data).toEqual(expect.arrayContaining(expectedUsers));
  });
  test("get by id route returns single user as object", async () => {
    let targetUserId = "12345";
    const response = await request(app).get("/users/" + targetUserId);

    expect(response.body.result.id).toBe(targetUserId);
    expect(response.body.result.username).toBe(
      "Pretend this username is from the database"
    );
  });
  test("user sign up route returns a single user as object", async () => {
    const response = await request(app).post("/users/signup").send({
      username: "jason",
      password: "pass",
    });

    expect(response.body.username).toBe("jason");
    expect(response.body.password).toBe("EncryptedPassword");
  });
  test.skip("user login route returns single user as object", async () => {
    const response = await request(app).post("/users/login").send({
      username: "jason",
      password: "pass",
    });
  });
  test.skip("user update route returns single user as object", async () => {
    const response = await request(app).patch("/users/12345").send({
      username: "jason",
      password: "pass",
    });
  });
  test.skip("delete user route returns a number of users deleted", async () => {
    const response = await request(app).delete("/users/12345").send({
      username: "jason",
      password: "pass",
    });
  });
});
