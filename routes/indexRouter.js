const indexController = require("../controllers/indexController");
const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/new", indexController.indexNewGet);
indexRouter.post("/new", indexController.indexNewPost);

module.exports = indexRouter;
