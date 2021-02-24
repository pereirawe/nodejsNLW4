import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create)
router.post("/surveys", surveysController.create)

router.get("/users", userController.show)
router.get("/surveys", surveysController.show)

// TODO:
// router.delete("/surveys", surveysController.delete)

export { router };
