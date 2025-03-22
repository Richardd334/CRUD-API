import {Router} from "express";

import { getAll } from "../controller/productos.controller";
//importar ruta del controlador

const router=Router();
//se genera constante

router.get("/all", getAll);
//despliega lo que tenga la var getAll cuando se ponga el /all

export default router;
//cierre del router para desplegar 
