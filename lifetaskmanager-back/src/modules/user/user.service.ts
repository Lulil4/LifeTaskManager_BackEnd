import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user-entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRP:Repository<UserEntity>
    ){};
    
    async addUser(user:any){
        await this.userRP.insert(user);
        return user;
    }

    async findAll(){
        return await this.userRP.find();
    }

    async findByUsername(user:string){
        return this.userRP.findOne({username:user});
    }

    async deleteUser(id:number){
        return this.userRP.delete(id);
    }
}
