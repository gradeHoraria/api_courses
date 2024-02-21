import { Request, Response } from 'express'
import DeleteCourseService from './DeleteCourseService'

export default class DeleteCourseController{

    constructor(private deleteCourseService: DeleteCourseService){}

    async handle(req: Request, res: Response): Promise<Response>{
        const id  = req.params.id
        await this.deleteCourseService.execute(id)

        return res.status(204).send()
    }
}