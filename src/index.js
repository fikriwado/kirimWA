require("dotenv").config();
const expressLoader = require("./loaders/express");
const routeLoader = require("./loaders/routes");

async function startServer() {
  const app = expressLoader();
  await routeLoader(app);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`WhatsApp Gateway running on http://localhost:${PORT}`);
    console.log("Trusted IPs:", process.env.TRUSTED_IPS);
  });
}

startServer();
