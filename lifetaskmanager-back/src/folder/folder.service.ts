import { Injectable } from '@nestjs/common';
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

    async updateFolder(id:number, task:any){
        await this.folderRP.update(id, task);
        return task;
    }

    async findAll(){
        return await this.folderRP.find();
    }

    async deleteFolder(id:number){
        return await this.folderRP.delete(id);
    }

    async findAllTasksFromFolder(id:number){
        return this.taskService.getTasksFromFolder(id);
    }
}
