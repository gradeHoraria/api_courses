import IRepository from "./IRepository"
import Course from "../entity/Course"
import mysql from "mysql"

export default class Mysql implements IRepository<Course>{

    private host: string = "atendimentos.cj1qdgzb6cxq.us-east-2.rds.amazonaws.com"
    private user: string = "admin"
    private password: string = "admin123"
    private database: string = "sggh_courses"
    private connection: mysql.Connection

    constructor(){
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })

        this.connection.connect((error) => {
            if(error){
                console.error("Error de conexao to mysql: " + error)
                return
            }
            console.log("Connected to mysql")
        })
    }

    async create(course: Course): Promise<Course>{
        const query = "INSERT INTO courses (name, description) VALUES (?, ?)" 
        const values = [course.name, course.description]

        this.connection.query(query, values, (error, results, fields) => {
            if(error){
                console.error("Error creating course in mysql: " + error)
                return
            }
            console.log(`Course ${course.name} created in mysql`)
        })

        return course
    }

    async update(id: string, course: Course): Promise<Course>{
        const query = "UPDATE courses SET name = ?, description = ? WHERE id = ?" 
        const values = [course.name, course.description, id]

        this.connection.query(query, values, (error, results, fields) => {
            if(error){
                console.error("Error updating course in mysql: " + error)
                return
            }
            console.log(`Course ${course.name} updated in mysql`)
        })

        return course
    }

    async findById(id: string): Promise<Course>{
        const query = "SELECT * FROM courses WHERE id = ?"
        const values = [id]

        return new Promise<Course>((resolve, reject) => {
            this.connection.query(query, values, (error, results, fields) => {
                if(error){
                    console.error("Error finding course in mysql: " + error)
                    reject(error)
                    return
                }
                
                if(results.length > 0){
                    resolve(new Course(results[0].name, results[0].description))
                }
            })
        })
    }

    async findAll(): Promise<Course[]>{
        const query = "SELECT * FROM courses"

        return new Promise<Course[]>((resolve, reject) => {
            this.connection.query(query, (error, results, fields) => {
                if(error){
                    console.error("Error finding courses in mysql: " + error)
                    reject(error)
                    return
                }
                
                const courses: Course[] = []
                results.forEach((result: any) => {
                    courses.push(new Course(result.name, result.description))
                })

                resolve(courses)
            })
        })
    }

    async delete(id: string): Promise<void>{
        const query = "DELETE FROM courses WHERE id = ?"
        const values = [id]

        this.connection.query(query, values, (error, results, fields) => {
            if(error){
                console.error("Error deleting course in mysql: " + error)
                return
            }
            console.log(`Course with id ${id} deleted in mysql`)
        })
    }
}