import {Request, Response} from "express";
import {pool} from "../models/DB";

export const Eliminar= async (req: Request, res: Response) => { //Crear controlador
    
    try{
        
        console.log("Body recibido:", req.body);
        const { idProducto} = req.body;
        
        const [tablas]= await pool.query('delete from productos where idProducto=(?); ', [idProducto]);
        res.status(200).json({
            succes:true,
            data:tablas,
        })
    }catch (error:any){
        console.error("Error al actualizar producto:", error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor",
            error: error.message || "Error desconocido", 
        });
    }
}