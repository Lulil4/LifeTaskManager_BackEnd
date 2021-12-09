import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FolderEntity } from 'src/modules/folder/folder-entity';
import { TaskEntity } from 'src/modules/task/task-entity';
import { TaskModule } from 'src/modules/task/task.module';
import { Connection } from 'typeorm';
import { UserEntity } from '../user/user-entity';

@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:'mysql',
            host:'localhost',
            port:3306,
            username:'root',
            password:'123456',
            database:'db_rlm',
            entities:[
                TaskEntity, 
                FolderEntity,
                UserEntity
            ],
            synchronize:true
        }),
        TaskModule
    ],
})
export class DbModule {
    constructor(private readonly connection:Connection){};
}
