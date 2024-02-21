import { Request, Response } from "express"
import ViewCourseService from "./ViewCourseService"

export default class ViewCourseController{

    constructor(private viewCourseService: ViewCourseService){}

    async handle(req: Request, res: Response): Promise<Response>{
        const id = req.params.id
        const course =  await this.viewCourseService.execute(id)

        return res.status(200).json(course)
    }
}