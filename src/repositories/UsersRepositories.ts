import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User"


@EntityRepository(User)
class UsersRepositories extends Repository<User>{} //extends para aplicar todos métodos incluídos em repository

export { UsersRepositories }