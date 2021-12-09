import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from 'src/modules/task/task.module';
import { UserEntity } from './user-entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Global()
@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
}
