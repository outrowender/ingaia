
import { Express } from 'express'
import { cors } from '../middleware/cors'
import { bodyParser } from '../middleware/body-parser'
import { contentType } from '../middleware/content-type'

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(cors)
    app.use(contentType)
}
