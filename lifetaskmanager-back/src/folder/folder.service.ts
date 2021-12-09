import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskService } from 'src/task/task.service';
import { Repository } from 'typeorm';
import { FolderEntity } from './folder-entity';

@Injectable()
export class FolderService {
    constructor(@InjectRepository(FolderEntity) private readonly folderRP:Repository<FolderEntity>,
    private taskService:TaskService
    ){};
    
    async addFolder(task:any){
        await this.folderRP.insert(task);
        return task;
    }

    async findAll(){
        return await this.folderRP.find();
    }

    async deleteFolder(id:number){
        await this.taskService.deleteAllTasksFromFolder(id)
        .then(()=>{
            return this.folderRP.delete(id);
        })
        .catch((error)=>{
            return error;
        });
    }

    async findAllTasksFromFolder(id:number){
        return this.taskService.getTasksFromFolder(id);
    }
}
