import {Request, Response} from "express";
import {pool} from "../models/DB";

export const Insertar= async (req: Request, res: Response) => { //Crear controlador
    
    try{
        console.log("Body recibido:", req.body);
        const { nombre, precio } = req.body;

        const [tablas]= await pool.query('Insert into productos (nombre, precio) Values (?,?)', [nombre, precio]);
        res.status(200).json({
            succes:true,
            data:tablas,
        })
    }catch (error:any){
        console.error("Error al insertar producto:", error);
        res.status(500).json({
            success: false,
            message: "Error en el servidor",
            error: error.message || "Error desconocido", 
        });
    }
}
