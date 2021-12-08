import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from 'src/task/task.module';
import { FolderEntity } from './folder-entity';
import { FolderController } from './folder.controller';
import { FolderService } from './folder.service';

@Global()
@Module({
  imports:[TypeOrmModule.forFeature([FolderEntity]), TaskModule],
  controllers: [FolderController],
  providers: [FolderService],
})
export class FolderModule {
}
