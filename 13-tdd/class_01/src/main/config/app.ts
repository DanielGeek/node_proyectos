import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'
import express = require('express')

const app = express()
middlewares(app)
// ROUTES  INIT
routes(app)
dotenv()
export default app
