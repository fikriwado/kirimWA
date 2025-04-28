require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ipWhitelist = require("./middlewares/ip-whitelist");
const internalAuth = require("./middlewares/internal-auth");
const { handleRoot, handle404 } = require("./services/endpoint");

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// Security middlewares
app.use(ipWhitelist);
app.use(internalAuth);

// Service endpoints
app.get("/", handleRoot);
app.use(handle404);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`WhatsApp Gateway running on http://localhost:${PORT}`);
  console.log("Trusted IPs:", process.env.TRUSTED_IPS);
});
