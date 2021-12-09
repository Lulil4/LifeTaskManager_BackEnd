import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
    password:string;
}