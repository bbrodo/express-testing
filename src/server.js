const express = require("express");

const app = express();

app.use(express.json())

app.get("/", (request, response) => {
  response.json({
    message: "hello world",
  });
});

const UserController = require("./Controllers/UserController.js");
app.use("/users", UserController);

app.use((error, request, response, next) => {
  console.log("server threw an error with message: " + error.message)

  response.json({
    status: 500,
    error: error.message,
    errorFull: JSON.stringify(error)
  })
})

module.exports = {
  app,
};
