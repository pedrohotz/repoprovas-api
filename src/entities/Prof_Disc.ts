import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('prof_disc')
export default class Prof_Disc{
    @PrimaryGeneratedColumn()
    Id: number;
    
    @Column()
    DisciplinaId: number;

    @Column()
    ProfessorId: number;

   
    getId(){
        return this.Id;
    }
}