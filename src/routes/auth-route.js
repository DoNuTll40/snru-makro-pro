
const express = require("express");
const router = express.Router();

router.post("/register", () => {});
router.post("/login", () => {});
router.post("/forget-password", () => {});
router.get("/forget-password/:token", () => {});
router.post("/reset-password", () => {});

module.exports = router;