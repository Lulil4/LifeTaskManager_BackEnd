import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("folder")
export class FolderEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId:number;

    @Column()
    description:String;
}