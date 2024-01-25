"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = _interopRequireDefault(require("../models/user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(req, res) {
  var _req$body, name, email, password, newUser, token;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.next = 4;
          return regeneratorRuntime.awrap(_user["default"].createUser(name, email, password));

        case 4:
          newUser = _context.sent;
          // Generate a JWT token
          token = _jsonwebtoken["default"].sign({
            id: newUser
          }, process.env.TOKEN_SECRET, {
            expiresIn: "1h"
          });
          res.json({
            token: token
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.register = register;

var login = function login(req, res) {
  var _req$body2, email, password, user, isPasswordValid, providedToken, token, decoded;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_user["default"].getUserByEmail(email));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            message: "Invalid email or password"
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(_user["default"].checkPassword(password, user.password));

        case 9:
          isPasswordValid = _context2.sent;

          if (isPasswordValid) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            message: "Invalid email or password"
          }));

        case 12:
          providedToken = req.headers.authorization;

          if (providedToken) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            message: "Token not provided"
          }));

        case 15:
          // Extract the token from the "Bearer YOUR_TOKEN" format
          token = providedToken.split(" ")[1];
          console.log("Token: ".concat(token));

          try {
            // Verify the extracted token
            decoded = _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET); // You can add additional checks here if needed, like checking if the decoded user id matches the user from the database

            res.json({
              message: "Login successful",
              user: decoded
            });
          } catch (verifyError) {
            res.status(401).json({
              message: "Invalid token"
            });
          }

          _context2.next = 23;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

exports.login = login;