import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import axios from 'axios';


dotenv.config({path:"/home/taller4v/api_gateway/src/.env"});


const app = express();
app.use(cors())


const PORT = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

app.get("/productos/all", async(req, res)=>{
  const respuesta =await axios.get("http://localhost:3001/productos/all");
  res.send({"Los productos son":respuesta.data});
})

app.get("/usuarios/all", async(req, res)=>{
  const respuesta =await axios.get("http://localhost:3002/Usuarios/all");
  res.send({"Los Usuarios son":respuesta.data});
})

app.post("/productos/insertar", async(req, res)=>{
  try {
    const respuesta = await axios.post("http://localhost:3001/productos/insertar", req.body);
    res.json(respuesta.data);
  } catch (error) {
    console.error("Error al insertar producto:", error);
    res.status(500).json({ error: 'Error al insertar producto' });
  } 
})

app.put("/productos/editar", async(req, res)=>{
  try {
   // Obtener el ID del producto a editar
    const respuesta = await axios.put(`http://localhost:3001/productos/editar`, req.body);
    res.json(respuesta.data);
} catch (error) {
    console.error("Error al editar producto:", error);
    res.status(500).json({ error: 'Error al editar producto' });
}
})

app.delete("/productos/eliminar", async (req, res) => {
  try {
      const respuesta = await axios.delete('http://localhost:3001/productos/eliminar', {
          data: req.body, // Enviar el cuerpo en la propiedad `data`
      });
      res.json(respuesta.data);
  } catch (error) {
      console.error("Error al eliminar producto:", error);
      res.status(500).json({ error: 'Error al eliminar producto' });
  }
});
