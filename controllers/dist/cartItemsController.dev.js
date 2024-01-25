"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCartItem = exports.updateCartItem = exports.getCartItems = exports.addProductToCart = void 0;

var _cart_item = _interopRequireDefault(require("../models/cart_item.js"));

var _product = _interopRequireDefault(require("../models/product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// cartItemController.js
var addProductToCart = function addProductToCart(req, res) {
  var productId, cartId, quantity, productExists, id;
  return regeneratorRuntime.async(function addProductToCart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          productId = req.params.productId;
          cartId = req.params.cartId;
          quantity = req.body.quantity; // Check if the product exists

          _context.next = 5;
          return regeneratorRuntime.awrap(_product["default"].getProductById(productId));

        case 5:
          productExists = _context.sent;

          if (productExists) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            message: "Product not found"
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(_cart_item["default"].addProductToCart(productId, cartId, quantity));

        case 10:
          id = _context.sent;
          res.status(201).json({
            id: id
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.addProductToCart = addProductToCart;

var getCartItems = function getCartItems(req, res) {
  var cartItems;
  return regeneratorRuntime.async(function getCartItems$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_cart_item["default"].getCartItemsByCartId(req.params.cartId));

        case 2:
          cartItems = _context2.sent;
          res.json(cartItems);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getCartItems = getCartItems;

var updateCartItem = function updateCartItem(req, res) {
  var itemId, quantity, cartItemExists;
  return regeneratorRuntime.async(function updateCartItem$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          itemId = req.params.itemId;
          quantity = req.body.quantity; // Check if the cart item exists

          _context3.next = 4;
          return regeneratorRuntime.awrap(_cart_item["default"].getCartItemById(itemId));

        case 4:
          cartItemExists = _context3.sent;

          if (cartItemExists) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "Cart item not found"
          }));

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(_cart_item["default"].updateCartItemQuantity(itemId, quantity));

        case 9:
          res.json({
            message: "Cart item updated successfully!"
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.updateCartItem = updateCartItem;

var removeCartItem = function removeCartItem(req, res) {
  var itemId, cartItemExists;
  return regeneratorRuntime.async(function removeCartItem$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          itemId = req.params.itemId; // Check if the cart item exists

          _context4.next = 3;
          return regeneratorRuntime.awrap(_cart_item["default"].getCartItemById(itemId));

        case 3:
          cartItemExists = _context4.sent;

          if (cartItemExists) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "Cart item not found"
          }));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_cart_item["default"].removeCartItem(itemId));

        case 8:
          res.json({
            message: "Cart item removed successfully!"
          });

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.removeCartItem = removeCartItem;