import jwt from "jsonwebtoken";

const AuthenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default AuthenticateToken;
