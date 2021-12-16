import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('categorias')
export default class Categoria{
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;


    getName(){
       return this.Name;
    }
}