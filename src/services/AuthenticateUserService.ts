import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"

import { UsersRepositories } from "../repositories/UsersRepositories";

import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService{

    async execute({email, password} : IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email 
        });

        if(!user){
            throw new Error("Email/Password incorrect")
        }
        // verificar se a senha está correta

        //compara a geração de hash do input com o hash armazenado na db
        const passwordMatch = await compare(password, user.password) 


        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }
        //Gerar token se tudo estiver correto

        const token = sign(
        {
            email: user.email
        }, "d21c103f6707ac8b12eff6688ff87ab0",
        {
            subject: user.id,
            expiresIn: "1d"
        }
        );


        return token; 

    }

} export {AuthenticateUserService}