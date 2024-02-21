import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'
import CourseDTO from '../../dto/CourseDTO'

export default class CreateCourseController{

    constructor(private createCourseService: CreateCourseService){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { name, description} = req.body
        const courseDTO = new CourseDTO(name, description)
        const createdCourse = await this.createCourseService.execute(courseDTO)

        return res.status(201).json(createdCourse)
    }
}