import express from 'express'
import config from './config' 
import placesRoutes from './routes/place.routes'

const app = express()


app.set('port', config.port)


app.use(placesRoutes)

export default app
