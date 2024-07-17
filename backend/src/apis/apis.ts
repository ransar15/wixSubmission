import { Router } from "express";
import { testRouter } from "./test.api";

const mainRouter = Router();

mainRouter.use('/test', testRouter);

export { mainRouter };
