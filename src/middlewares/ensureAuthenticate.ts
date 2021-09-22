import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"


interface IPayload{ //evitar erro de não conversão do tipo "() => string" para "string"
    sub : string;
}
 //verificação a partir do token gerado no login se o usuário é válido
export function ensureAuthenticate(req: Request, res: Response, next: NextFunction){

    // Receber o token, verificar se o token está preenchido 
    // Verificar se o token é válido
    const authToken = req.headers.authorization //Bearer token
    
    if(!authToken){
        return res.status(401).json({message: "Missing token"});
    }
    //" " baseado em como o token está vindo, "espaço" divide o token do bearer
    const [,token] = authToken.split(" ") //retirar o bearer do token vindo do header
    
    try{
        const { sub } = verify(token, "d21c103f6707ac8b12eff6688ff87ab0") as IPayload;

        req.user_id = sub;


        return next();
    } catch(err){
        return res.status(401).json({message: "Unauthorized User"})
    }
   
}
