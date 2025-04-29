const express = require("express");
const bodyParser = require("body-parser");
const ipWhitelist = require("../middlewares/ip-whitelist");
const internalAuth = require("../middlewares/internal-auth");

module.exports = function () {
  const app = express();

  // Middlewares
  app.use(bodyParser.json());
  app.use(ipWhitelist);
  app.use(internalAuth);

  // Basic routes
  app.get("/", (req, res) =>
    res.json({
      status: "running",
      service: "kirimWA - WhatsApp Gateway API",
      version: "1.0.0",
      uptime: process.uptime(),
    })
  );

  return app;
};
