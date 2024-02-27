import { Router } from "express";
import { getTokenController } from "../Courses";

const routesPublic = Router()

routesPublic.post("/token", (req, res) => {
    getTokenController.handle(req, res)
})

export default routesPublic