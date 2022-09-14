const { Router } = require("express")
const { addUser, loginUser, getUsers } = require("../controllers/userConterollers")

const router = Router();
router.post("/register", addUser).post("/login", loginUser)
router.get("/", getUsers)

module.exports =router