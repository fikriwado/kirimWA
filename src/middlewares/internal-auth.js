module.exports = (req, res, next) => {
  const internalSecret = req.headers["x-internal-secret"];

  if (internalSecret !== process.env.INTERNAL_SECRET) {
    console.warn("Invalid internal secret provided");
    return res.status(401).json({
      error: "Invalid authentication",
      hint: "Set X-Internal-Secret header",
    });
  }

  next();
};
