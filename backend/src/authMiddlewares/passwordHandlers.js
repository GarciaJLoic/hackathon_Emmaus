const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const HashPassword = async (req, res, next) => {
  const passwordTOHash = req.body.password;
  const hashedPassword = await argon2.hash(passwordTOHash, hashingOptions);
  req.body.hashedPassword = hashedPassword;
  delete req.body.password;
  next();
};

const DeHashPassword = async (req, res, next) => {
  try {
    const decoding = await argon2.verify(
      req.userDb.hashedPassword,
      req.body.password
    );
    delete req.body;
    delete req.userDb.hashedPassword;
    // decoding ? next() : res.sendStatus(403);
    // decoding ? next() : res.sendStatus(403);
    if (decoding === true) {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  HashPassword,
  DeHashPassword,
};
