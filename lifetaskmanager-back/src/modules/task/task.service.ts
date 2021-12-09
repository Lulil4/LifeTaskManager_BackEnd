import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task-entity';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskEntity) private readonly taskRP:Repository<TaskEntity>){};

    async addTask(task:any){
        await this.taskRP.insert(task);
        return task;
    }

    async updateTask(id:number, task:any){
        await this.taskRP.update(id, task);
        return task;
    }

    async findAll(){
        return await this.taskRP.find();
    }

    async deleteTask(id:number){
        return await this.taskRP.delete(id);
    }

    async getTasksFromFolder(folderId:number){
        return this.taskRP.find({"folderId":folderId});
    }

    async deleteAllTasksFromFolder(folderId:number){
        const tasks = await this.taskRP.find({"folderId":folderId});
        tasks.forEach(task => {
            this.deleteTask(task.id);
        });
    }
}
