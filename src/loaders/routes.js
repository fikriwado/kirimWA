const apiRoutes = require("../api");

module.exports = async function (app) {
  // API Routes
  app.use("/api/v1", apiRoutes.v1());

  // 404 Handler
  app.use((req, res) => {
    res.status(404).json({
      error: "Endpoint not found",
      suggestion: "Check /api documentation for available endpoints",
    });
  });

  // Error Handler
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
      error: "Internal server error",
    });
  });
};
