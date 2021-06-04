import { Router } from "express";
import { calculateHouseController } from "./useCases/calculateHouse";

const router = Router()

router.get('/', (req, res) => {
    return res.status(200).send('POST {size: value} to use calculator')
})

router.post('/', (req, res) => {
    return calculateHouseController.handle(req, res)
})

export { router }