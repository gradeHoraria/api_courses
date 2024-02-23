import Express from "express"
import routes from "./routes"
import cors from "cors"

const app = Express()

app.use(cors())
app.use(Express.json())
app.use(routes)

export default app