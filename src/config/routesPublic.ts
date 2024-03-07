import { Router } from "express";
import { getTokenController } from "../Courses";
import { swaggerFile, swaggerUi } from "./swagger";

const routesPublic = Router()

routesPublic.post("/token", (req, res) => {
    getTokenController.handle(req, res)

    /*
    #swagger.description = 'Endpoint para gerar token'
    #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Informações do usuário',
        required: true,
        type: 'object',
    }   
    */
})

routesPublic.use('/doc', swaggerUi.serve)
routesPublic.get('/doc', swaggerUi.setup(swaggerFile))

export default routesPublic