import { Router } from "express"
import { createCourseController, editCourseController, deleteCourseController, listCoursesController, viewCourseController, getTokenController} from "../Courses"
import keycloak from "./security"

const routes = Router()

routes.get("/", keycloak.protect(), (req, res) => {
    listCoursesController.handle(req, res)
})

routes.get("/:id", keycloak.protect(), (req, res) => {
    viewCourseController.handle(req, res)
})

routes.post("/", keycloak.protect(), (req, res) => {
    createCourseController.handle(req, res)
})

routes.put("/:id", keycloak.protect(), (req, res) => {
    editCourseController.handle(req, res)
})

routes.delete("/:id", keycloak.protect(), (req, res) => {
    deleteCourseController.handle(req, res)
})

export default routes