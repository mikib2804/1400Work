import express from "express";

import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/client.controller";

const clientRouter = express.Router();

clientRouter.get("/", getClients);
clientRouter.post("/", createClient);
clientRouter.put("/:id", updateClient);
clientRouter.delete("/:id", deleteClient);

export default clientRouter;
