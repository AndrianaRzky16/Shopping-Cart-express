"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateToken = authenticateToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// authMiddleware.js
function authenticateToken(req, res, next) {
  var authHeader = req.headers["authorization"];
  var token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token

  _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET, function (err, user) {
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
}