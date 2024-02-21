import { Request, Response } from "express"
import EditCourseService from "./EditCourseService"
import CourseDTO from "../../dto/CourseDTO"

export default class EditCourseController{

    constructor(private editCourseService: EditCourseService){}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body

        const id = req.params.id
        const courseDTO = new CourseDTO(name, description)
        const courseEdit = await this.editCourseService.execute(id, courseDTO)

        return res.status(200).send(courseEdit)
    }
}