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

module.exports = router;
