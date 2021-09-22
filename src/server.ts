import "reflect-metadata"; 
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database"

const app = express();

app.use(express.json()) //definindo nao express a utilização de json como query param

//passagem das rotas definidas em ./routes.ts para a aplicação no app
app.use(router); 

//middlewares
app.use((err: Error,req: Request,res: Response,next: NextFunction) =>{
  if(err instanceof Error){ //verificando a tipagem
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: "Error",
    error: "Internal Server Error"
  });
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));



/*
  Tipos de parâmetros 
  * Route Params => http://localhost:3000/produtos/84854685
  * Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom
  * Body Params => {
  * "name" : "teclado",
  * "description" : "teclado bom"
  * }
*/