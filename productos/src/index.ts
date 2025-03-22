import express from 'express';
import dotenv from "dotenv";
import {productosRoutes} from "./routes/index";
import {InsertarRoutes} from "./routes/index";
import {EditarRoutes} from "./routes/index";
import {EliminarRoutes} from "./routes/index";
//import { pool } from "./models/DB" 

dotenv.config({path:"/home/taller4v/productos/src/.env"}); //especificacion del puerto


const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.send('¡Productos!');       //Principal
});


app.use("/productos", productosRoutes);

app.use("/productos", InsertarRoutes); 

app.use("/productos", EditarRoutes);

app.use("/productos", EliminarRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

