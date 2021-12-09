import { Module } from '@nestjs/common';
import { DbModule } from './modules/database/db.module';
import { FolderModule } from './modules/folder/folder.module';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DbModule, TaskModule, FolderModule, UserModule]
})
export class AppModule {}
