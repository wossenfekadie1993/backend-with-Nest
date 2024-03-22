import { Injectable,Inject } from '@nestjs/common';
import {UserDto} from './userDTO/createUserDto.dto';
import { User } from 'src/interfaces/user.interface';
import {USE}
import {Model} from 'mongoose'
@Injectable()
export class UserService {
    private readonly users : UserDto[]=[]

    createUser(user:UserDto){
        this.users.push(user)
    }
    getUsers():UserDto[]{
        return this.users
    }
    
}