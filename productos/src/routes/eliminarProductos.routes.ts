import {Router} from "express";
import { Eliminar } from "../controller/Eliminarproducto.controller";

const router=Router();

router.delete("/eliminar", Eliminar);

export default router;
//cierre del router para desplegar 
