import Express from "express"
import routes from "./routes"
import cors from "cors"
import keycloak from "./security"
import routesPublic from "./routesPublic"

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(routesPublic)
app.use(keycloak.middleware())
app.use(routes)

export default app 