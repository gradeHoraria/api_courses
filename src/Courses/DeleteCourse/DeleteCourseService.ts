import IRepository from "../../repository/IRepository"
import Course from "../../entity/Course"

export default class DeleteCourseService{

    constructor(private repository: IRepository<Course>){}

    async execute(id: string): Promise<void>{
        await this.repository.delete(id)
    }
}