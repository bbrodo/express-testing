const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    data: ["xander", "tom", "hanna", "reece", "brad", "hayden"],
  });
});

router.post("/signup", async (request, response) => {
  let recievedUserData = request.body;

  recievedUserData.password = "EncryptedPassword";

  let placeholderDatabaseResult = { ...recievedUserData };

  response.json(placeholderDatabaseResult);
});

router.get("/:userid", async (request, response) => {
  let targetUserId = request.params.userid;

  response.json({
    result: {
      id: targetUserId,
      username: "Pretend this username is from the database",
    },
  });
});

router.post("/login", async (request, response, next) => {
    let authHeaderData = request.headers["authorization"]

    console.log(authHeaderData)

    if (authHeaderData != "Example string for header value") {
        return next(new Error("Not valid login data"))
    }

    response.json({
        authHeaderData
    })
})

module.exports = router;
