import {Router} from "express";
import { Insertar } from "../controller/insertarproductos.controller";

const router=Router();

router.post("/insertar", Insertar);

export default router;
//cierre del router para desplegar 

