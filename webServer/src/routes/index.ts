import express from "express";

import clientRouter from "./client.route";

const router = express.Router();

const prefixRoute = "/ExpressTS";

router.use(prefixRoute + "/clients", clientRouter);

export default router;
