const router = require("express").Router();
const userCtrl = require("./userCtrl");

router.post("/register", userCtrl.registerUser);
router.post("/login", userCtrl.loginUser);
router.get("/verify", userCtrl.verifiedToken);

module.exports = router;
