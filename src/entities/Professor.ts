import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('professores')
export default class Professor{
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;
}