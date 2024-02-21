import IRepository from "../../repository/IRepository"
import CourseDTO from "../../dto/CourseDTO"
import Course from "../../entity/Course"

export default class CreateCourseService{

    constructor(private repository: IRepository<Course>){}

    async execute(data: CourseDTO): Promise<Course>{
        const course = new Course(data.name, data.description)
        return await this.repository.create(course)
    }
}