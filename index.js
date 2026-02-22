const express = require("express");
const router = express.Router();

const user = require("./controllers/userController");
const wallet = require("./controllers/walletController");
const order = require("./controllers/orderController");
const transfer = require("./controllers/transferController");

router.post("/users", user.createUser);
router.get("/users", user.getUsers);
router.delete("/users/:id", user.deleteUser);

router.post("/wallets", wallet.postWallets);
router.get("/wallets", wallet.getWallets);

router.post("/orders", order.createOrder);
router.get("/orders", order.getOrders);

router.post("/transfer", transfer.transfer);

module.exports = router;