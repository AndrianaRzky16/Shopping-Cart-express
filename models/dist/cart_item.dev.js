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

var CartItem =
/*#__PURE__*/
function () {
  function CartItem() {
    _classCallCheck(this, CartItem);
  }

  _createClass(CartItem, null, [{
    key: "addProductToCart",
    value: function addProductToCart(productId, cartId, quantity) {
      var _ref, _ref2, productRows, _ref3, _ref4, result;

      return regeneratorRuntime.async(function addProductToCart$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT * FROM products WHERE id = ?", [productId]));

            case 2:
              _ref = _context.sent;
              _ref2 = _slicedToArray(_ref, 1);
              productRows = _ref2[0];

              if (!(productRows.length === 0)) {
                _context.next = 7;
                break;
              }

              throw new Error("Product does not exist");

            case 7:
              _context.next = 9;
              return regeneratorRuntime.awrap(_db.pool.execute("INSERT INTO cart_items (product_id, cart_id, quantity) VALUES (?, ?, ?)", [productId, cartId, quantity]));

            case 9:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 1);
              result = _ref4[0];
              return _context.abrupt("return", result.insertId);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "getCartItemsByCartId",
    value: function getCartItemsByCartId(cartId) {
      var _ref5, _ref6, rows;

      return regeneratorRuntime.async(function getCartItemsByCartId$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT * FROM cart_items WHERE cart_id = ?", [cartId]));

            case 2:
              _ref5 = _context2.sent;
              _ref6 = _slicedToArray(_ref5, 1);
              rows = _ref6[0];
              return _context2.abrupt("return", rows);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "updateCartItemQuantity",
    value: function updateCartItemQuantity(id, quantity) {
      return regeneratorRuntime.async(function updateCartItemQuantity$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("UPDATE cart_items SET quantity = ? WHERE id = ?", [quantity, id]));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "removeCartItem",
    value: function removeCartItem(id) {
      return regeneratorRuntime.async(function removeCartItem$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("DELETE FROM cart_items WHERE id = ?", [id]));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "getCartItemById",
    value: function getCartItemById(itemId) {
      var _ref7, _ref8, rows;

      return regeneratorRuntime.async(function getCartItemById$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_db.pool.execute("SELECT * FROM cart_items WHERE id = ?", [itemId]));

            case 2:
              _ref7 = _context5.sent;
              _ref8 = _slicedToArray(_ref7, 1);
              rows = _ref8[0];
              return _context5.abrupt("return", rows[0]);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return CartItem;
}();

var _default = CartItem;
exports["default"] = _default;