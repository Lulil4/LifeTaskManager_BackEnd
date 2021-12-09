import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FolderModel } from './folder.interface';
import { FolderService } from './folder.service';

@Controller('folders')
export class FolderController {
    constructor(private folderService:FolderService){};

    @Post()
    addFolder(@Body() folder:FolderModel) : any{
        return this.folderService.addFolder(folder);
    }

    @Get()
    getFolder():any{
        return this.folderService.findAll();
    }
    
    @Delete(":id")
    deleteFolder(@Param() params): any{
        return this.folderService.deleteFolder(params.id);
    }

    @Get("/:id/user")
    getFolderFromUser(@Param() params):any{
        return this.folderService.findAllFoldersFromUser(params.id);
    }

    @Get(":id/tasks")
    getTasksFromFolder(@Param() params):any{
        return this.folderService.findAllTasksFromFolder(params.id);
    }

}
