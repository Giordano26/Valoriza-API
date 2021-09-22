import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
  
  const { user_id } = req; //recebe a passagem do id pelo middleware de autenticação

  
  const usersRepositories = getCustomRepository(UsersRepositories); //resgata as props do User
  
  const { admin } = await usersRepositories.findOne(user_id); //recupera o valor atrelado ao campo admin


  //Verificar se usuário é admin 

  if(admin){
    return next();
  }

  return res.status(401).json({
      error: "Unauthorized"
  });
}