import { getUser } from "../service/auth.js";

function checkForAuthentication(req, res, next) {
  req.user = null;
  
  const token = req.cookies?.token;
  if (!token) return next();
  const user = getUser(token);

  req.user = user;
  next();
}

function accessTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
    next();
  };
}

export { checkForAuthentication, accessTo };
