import { config as dotenv } from 'dotenv'
import routes from './routes'
import express = require('express')

const app = express()
// ROUTES  INIT
routes(app)
dotenv()
export default app
