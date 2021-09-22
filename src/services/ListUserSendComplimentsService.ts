import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


//lista todos elogios enviados pelo user
class ListUserSendComplimentsService {

    async execute(user_id: string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepository.find({
            where: {
                user_sender: user_id
            },
            //relations: ["userSender","userReceiver","tag"]
        })

        return compliments
    }
}

export { ListUserSendComplimentsService }