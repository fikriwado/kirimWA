const trustedIps = require("../config/trusted-ips");

module.exports = (req, res, next) => {
  const clientIp = req.ip;

  if (!trustedIps.includes(clientIp)) {
    console.warn(`Blocked request from untrusted IP: ${clientIp}`);
    return res.status(403).json({
      error: "IP not allowed",
      yourIp: clientIp,
      allowedIps: trustedIps,
    });
  }

  next();
};
