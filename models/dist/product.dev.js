"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("../db.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Product =
/*#__PURE__*/
function () {
  function Product() {
    _classCallCheck(this, Product);
  }

  _createClass(Product, null, [{
    key: "getProducts",
    value: function getProducts() {
      var _ref, _ref2, rows;

      return regeneratorRuntime.async(function getProducts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT id, name, price, image FROM products"));

            case 2:
              _ref = _context.sent;
              _ref2 = _slicedToArray(_ref, 1);
              rows = _ref2[0];
              return _context.abrupt("return", rows);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "createProduct",
    value: function createProduct(name, price, image, quantity) {
      var _ref3, _ref4, result, _ref5, _ref6, newProduct;

      return regeneratorRuntime.async(function createProduct$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("INSERT INTO products (name, price, image, quantity) VALUES (?, ?, ?,?)", [name, price, image, quantity]));

            case 2:
              _ref3 = _context2.sent;
              _ref4 = _slicedToArray(_ref3, 1);
              result = _ref4[0];
              _context2.next = 7;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT * FROM products WHERE id = ?", [result.insertId]));

            case 7:
              _ref5 = _context2.sent;
              _ref6 = _slicedToArray(_ref5, 1);
              newProduct = _ref6[0];
              return _context2.abrupt("return", newProduct[0]);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getProductById",
    value: function getProductById(productId) {
      var _ref7, _ref8, rows;

      return regeneratorRuntime.async(function getProductById$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT * FROM products WHERE id = ?", [productId]));

            case 2:
              _ref7 = _context3.sent;
              _ref8 = _slicedToArray(_ref7, 1);
              rows = _ref8[0];
              return _context3.abrupt("return", rows[0]);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return Product;
}();

var _default = Product;
exports["default"] = _default;