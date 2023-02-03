import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import clientRouter from './routes/client.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware';
import clientLoginRouter from "./routes/clientLogin.routes";
import contactrouter from "./routes/contact.routes";

const app = express()
app.use(express.json())

app.use("/clients", clientRouter)
app.use("/login", clientLoginRouter)
app.use("/contacts", contactrouter)

app.use(handleErrorMiddleware)
export default app
