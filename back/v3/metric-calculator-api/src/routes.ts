import { Router } from "express";
import { adaptRoute } from "./shared/adapters/ExpressRouteAdapter";
import { calculateHouseController } from "./useCases/calculateHouse";

const router = Router()

router.get('/', (req, res) => {
    return res.status(200).send('POST {size: value} to use calculator')
})

router.post('/', adaptRoute(calculateHouseController))

export { router }