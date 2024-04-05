import Controller from "interfaces/controller.interface";
import { Request, Response, NextFunction, Router } from "express";

class UserController implements Controller {
  public path = "/users";
  public router = Router();
}
