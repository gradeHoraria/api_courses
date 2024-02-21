import { Router } from "express"
import { createCourseController, editCourseController, deleteCourseController, listCoursesController, viewCourseController } from "../Courses"
const routes = Router()

routes.get("/", (req, res) => {
    listCoursesController.handle(req, res)
})

routes.get("/:id", (req, res) => {
    viewCourseController.handle(req, res)
})

routes.post("/", (req, res) => {
    createCourseController.handle(req, res)
})

routes.put("/:id", (req, res) => {
    editCourseController.handle(req, res)
})

routes.delete("/:id", (req, res) => {
    deleteCourseController.handle(req, res)
})

export default routes