var express = require("express");
var router = express.Router();
const usersController = require("../controllers/users");
const expressValidator = require("express-validator");

const userValidator = [
  expressValidator.check("firstName").isLength({ min: 3 }).isAlpha(),
  expressValidator.check("lastName").isLength({ min: 3 }).isAlpha(),
  expressValidator.check("age").isInt({ min: 0, max: 125 }),
  expressValidator.check("dni").isIdentityCard("ES"),
  expressValidator.check("birthday").isISO8601(),
  expressValidator.check("color").isHexColor(),
  expressValidator
    .check("genre")
    .isIn(["Hombre", "Mujer", "Otro", "No Especificado"]),
];

router.get("/", usersController.getUsers);

router.post("/", userValidator, usersController.createUser);

router.put("/:id", userValidator, usersController.updateUser);

router.delete("/:id", usersController.deleteUser);

module.exports = router;
