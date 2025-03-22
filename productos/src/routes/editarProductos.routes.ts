import {Router} from "express";
import { Editar } from "../controller/editarProducto.controller";

const router=Router();

router.put("/editar", Editar);

export default router;
//cierre del router para desplegar 

