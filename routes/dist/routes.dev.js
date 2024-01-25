"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authMiddleware = require("../authMiddleware.js");

var _userController = require("../controllers/userController.js");

var _productController = require("../controllers/productController.js");

var _cartController = require("../controllers/cartController.js");

var _cartItemsController = require("../controllers/cartItemsController.js");

var _ordersController = require("../controllers/ordersController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // User Routes


router.post("/users/register", _userController.register);
router.post("/users/login", _userController.login); // Product Routes

router.get("/products", _productController.getProducts);
router.post("/products", _productController.createProduct); // cart routes

router.get("/cart/:userId", _cartController.getCart);
router.post("/cart/:userId", _cartController.createCart); // Cart Item Routes

router.post("/cart-items/:cartId/products/:productId", _cartItemsController.addProductToCart);
router.get("/cart-items/:cartId", _cartItemsController.getCartItems);
router.put("/cart-items/:cartId/:itemId", _cartItemsController.updateCartItem);
router["delete"]("/cart-items/:cartId/:itemId", _cartItemsController.removeCartItem); // Order Routes

router.post("/orders/:userId", _ordersController.createOrder);
router.get("/orders/:userId", _ordersController.getOrders);
var _default = router;
exports["default"] = _default;