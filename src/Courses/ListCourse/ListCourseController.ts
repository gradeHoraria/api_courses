import { Request, Response } from "express"
import ListCourseService from "./ListCourseService"

export default class ListCourseController{

    constructor(private listCourseService: ListCourseService){}

    async handle(req: Request, res: Response): Promise<Response> {

        const listCourse = await this.listCourseService.execute()
        return res.status(200).json(listCourse)
    }
}