exports.handleRoot = (req, res) => {
  res.json({
    status: "running",
    service: "kirimWA - WhatsApp Gateway API",
    version: "1.0.0",
    uptime: process.uptime(),
  });
};

exports.handle404 = (req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
    suggestion: "Check /api documentation for available endpoints",
  });
};
