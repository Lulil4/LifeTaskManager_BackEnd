import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DbModule } from './modules/database/db.module';
import { FolderController } from './modules/folder/folder.controller';
import { FolderModule } from './modules/folder/folder.module';
import { TaskController } from './modules/task/task.controller';
import { TaskModule } from './modules/task/task.module';
import { UserModule } from './modules/user/user.module';
import { verifyToken } from './utils/tokenMiddleware';

@Module({
  imports: [DbModule, TaskModule, FolderModule, UserModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(verifyToken)
      .forRoutes(FolderController, TaskController);
  }
}
