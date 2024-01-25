"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("../db.js");

var _user = _interopRequireDefault(require("./user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart =
/*#__PURE__*/
function () {
  function Cart() {
    _classCallCheck(this, Cart);
  }

  _createClass(Cart, null, [{
    key: "getCartByUserId",
    value: function getCartByUserId(userId) {
      var _ref, _ref2, rows;

      return regeneratorRuntime.async(function getCartByUserId$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT * FROM carts WHERE user_id = ?", [userId]));

            case 2:
              _ref = _context.sent;
              _ref2 = _slicedToArray(_ref, 1);
              rows = _ref2[0];
              return _context.abrupt("return", rows[0]);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "createCart",
    value: function createCart(userId) {
      var _ref3, _ref4, result;

      return regeneratorRuntime.async(function createCart$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("INSERT INTO carts (user_id) VALUES (?)", [userId]));

            case 2:
              _ref3 = _context2.sent;
              _ref4 = _slicedToArray(_ref3, 1);
              result = _ref4[0];
              return _context2.abrupt("return", result.insertId);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return Cart;
}();

var _default = Cart;
exports["default"] = _default;