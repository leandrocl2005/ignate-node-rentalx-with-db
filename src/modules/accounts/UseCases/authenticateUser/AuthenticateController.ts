import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUseCase = container.resolve(AuthenticateUseCase);

    const token = await authenticateUseCase.execute({ password, email });

    return response.json(token);
  }
}

export { AuthenticateController };
