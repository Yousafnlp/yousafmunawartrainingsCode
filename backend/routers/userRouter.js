import express from "express";
import { controller, saveForm} from "../controllers/userController.js";

 

const router = express.Router()

router.get("/hello",controller);

router.post("/register", saveForm);

export default router