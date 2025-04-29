const express = require("express");

const v1 = () => {
  const router = express.Router();
  router.use(require("./v1"));
  return router;
};

module.exports = { v1 };
