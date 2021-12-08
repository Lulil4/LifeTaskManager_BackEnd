import { Module } from '@nestjs/common';
import { DbModule } from './database/db.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [DbModule, TaskModule]
})
export class AppModule {}
