const Users = require("../modal/users");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }
  jwt.verify(token, process.env.JWT_TOKEN_PASSWORD, (err, user) => {
    if (err || !user) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user;
    next();
  });
};
