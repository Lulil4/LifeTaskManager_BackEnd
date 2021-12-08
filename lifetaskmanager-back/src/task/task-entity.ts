import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("task")
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:String;

    @Column()
    finished:boolean;
}
