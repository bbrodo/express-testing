const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "hello world",
  });
});

const UserController = require("./Controllers/UserController.js");
app.use("/users", UserController);

module.exports = {
  app,
};
