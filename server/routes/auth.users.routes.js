const express = require("express");
const { createAuthUser, loginAuthUser } = require("../controllers/athuUserController");

const router = express.Router();
// create user post
router.post("/users/register",createAuthUser)
router.post("/users/login",loginAuthUser)
module.exports = router;