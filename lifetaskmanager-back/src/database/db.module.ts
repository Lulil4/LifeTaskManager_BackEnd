import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderEntity } from 'src/folder/folder-entity';
import { TaskEntity } from 'src/task/task-entity';
import { TaskModule } from 'src/task/task.module';
import { Connection } from 'typeorm';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:'mysql',
            host:'localhost',
            port:3306,
            username:'root',
            password:'123456',
            database:'db_tasks',
            entities:[
                TaskEntity, 
                FolderEntity
            ],
            synchronize:true
        }),
        TaskModule
    ],
})
export class DbModule {
    constructor(private readonly connection:Connection){};
}
