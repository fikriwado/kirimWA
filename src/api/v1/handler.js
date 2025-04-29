exports.createInstance = (req, res) => {
  res.json({
    status: "create instance",
    service: "kirimWA - WhatsApp Gateway API",
    version: "1.0.0",
    uptime: process.uptime(),
  });
};

exports.getInstanceStatus = (req, res) => {
  res.json({
    status: "get instance status",
    service: "kirimWA - WhatsApp Gateway API",
    version: "1.0.0",
    uptime: process.uptime(),
  });
};
