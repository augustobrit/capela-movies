const express = require("express");

const TheaterController = require("./controllers/TheaterController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/theaters", TheaterController.index);
routes.get("/theaters/:id", TheaterController.show);
routes.post("/theaters", TheaterController.store);
routes.post("/theaters/:session_id", TheaterController.store);
routes.put("/theaters/:id", TheaterController.update);
routes.delete("/theaters/:id", TheaterController.destroy);

routes.get("/sessions", SessionController.index);
routes.get("/sessions/:id", SessionController.show);
routes.post("/sessions", SessionController.store);

module.exports = routes;
