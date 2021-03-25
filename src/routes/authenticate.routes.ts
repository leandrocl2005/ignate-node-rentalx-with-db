import { Router } from "express";
import { AuthenticateController } from "../modules/accounts/UseCases/authenticateUser/AuthenticateController";

const authenticateRoutes = Router();

const authenticationController = new AuthenticateController();

authenticateRoutes.post("/sessions", authenticationController.handle);

export { authenticateRoutes };
