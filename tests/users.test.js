const { app } = require("../src/server.js");
const request = require("supertest");

describe("users controller", () => { 
    test('get all users route returns array of users', async () => {
        const response = await request(app).get("/users")
    })
    test('get by id route returns single user as object', async () => {
        let targetUserId = "12345"
        const response = await request(app).get("/users/" + targetUserId)
    })
    test('user sign up route returns a single user as object', async () => {
        const response = await request(app).post("/users/signup").send({
                username: "jason", 
                password: "pass"
            })
    })
    test('user login route returns single user as object', async () => {
        const response = await request(app).post("/users/login").send({
            username: "jason", 
            password: "pass"
        })
    })
    test('user update route returns single user as object', async () => {
        const response = await request(app).patch("/users/12345").send({
            username: "jason", 
            password: "pass"
        })
    })
    test('delete user route returns a number of users deleted', async () => {
        const response = await request(app).delete("/users/12345").send({
            username: "jason", 
            password: "pass"
        })
    })
})