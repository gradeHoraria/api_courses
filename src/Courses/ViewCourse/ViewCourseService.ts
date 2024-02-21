import IRepository from "../../repository/IRepository"
import Course from "../../entity/Course"

export default class ViewCourseService{

    constructor(private repository: IRepository<Course>){}

    async execute(id: string): Promise<Course>{
        return await this.repository.findById(id)
    }
}