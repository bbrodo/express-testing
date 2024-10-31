const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.json({
    data: ["xander", "tom", "hanna", "reece", "brad", "hayden"],
  });
});

router.post("/signup", async (request, response) => {
    let recievedUserData = request.body

    recievedUserData.password = "EncryptedPassword"

    let placeholderDatabaseResult = {...recievedUserData}

    response.json(placeholderDatabaseResult)
})

module.exports = router;
