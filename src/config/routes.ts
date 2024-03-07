import { Router } from "express"
import { createCourseController, editCourseController, deleteCourseController, listCoursesController, viewCourseController, getTokenController} from "../Courses"
import keycloak from "./security"

const routes = Router()

routes.get("/", keycloak.protect(), (req, res) => {
    listCoursesController.handle(req, res)

    /* 
    #swagger.description = 'Endpoint para listar todos os cursos'
    */
})

routes.get("/:id", keycloak.protect(), (req, res) => {
    viewCourseController.handle(req, res)
    
    /*
    #swagger.description = 'Endpoint para visualizar um curso específico'
    */
})

routes.post("/", keycloak.protect(), (req, res) => {
    createCourseController.handle(req, res)

    /*
    #swagger.description = 'Endpoint para criar um curso'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações do curso',
        required: true,
        type: 'object',
    }   
    */
})

routes.put("/:id", keycloak.protect(), (req, res) => {
    editCourseController.handle(req, res)

    /*
    #swagger.description = 'Endpoint para editar um curso'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações do curso',
        required: true,
        type: 'object',
    }
    */
})

routes.delete("/:id", keycloak.protect(), (req, res) => {
    deleteCourseController.handle(req, res)

    /*
    #swagger.description = 'Endpoint para deletar um curso'
    */
})

export default routes