import { Router } from "express";
import { adaptRoute } from "./shared/adapters/ExpressRouteAdapter";
import { calculateHouseController } from "./useCases/calculateHouse";

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json';

const router = Router()

//documentation routes
router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDocument));

//api routes
router.get('/', (req, res) => (res.redirect('/swagger')))
router.post('/', adaptRoute(calculateHouseController))

export { router }