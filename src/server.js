const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "hello world",
  });
});

module.exports = {
    app
}