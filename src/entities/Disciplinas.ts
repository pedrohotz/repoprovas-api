import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity('disciplinas')
export default class Disciplina{
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    periodo: number;

   getId(){
       return this.Id;
   }
}