import IRepository from "../../repository/IRepository"
import Course from "../../entity/Course"

export default class ListCourseService{
 
    constructor(private repository: IRepository<Course>){}

    async execute(): Promise<Course[]>{
        return await this.repository.findAll()
    }
}