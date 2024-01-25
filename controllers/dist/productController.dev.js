"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = exports.getProducts = void 0;

var _product = _interopRequireDefault(require("../models/product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getProducts = function getProducts(req, res) {
  var products;
  return regeneratorRuntime.async(function getProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_product["default"].getProducts());

        case 2:
          products = _context.sent;
          res.json(products);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getProducts = getProducts;

var createProduct = function createProduct(req, res) {
  var product;
  return regeneratorRuntime.async(function createProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!req.body.name || !req.body.price || !req.body.image || !req.body.quantity)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: "Missing required fields"
          }));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(_product["default"].createProduct(req.body.name, req.body.price, req.body.image, req.body.quantity));

        case 4:
          product = _context2.sent;
          res.status(201).json(product);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.createProduct = createProduct;