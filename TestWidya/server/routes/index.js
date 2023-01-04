const router = require("express").Router();
const Controller = require("../controllers/controller");
const authenticator = require("../middlewares/aunthentication");
const errors = require("../middlewares/errors");

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.use(authenticator);

router.get("/products", Controller.findAllProduct);

router.get("/users/:id", Controller.findUser);

router.delete("/products/:id", Controller.deleteProduct);

router.put("/products/:id", Controller.updateProduct);

router.post("/products", Controller.addProduct);

router.use(errors);

module.exports = router;
