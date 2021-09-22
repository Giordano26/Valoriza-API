import { Request, Response } from "express"
import { CreateComplimentService } from "../services/CreateComplimentService"

class CreateComplimentController {
    async handle(req: Request, res: Response){
        const { tag_id, user_receiver, message } = req.body;
        //obriga o usuário passar pela etapa de autenticação para criar o elogio
        const {user_id} = req; //user_id vindo do auth do middleware
        
        const createComplimentService = new CreateComplimentService()

       const compliment = await createComplimentService.execute({
            tag_id,
            user_sender : user_id,
            user_receiver,
            message
        })

        return res.json(compliment);
    }
}

export { CreateComplimentController }