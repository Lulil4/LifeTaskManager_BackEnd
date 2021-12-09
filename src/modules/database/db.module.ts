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
            host:'us-cdbr-east-04.cleardb.com',
            port:3306,
            username:'b32d7cf1718f2e',
            password:'87050f14',
            database:'heroku_5d1208c4743263e',
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
