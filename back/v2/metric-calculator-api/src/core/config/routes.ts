import { Express, Router } from 'express'

export default (app: Express): void => {
    const router = Router()
    app.use('/api', router)
    router.get('/test', (req, res) => {
        console.log(req)
        res.status(200).json({ maria: "vixe" })
    })
}
