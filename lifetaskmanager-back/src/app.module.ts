import { Module } from '@nestjs/common';
import { DbModule } from './database/db.module';
import { FolderModule } from './folder/folder.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [DbModule, TaskModule, FolderModule]
})
export class AppModule {}
