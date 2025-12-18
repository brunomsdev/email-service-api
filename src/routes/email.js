const express = require("express");
const router = express.Router();
const middlewareEmail = require("../middlewares/email");
const controllerEmail = require("../controllers/email");
const { authSecret } = require("../middlewares/global");

router.post(
  "/send",
  authSecret,
  middlewareEmail.validateSendEmail,
  controllerEmail.sendEmail
)

module.exports = router