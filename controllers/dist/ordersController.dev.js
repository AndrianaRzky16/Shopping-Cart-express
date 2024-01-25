"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrders = exports.createOrder = void 0;

var _orders = _interopRequireDefault(require("../models/orders.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createOrder = function createOrder(req, res) {
  var id;
  return regeneratorRuntime.async(function createOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.body.totalPrice === undefined || req.params.userId === undefined)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "Missing required parameters."
          }));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(_orders["default"].createOrder(req.body.totalPrice, req.params.userId));

        case 4:
          id = _context.sent;
          res.status(201).json({
            id: id
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createOrder = createOrder;

var getOrders = function getOrders(req, res) {
  var orders;
  return regeneratorRuntime.async(function getOrders$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_orders["default"].getOrdersByUserId(req.params.userId));

        case 2:
          orders = _context2.sent;
          res.json(orders);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getOrders = getOrders;