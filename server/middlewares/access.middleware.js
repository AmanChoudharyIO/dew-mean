const httpError = require('http-errors');

const accessMiddleware = function (req, res, next) {
  if (req.user && req.user.roles.indexOf('admin') > -1)
    return next();
  const err = new httpError(401);
  return next(err);
}

module.exports = accessMiddleware;
