import {Request, Response, NextFunction } from "express";

const express = require('express');
const axios= require('axios');
const app=express();
const port=3000;


app.use((req: Request, res: Response , next: NextFunction)=>{
    const token= req.headers['authorization'];
    if (!token || token !== 'mi-token-secreto'){
        return res.status(401).json({error: 'no autizado'});
    }
    next();
});

app.get('/users', async (req: Request, res:Response)=>{

    try{
        const response =await axios.get('http://microservicio-usuarios:4000/users');
        res.json(response.data);

    }  catch(error){
        res.status(500).json({error: 'Error al obtener productos'});
    }
});

app.get('/Usuarios', async (req: Request, res:Response)=>{

    try{
        const response =await axios.get('http://microservicio-usuarios:4000/users');
        res.json(response.data);

    }  catch(error){
        res.status(500).json({error: 'Error al obtener usuarios'});
    }
});

app.get('/Productos', async (req: Request, res:Response)=>{

    try{
        const response =await axios.get('http://microservicio-usuarios:4000/users');
        res.json(response.data);

    }  catch(error){
        res.status(500).json({error: 'Error al obtener productos'});
    }
});

app.post('/productos', async (req: Request, res: Response) => {
    try {
        const response = await axios.post('http://microservicio-productos:3001/productos', req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error al insertar producto:", error);
        res.status(500).json({ error: 'Error al insertar producto' });
    }
});

app.put('/productos', async (req: Request, res: Response) => {
    try {
        const response = await axios.put('http://microservicio-productos:3001/productos', req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error al insertar producto:", error);
        res.status(500).json({ error: 'Error al insertar producto' });
    }
});

app.delete('/productos', async (req: Request, res: Response) => {
    try {
        const response = await axios.delete('http://microservicio-productos:3001/productos', req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).json({ error: 'Error al insertar producto' });
    }
});
