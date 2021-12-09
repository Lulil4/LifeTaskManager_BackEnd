import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskModel } from './task.interface';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private taskService:TaskService){};

    @Post()
    addTask(@Body() task:TaskModel) : any{
        return this.taskService.addTask(task);
    }

    @Get()
    getTasks():any{
        return this.taskService.findAll();
    }

    @Put(":id")
    updateTask(@Body() task: TaskModel, @Param() params): any{
        return this.taskService.updateTask(params.id, task);
    }

    @Delete(":id")
    deleteTask(@Param() params): any{
        return this.taskService.deleteTask(params.id);
    }
}
