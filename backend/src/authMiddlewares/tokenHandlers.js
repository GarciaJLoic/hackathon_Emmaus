const jwt = require("jsonwebtoken");

const maxAge = 1 * 1 * 60 * 60 * 3600;

const createToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

const sendToken = async (req, res) => {
  const payload = { sub: req.userDb.id };
  try {
    const token = createToken(payload);
    // token ? res.send({ token, user: req.userDb }) : res.sendStatus(500);
    if (token !== null) {
      res.send({ token, user: req.userDb });
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.error(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = { sendToken, verifyToken };
