import {Router} from "express";

import { createNewPlace, getPlaces } from "../controllers/place.controller";

const router = Router()

router.get('/Place', getPlaces)

router.post('/Place', createNewPlace)

router.get('/Place', getPlaces)

router.delete('/Place', getPlaces)

router.put('/Place', getPlaces)

export default router