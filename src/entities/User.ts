import { Exclude } from "class-transformer";
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"


@Entity("users")
class User {
  
  @PrimaryColumn()
  readonly id : string; //readonly porque é inalterável

  @Column()
  name: string;

  @Exclude() //não envia dados sensíveis para o json na rota get
  @Column()
  email: string;

  @Exclude() //não envia dados sensíveis para o json na rota get
  @Column()
  password: string;

  @Column()
  admin: boolean;

  @Exclude() //não envia dados desnecessários na busca de usuário
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){ //se receber nulo ou vazio é necessário a criação de um id novo
      this.id = uuid(); //v4
    }
  }

}

export { User };


//Entidade < - > ORM < - > DB (Users)