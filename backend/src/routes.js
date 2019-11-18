const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const UserController = require("./controllers/UserController");
const TheaterController = require("./controllers/TheaterController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/users", UserController.store);

routes.get("/theaters", TheaterController.index);
routes.get("/theaters/:id", TheaterController.show);
routes.post("/theaters", TheaterController.store);
routes.post("/theaters/:session_id", TheaterController.store);
routes.put("/theaters/:id", TheaterController.update);
routes.delete("/theaters/:id", TheaterController.destroy);

routes.get("/sessions", SessionController.index);
routes.get("/sessions/:id", SessionController.show);
routes.post("/sessions", upload.single("thumbnail"), SessionController.store);

module.exports = routes;
