import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('provas')
export default class ProvaEntity{
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;
    
    @Column()
    CategoryId: number;

    @Column()
    Prof_DiscId: number;
    
    @Column()
    Link: string;

}