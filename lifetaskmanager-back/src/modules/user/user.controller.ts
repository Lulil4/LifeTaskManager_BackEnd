import { Controller, Get, Post, Body, Param, Res, Delete } from '@nestjs/common';
import { UserModel } from './user.interface';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Controller('users')
export class UserController {
    constructor(private userService:UserService){};

    @Post()
    async addUser(@Body() user:UserModel){

        
        const saltRounds = 10;
        const password = user.password;
        user.password = await bcrypt.hash(password, saltRounds);

        return this.userService.addUser(user);
    }

    //FOR TESTING PURPOSE ONLY
    @Get()
    getUsers():any{
        return this.userService.findAll();
    }

    @Get(":username")
    findByUsername(@Param() params):any{
        return this.userService.findByUsername(params.username);
    }

    @Post("/login")
    async loginUser(@Body() user:UserModel, @Res() response){
        const {username,password} = user;
        const userOnDb = await this.userService.findByUsername(username);
        const correctPass = userOnDb == null? false : await bcrypt.compare(password, userOnDb.password);

        if (!(user && correctPass)){
            return response.status(404).json({error:"Validation error"});
        }
        const {id} = userOnDb;

        const userToken =  {
            id: userOnDb.id,
            username: userOnDb.username
        };

        const newToken =  await jwt.sign(userToken, "secretword");

        return response.status(200).json({newToken, id});
    }

    @Delete(":id")
    deleteFolder(@Param() params): any{
        return this.userService.deleteUser(params.id);
    }
}
